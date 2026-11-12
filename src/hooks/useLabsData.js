import { useEffect, useState } from "react";
import cache from "../data/labs-cache.json";

const API_URL = import.meta.env.VITE_ARTICLES_API_URL || "";
const BASE_FIELDS = "title,description,coverImage,link,publishedAt,authors";
const VIEW_FIELDS = "views,viewsRetrievedAt";

// The API returns page titles such as "Some title | Elasticsearch Labs".
const cleanTitle = (title) => title.split(" | ")[0].trim();

function toArticles(list, lab) {
  return list.map((article) => ({ ...article, title: cleanTitle(article.title), lab }));
}

function byNewest(a, b) {
  return b.publishedAt.localeCompare(a.publishedAt);
}

function sumViews(articles) {
  const counted = articles.filter((article) => Number.isFinite(article.views));
  if (!counted.length) return null;
  return {
    total: counted.reduce((sum, article) => sum + article.views, 0),
    retrievedAt: counted.map((article) => article.viewsRetrievedAt).sort().at(-1),
  };
}

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

// Older API deployments reject the view fields with a 400, so retry without them.
async function getArticles(path) {
  const url = (fields) => `${API_URL}${path}?size=100&fields=${fields}`;
  const data = await getJson(url(`${BASE_FIELDS},${VIEW_FIELDS}`)).catch(() =>
    getJson(url(BASE_FIELDS))
  );
  if (!Array.isArray(data.articles) || !data.articles.length) {
    throw new Error(`No articles returned by ${path}`);
  }
  return data.articles;
}

const CACHED = {
  articles: [...toArticles(cache.search, "search"), ...toArticles(cache.obs, "obs")].sort(byNewest),
  views: cache.views ?? null,
  topAuthors: cache.topAuthors ?? [],
};

/**
 * Articles from both Elastic blogs, their combined views and the Search Labs
 * top authors. Starts from the bundled cache so the page never waits on the
 * network, then replaces it with live data when the API answers.
 */
export default function useLabsData() {
  const [data, setData] = useState(CACHED);

  useEffect(() => {
    if (!API_URL) return;
    let cancelled = false;

    Promise.all([getArticles("/articles"), getArticles("/obs/articles")])
      .then(([search, obs]) => {
        if (cancelled) return;
        const articles = [...toArticles(search, "search"), ...toArticles(obs, "obs")].sort(byNewest);
        setData((current) => ({
          ...current,
          articles,
          views: sumViews(articles) ?? current.views,
        }));
      })
      .catch((error) => console.warn("Articles API unavailable, using the cached copy.", error));

    getJson(`${API_URL}/top-authors?size=3`)
      .then(({ authors }) => {
        if (!cancelled && authors?.length >= 3) {
          setData((current) => ({ ...current, topAuthors: authors.slice(0, 3) }));
        }
      })
      .catch((error) => console.warn("Top authors unavailable, using the cached copy.", error));

    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}
