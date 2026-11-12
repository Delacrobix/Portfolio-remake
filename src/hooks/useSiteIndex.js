import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SECTIONS, SECTION_KEYWORDS } from "../config/site";
import { createEntry } from "../lib/search";
import { formatDate } from "../lib/format";

const join = (...parts) => parts.flat().filter(Boolean).join(" ");

/**
 * Everything the site search can find: sections, the items inside them,
 * articles and videos. Item ids match the `id` attributes the sections render.
 */
export default function useSiteIndex(articles, videos) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return useMemo(() => {
    const list = (key) => t(key, { returnObjects: true });
    const entries = [];
    const add = (group, entry) =>
      entries.push(createEntry({ group, inherited: SECTION_KEYWORDS[group], ...entry }));

    for (const { id } of SECTIONS) {
      add(id, { title: t(`nav.${id}`), keywords: SECTION_KEYWORDS[id], inherited: "", targetId: id, isSection: true });
    }

    list("areas.list").forEach((area, i) =>
      add("areas", { title: area.title, text: area.text, targetId: `area-${i}` })
    );
    list("experience.list").forEach((job, i) =>
      add("experience", {
        title: job.position,
        text: join(job.company, job.period, job.text, job.bullets, job.tags),
        targetId: `experience-${i}`,
      })
    );
    list("awards.list").forEach((award, i) =>
      add("awards", {
        title: award.event,
        text: join(award.placing, award.meta, award.project, award.description),
        targetId: `award-${i}`,
      })
    );
    list("certifications.main").forEach((cert, i) =>
      add("certifications", { title: cert.name, text: cert.meta, targetId: `certification-${i}` })
    );
    list("certifications.courses").forEach((course, i) =>
      add("certifications", { title: course.name, text: course.meta, targetId: `course-${i}` })
    );
    list("projects.list").forEach((project, i) =>
      add("projects", {
        title: project.name,
        text: join(project.client, project.period, project.text, project.bullets),
        targetId: `project-${i}`,
      })
    );
    list("projects.products").forEach((product, i) =>
      add("projects", { title: product.name, text: product.text, targetId: `product-${i}` })
    );

    for (const article of articles) {
      add("articles", {
        title: article.title,
        text: article.description,
        keywords: t(`articles.filters.${article.lab}`),
        inherited: "",
        url: article.link,
        meta: formatDate(article.publishedAt, language),
      });
    }
    for (const video of videos) {
      add("videos", { title: video.title, keywords: "video youtube", inherited: "", url: video.link, meta: "YouTube" });
    }
    return entries;
  }, [t, language, articles, videos]);
}
