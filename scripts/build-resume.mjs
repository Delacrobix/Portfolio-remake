// Builds the one-page résumé PDFs (English and Spanish) from the same content the site shows.
// Usage: yarn build-resume
// Needs Google Chrome or Chromium; set CHROME_PATH if it is not in the default macOS location.
//
// The layout follows the usual advice for résumés read by applicant tracking systems:
// one column, standard section headings, real text, no tables, images or sidebars.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
// Written to public/ so each file keeps a plain, stable URL: https://jeffrm.com/jeffrey-rengifo-cv-en.pdf
const OUTPUT_DIR = join(ROOT, "public");
const FONT_URL = pathToFileURL(join(ROOT, "src/assets/fonts/hanken-grotesk-latin.woff2")).href;
const CHROME =
  process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// Body sizes to try, largest first, until the résumé fits on one page.
// Below the last one the text is too small to read comfortably: shorten the content instead.
const FONT_SIZES_PT = [10, 9.8, 9.6, 9.4, 9.2, 9];

const AUTHOR = "Jeffrey Rengifo";
const EMAIL = "jeffrey.rengifom@gmail.com";
// Shown as "Label: text", with the text linked. The portfolio label is translated in LABELS.
const LINKS = [
  { label: "portfolio", text: "jeffrm.com", url: "https://jeffrm.com" },
  { label: "LinkedIn", text: "jeffrey-rerin", url: "https://www.linkedin.com/in/jeffrey-rerin/" },
  { label: "GitHub", text: "Delacrobix", url: "https://github.com/Delacrobix" },
];

// Site content the résumé leaves out: experience bullets matching any of these.
const OMITTED_BULLETS = [/pull requests/i];

// Résumé-only wording that the site itself does not show.
const LABELS = {
  en: {
    summary:
      "I work on search, observability and AI agents. I write technical articles for Elastic's official blogs and work on Elasticsearch projects for clients.",
    portfolio: "Portfolio",
    skills: "Skills",
    publications: "Publications",
    ownProduct: "own product",
    education: "Education and languages",
    educationText: "Systems Engineering, University of Antioquia (in progress).",
    languagesText: "Languages: Spanish (native), English (B2).",
  },
  es: {
    summary:
      "Trabajo en búsqueda, observabilidad y agentes de IA. Escribo artículos técnicos para los blogs oficiales de Elastic y trabajo en proyectos con Elasticsearch para clientes.",
    portfolio: "Portafolio",
    skills: "Habilidades",
    publications: "Publicaciones",
    ownProduct: "producto propio",
    education: "Educación e idiomas",
    educationText: "Ingeniería de Sistemas, Universidad de Antioquia (en curso).",
    languagesText: "Idiomas: español (nativo), inglés (B2).",
  },
};

const readJson = async (path) => JSON.parse(await readFile(join(ROOT, path), "utf8"));
const escapeHtml = (text) =>
  String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const link = (url, text) => `<a href="${escapeHtml(url)}">${escapeHtml(text)}</a>`;
const fill = (text, values) => text.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? "");
const list = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
// Drops a closing period, except after an abbreviation such as "EE. UU."
const trimPeriod = (text) => (/\b[A-Z]{1,3}\.$/.test(text) ? text : text.replace(/\.$/, ""));
const section = (title, body) => `<section><h2>${escapeHtml(title)}</h2>${body}</section>`;

/** A dated entry: title and organization on one line, the period at the right, then the detail. */
function entry({ title, organization, period, body }) {
  return `<article>
    <div class="entry-head">
      <h3>${escapeHtml(title)}<span class="org">, ${escapeHtml(trimPeriod(organization))}</span></h3>
      <span class="period">${escapeHtml(period)}</span>
    </div>
    ${body}
  </article>`;
}

