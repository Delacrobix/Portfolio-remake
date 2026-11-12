import { useTranslation } from "react-i18next";
import { SITE } from "../config/site";
import { formatNumber, roundDownTo } from "../lib/format";

function Stat({ value, label, note }) {
  return (
    <li className='border-t-[3px] border-ink pt-3.5'>
      <strong className='block text-6xl leading-none font-extrabold tracking-[-0.03em] text-brand print:text-4xl'>
        {value}
      </strong>
      <span className='mt-2 block text-[18.5px] leading-[1.3] font-bold'>{label}</span>
      <span className='mt-1 block text-base leading-[1.4] text-ink-2'>{note}</span>
    </li>
  );
}

/** Headline figures for the articles: how many, their combined views, the author's rank. */
export default function ArticleStats({ articles, views, topAuthors }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const search = articles.filter((article) => article.lab === "search").length;
  const rank = topAuthors.findIndex(({ author }) => author === SITE.name) + 1;

  return (
    <ul className='mb-11 grid gap-8 wide:grid-cols-3 print:mb-6 print:grid-cols-3'>
      <Stat
        value={articles.length}
        label={t("articles.stats.articles")}
        note={t("articles.stats.articlesNote", { search, obs: articles.length - search })}
      />
      {views && (
        <Stat
          value={`+${formatNumber(roundDownTo(views.total, 1000), language)}`}
          label={t("articles.stats.views")}
          note={t("articles.stats.viewsNote", {
            average: formatNumber(roundDownTo(views.total / articles.length, 50), language),
          })}
        />
      )}
      {rank > 0 && (
        <Stat
          value={t("articles.stats.rankValue", { rank })}
          label={t("articles.stats.rank")}
          note={t("articles.stats.rankNote")}
        />
      )}
    </ul>
  );
}
