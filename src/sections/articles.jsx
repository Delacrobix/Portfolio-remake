import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ArticleStats from "../components/ArticleStats";
import { Button } from "../components/Button";
import ExternalLink from "../components/ExternalLink";
import Highlight from "../components/Highlight";
import Podium from "../components/Podium";
import SearchField from "../components/SearchField";
import Section from "../components/Section";
import { formatDate } from "../lib/format";
import { createEntry, excerpt, queryTokens, searchEntries, splitMatches } from "../lib/search";

const INITIAL_COUNT = 6;
const LAB_DOT = { search: "bg-brand", obs: "bg-obs" };

function ArticleCard({ article, tokens, language, labLabel }) {
  const matchesTitle = splitMatches(article.title, tokens).some((part) => part.match);
  const showExcerpt = tokens.length > 0 && !matchesTitle;

  return (
    <ExternalLink href={article.link} className='group block no-underline'>
      <img
        src={article.coverImage}
        alt=''
        loading='lazy'
        width='640'
        height='360'
        className='aspect-video w-full rounded-[10px] bg-rule object-cover transition-opacity duration-150 group-hover:opacity-85 dark:brightness-90 print:hidden'
      />
      <span className='mt-3 flex items-center gap-2 text-[15.5px] text-ink-2 print:mt-0'>
        <span className={`size-[9px] flex-none rounded-full ${LAB_DOT[article.lab]}`} />
        {labLabel}, <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, language)}</time>
      </span>
      <b className='mt-[5px] block text-[19px] leading-[1.3] font-bold decoration-2 group-hover:underline'>
        <Highlight text={article.title} tokens={tokens} />
      </b>
      {showExcerpt && (
        <span className='mt-1.5 block text-base leading-[1.45] text-ink-2'>
          <Highlight text={excerpt(article.description, tokens)} tokens={tokens} />
        </span>
      )}
    </ExternalLink>
  );
}

/** `query` is owned by the page so the site search can filter this section. */
export default function Articles({ articles, views, topAuthors, query, onQueryChange }) {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const entries = useMemo(
    () => articles.map((article) => createEntry({ title: article.title, text: article.description, article })),
    [articles]
  );
  const years = useMemo(
    () => [...new Set(articles.map((article) => article.publishedAt.slice(0, 4)))].sort().reverse(),
    [articles]
  );

  const tokens = queryTokens(query);
  const inFilter = ({ article }) =>
    filter === "all" || article.lab === filter || article.publishedAt.startsWith(filter);
  const matches = (tokens.length
    ? searchEntries(entries, query).map((result) => result.entry)
    : entries
  ).filter(inFilter);
  const shown = showAll ? matches : matches.slice(0, INITIAL_COUNT);

  const filters = [
    { id: "all", label: t("articles.filters.all") },
    { id: "search", label: t("articles.filters.search") },
    { id: "obs", label: t("articles.filters.obs") },
    ...years.map((year) => ({ id: year, label: year })),
  ];

  function changeQuery(value) {
    setShowAll(false);
    onQueryChange(value);
  }

  return (
    <Section id='articles' tint>
      <ArticleStats articles={articles} views={views} topAuthors={topAuthors} />
      <Podium authors={topAuthors} />

      <div className='mb-[18px] flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 print:hidden'>
        <h3 className='text-[19px] leading-[1.3] font-bold'>
          {t("articles.searchTitle", { count: articles.length })}
        </h3>
        <output aria-live='polite' className='text-base whitespace-nowrap text-ink-2'>
          {t("articles.count", { shown: matches.length, total: articles.length })}
        </output>
      </div>
      <form role='search' onSubmit={(event) => event.preventDefault()} className='print:hidden'>
        <SearchField
          value={query}
          placeholder={t("articles.searchPlaceholder")}
          aria-label={t("articles.searchLabel")}
          onChange={(event) => changeQuery(event.target.value)}
        />
        <div role='group' aria-label={t("articles.filters.label")} className='mt-3.5 flex flex-wrap gap-2'>
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type='button'
              aria-pressed={filter === id}
              onClick={() => {
                setFilter(id);
                setShowAll(false);
              }}
              className={`min-h-11 cursor-pointer rounded-full border px-3.5 text-[15.5px] wide:min-h-9 font-semibold transition-colors duration-150 ${
                filter === id
                  ? "border-ink bg-ink text-paper"
                  : "border-rule-2 bg-paper text-ink-2 hover:border-ink hover:text-ink"
              }`}>
              {label}
            </button>
          ))}
        </div>
      </form>

      {shown.length > 0 ? (
        <div className='mt-[26px] grid gap-x-6 gap-y-[34px] sm:grid-cols-2 wide:grid-cols-3 print:mt-0 print:grid-cols-2 print:gap-y-4'>
          {shown.map(({ article }) => (
            <ArticleCard
              key={article.link}
              article={article}
              tokens={tokens}
              language={i18n.language}
              labLabel={t(`articles.filters.${article.lab}`)}
            />
          ))}
        </div>
      ) : (
        <p className='mt-[26px] text-ink-2'>{t("articles.empty", { query })}</p>
      )}

      {matches.length > INITIAL_COUNT && (
        <Button className='mt-6 print:hidden' onClick={() => setShowAll((current) => !current)}>
          {showAll ? t("articles.showLess") : t("articles.showAll", { count: matches.length })}
        </Button>
      )}
    </Section>
  );
}