function buildHtml(language, t, cache, videoCount, fontSizePt) {
  const labels = LABELS[language];
  const counts = {
    total: cache.search.length + cache.obs.length,
    search: cache.search.length,
    obs: cache.obs.length,
    videos: videoCount,
  };
  const numberFormat = new Intl.NumberFormat(language === "es" ? "es-CO" : language);
  const views = cache.views ? `+${numberFormat.format(Math.floor(cache.views.total / 1000) * 1000)}` : null;
  const rank = cache.topAuthors.findIndex(({ author }) => author === AUTHOR) + 1;
  const stats = t.articles.stats;

  const contact = [
    `<a class="email" href="mailto:${EMAIL}">${EMAIL}</a>`,
    ...LINKS.map(({ label, text, url }) => `${escapeHtml(labels[label] ?? label)}: ${link(url, text)}`),
  ].join('<span class="bar"> | </span>');

  const skills = t.areas.list
    .map((area) => `<p><b>${escapeHtml(area.title)}:</b> ${escapeHtml(area.text)}</p>`)
    .join("");

  const experience = t.experience.list
    .map((job) =>
      entry({
        title: job.position,
        organization: job.company,
        period: job.period,
        body: job.bullets
          ? list(
              job.bullets
                .filter((bullet) => !OMITTED_BULLETS.some((pattern) => pattern.test(bullet)))
                .map((bullet) => fill(bullet, counts))
            )
          : `<p>${escapeHtml(job.text)}</p>`,
      })
    )
    .join("");

  const projects =
    t.projects.list
      .map((project) =>
        entry({
          title: project.name,
          organization: project.client,
          period: project.period,
          body: `<p>${escapeHtml(project.text ?? project.bullets.join(" "))}</p>`,
        })
      )
      .join("") +
    t.projects.products
      .map(
        (product) =>
          `<p class="product"><b>${escapeHtml(product.name)}</b> (${labels.ownProduct}). ${escapeHtml(product.text)}${
            product.url ? ` ${link(product.url, product.url.replace(/^https?:\/\//, ""))}` : ""
          }</p>`
      )
      .join("");

  // The article and video counts are already in the experience section, so only reach and rank go here.
  const publications = [
    views && `${views} ${stats.views}.`,
    rank > 0 && `${fill(stats.rankValue, { rank })} ${stats.rank}.`,
  ]
    .filter(Boolean)
    .map(escapeHtml)
    .join(" ");

  // Courses are on the site; the résumé lists only the professional certifications.
  const certifications = t.certifications.main
    .map((cert) => `<p><b>${link(cert.link, cert.name)}.</b> ${escapeHtml(cert.meta)}</p>`)
    .join("");

  // One line each: placing, event and project, then organizer and date (the team is left out).
  const awards = t.awards.list
    .map((award) => {
      const [organizer, date] = award.meta.split(". ");
      return `<p><b>${escapeHtml(`${award.placing}, ${award.event}`)}</b> (${escapeHtml(
        award.project
      )}). ${escapeHtml(`${organizer}. ${date}.`)}</p>`;
    })
    .join("");

  return `<!doctype html>
<html lang="${language}">
<head>
<meta charset="utf-8">
<title>${AUTHOR} · ${escapeHtml(trimPeriod(t.intro.role))}</title>
<style>
  @font-face { font-family: "Hanken Grotesk"; font-weight: 400 800; src: url("${FONT_URL}") format("woff2"); }
  @page { size: Letter; margin: 0; }
  * { box-sizing: border-box; margin: 0; }
  html { font-size: ${fontSizePt}pt; }
  body {
    width: 8.5in; height: 11in; padding: 0.5in 0.6in 0.4in;
    font-family: "Hanken Grotesk", Arial, sans-serif; line-height: 1.34; color: #14181f;
    font-variant-numeric: tabular-nums; print-color-adjust: exact;
  }
  a { color: inherit; text-decoration: underline; text-decoration-color: #1d4ed8; text-decoration-thickness: 0.8pt; text-underline-offset: 1.6pt; }
  h1 { font-size: 2.5rem; line-height: 1; font-weight: 800; letter-spacing: -0.03em; }
  .role { margin-top: 4pt; font-size: 1.25rem; font-weight: 600; }
  .contact { margin-top: 5pt; color: #4a5361; }
  .contact a { color: #14181f; }
  .contact .email { font-size: 1.1rem; font-weight: 700; }
  .contact .bar { color: #c5ccd5; }
  .summary { margin-top: 7pt; }
  h2 {
    margin: 8.5pt 0 4pt; padding-bottom: 2pt; border-bottom: 1pt solid #14181f;
    font-size: 1.1rem; font-weight: 800; letter-spacing: -0.01em;
  }
  article { margin-bottom: 4.5pt; break-inside: avoid; }
  .entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 10pt; }
  h3 { font-size: 1rem; font-weight: 700; }
  .org { font-weight: 400; color: #4a5361; }
  .period { flex: none; color: #4a5361; }
  ul { padding-left: 11pt; }
  li::marker { color: #6b7482; }
  p + p, .product { margin-top: 1.5pt; }
  b { font-weight: 700; }
</style>
</head>
<body>
  <header>
    <h1>${AUTHOR}</h1>
    <p class="role">${escapeHtml(trimPeriod(t.intro.role))}</p>
    <p class="contact">${contact}</p>
    <p class="summary">${escapeHtml(labels.summary)}</p>
  </header>
  <main>
    ${section(labels.skills, skills)}
    ${section(t.nav.experience, experience)}
    ${section(t.nav.projects, projects)}
    ${section(labels.publications, `<p>${publications}</p>`)}
    ${section(t.nav.certifications, certifications)}
    ${section(t.nav.awards, awards)}
    ${section(labels.education, `<p>${labels.educationText}</p><p>${labels.languagesText}</p>`)}
  </main>
</body>
</html>`;
}

// A PDF lists one "/Type /Page" object per page (and one "/Type /Pages" tree, which is skipped).
const countPages = (pdf) => (pdf.toString("latin1").match(/\/Type\s*\/Page(?!s)/g) ?? []).length;

function printToPdf(htmlPath, pdfPath) {
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "ignore" }
  );
}

if (!existsSync(CHROME)) {
  throw new Error(`Chrome not found at "${CHROME}". Set CHROME_PATH to a Chrome or Chromium binary.`);
}

const cache = await readJson("src/data/labs-cache.json");
const videos = await readJson("src/data/videos.json");
const workDir = await mkdtemp(join(tmpdir(), "resume-"));

try {
  for (const language of ["en", "es"]) {
    const translations = await readJson(`src/languages/${language}.json`);
    const htmlPath = join(workDir, `resume-${language}.html`);
    const pdfPath = join(OUTPUT_DIR, `jeffrey-rengifo-cv-${language}.pdf`);
    let pages = 0;
    let usedSize = 0;
    for (const fontSizePt of FONT_SIZES_PT) {
      await writeFile(htmlPath, buildHtml(language, translations, cache, videos.length, fontSizePt));
      printToPdf(htmlPath, pdfPath);
      pages = countPages(await readFile(pdfPath));
      usedSize = fontSizePt;
      if (pages === 1) break;
    }
    console.log(`Wrote ${pdfPath} (${pages} page${pages === 1 ? "" : "s"}, ${usedSize}pt)`);
    if (pages > 1) console.warn("  The content no longer fits on one page: shorten it.");
  }
} finally {
  await rm(workDir, { recursive: true, force: true });
}
