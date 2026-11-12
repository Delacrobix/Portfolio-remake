import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { resumeUrl } from "../config/resume";
import { SITE } from "../config/site";
import { copyText, openInNewTab } from "../lib/dom";
import { buildProfileMarkdown } from "../lib/profileMarkdown";
import { setTheme } from "../lib/theme";

// Every spelling a command answers to, whatever the current language.
const ALIASES = {
  cv: ["cv", "resume", "hoja"],
  linkedin: ["linkedin"],
  github: ["github", "gh"],
  email: ["correo", "email", "mail"],
  profile: ["perfil", "profile", "markdown"],
  latest: ["ultimo", "latest"],
  random: ["azar", "random"],
  articles: ["articulos", "articles"],
  videos: ["videos"],
  es: ["es", "espanol", "spanish"],
  en: ["en", "english", "ingles"],
  dark: ["oscuro", "dark"],
  light: ["claro", "light"],
};

/**
 * Slash commands for the site search. A command either runs an action, which
 * may return a message to show, or narrows the search to one section (`scope`).
 */
export default function useSiteCommands(articles, videos) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return useMemo(() => {
    const copy = async (text, doneMessage) =>
      (await copyText(text)) ? doneMessage : t("search.copyFailed");

    const actions = {
      cv: { run: () => openInNewTab(resumeUrl(language)) },
      linkedin: { run: () => openInNewTab(SITE.linkedin) },
      github: { run: () => openInNewTab(SITE.github) },
      email: { run: () => copy(SITE.email, t("search.commands.email.done", { email: SITE.email })) },
      profile: {
        run: () =>
          copy(buildProfileMarkdown({ t, language, articles, videos }), t("search.commands.profile.done")),
      },
      latest: { run: () => openInNewTab(articles[0].link) },
      random: { run: () => openInNewTab(articles[Math.floor(Math.random() * articles.length)].link) },
      articles: { scope: "articles" },
      videos: { scope: "videos" },
      es: { run: () => i18n.changeLanguage("es") },
      en: { run: () => i18n.changeLanguage("en") },
      dark: { run: () => setTheme("dark") },
      light: { run: () => setTheme("light") },
    };

    return Object.entries(actions).map(([id, action]) => ({
      id,
      aliases: ALIASES[id],
      name: t(`search.commands.${id}.name`),
      text: t(`search.commands.${id}.text`),
      arg: action.scope ? t(`search.commands.${id}.arg`) : null,
      ...action,
    }));
  }, [t, i18n, language, articles, videos]);
}
