import { SITE } from "../config/site";
import { formatDate } from "./format";

const LATEST_ARTICLES = 10;
const stripTags = (text) => text.replace(/<[^>]+>/g, "");

/** The whole profile as Markdown, in the current language. */
export function buildProfileMarkdown({ t, language, articles, videos }) {
  const list = (key, options) => t(key, { returnObjects: true, ...options });
  const counts = {
    total: articles.length,
    search: articles.filter((article) => article.lab === "search").length,
    obs: articles.filter((article) => article.lab === "obs").length,
    videos: videos.length,
  };
  const lines = [`# ${SITE.name}`, "", t("intro.role"), "", stripTags(t("intro.lead")), "", `${t("intro.languagesLabel")} ${t("intro.languages")}`, ""];
  const heading = (title) => lines.push(`## ${title}`, "");
  const bullets = (items) => lines.push(...items.map((item) => `- ${item}`), "");

  heading(t("nav.areas"));
  bullets(list("areas.list").map((area) => `**${area.title}:** ${area.text}`));

  heading(t("nav.experience"));
  for (const job of list("experience.list", counts)) {
    lines.push(`### ${job.position}`, "", `${job.company} ${job.period}.`, "");
    if (job.bullets) bullets(job.bullets);
    if (job.text) lines.push(job.text, "");
  }

  heading(t("nav.articles"));
  lines.push(t("articles.stats.articlesNote", counts) + ".", "", `### ${t("profile.latestArticles")}`, "");
  bullets(
    articles
      .slice(0, LATEST_ARTICLES)
      .map((article) => `[${article.title}](${article.link}), ${formatDate(article.publishedAt, language)}`)
  );

  heading(t("nav.awards"));
  bullets(
    list("awards.list").map(
      (award) => `**${award.placing}, ${award.event}.** ${award.meta} ${award.project}, ${award.description}`
    )
  );

  heading(t("nav.certifications"));
  bullets([
    ...list("certifications.main").map((cert) => `**${cert.name}.** ${cert.meta} ${cert.link}`),
    ...list("certifications.courses").map((course) => `${course.name}. ${course.meta}.`),
  ]);

  heading(t("nav.projects"));
  for (const project of list("projects.list")) {
    lines.push(`### ${project.name}`, "", `${project.client} ${project.period}.`, "");
    if (project.bullets) bullets(project.bullets);
    if (project.text) lines.push(project.text, "");
  }
  bullets(list("projects.products").map((product) => [`**${product.name}:** ${product.text}`, product.url, product.repo].filter(Boolean).join(" ")));

  heading(t("profile.links"));
  bullets([`${t("profile.site")}: ${SITE.url}`, `LinkedIn: ${SITE.linkedin}`, `GitHub: ${SITE.github}`, `Email: ${SITE.email}`]);

  return lines.join("\n").trim() + "\n";
}
