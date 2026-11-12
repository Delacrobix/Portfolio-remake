// Refreshes src/data/labs-cache.json, the fallback used when the articles API is unreachable.
// Usage: yarn refresh-cache   (reads VITE_ARTICLES_API_URL from the environment or .env)
import { readFile, writeFile } from "node:fs/promises";

const CACHE_FILE = new URL("../src/data/labs-cache.json", import.meta.url);
const BASE_FIELDS = "title,description,coverImage,link,publishedAt,authors";
const VIEW_FIELDS = "views,viewsRetrievedAt";

async function apiUrl() {
  if (process.env.VITE_ARTICLES_API_URL) return process.env.VITE_ARTICLES_API_URL;
  const env = await readFile(new URL("../.env", import.meta.url), "utf8");
  const match = env.match(/^VITE_ARTICLES_API_URL=(.+)$/m);
  if (!match) throw new Error("VITE_ARTICLES_API_URL is not set");
  return match[1].trim();
}

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

// Older API deployments reject the view fields with a 400, so retry without them.
async function getArticles(base, path) {
  const url = (fields) => `${base}${path}?size=100&fields=${fields}`;
  try {
    return (await getJson(url(`${BASE_FIELDS},${VIEW_FIELDS}`))).articles;
  } catch {
    return (await getJson(url(BASE_FIELDS))).articles;
  }
}

const base = await apiUrl();
const previous = JSON.parse(await readFile(CACHE_FILE, "utf8").catch(() => "{}"));
const [search, obs, top] = await Promise.all([
  getArticles(base, "/articles"),
  getArticles(base, "/obs/articles"),
  getJson(`${base}/top-authors?size=3`),
]);

const withViews = [...search, ...obs].filter((article) => Number.isFinite(article.views));
const views = withViews.length
  ? {
      total: withViews.reduce((sum, article) => sum + article.views, 0),
      retrievedAt: withViews.map((a) => a.viewsRetrievedAt).sort().at(-1),
    }
  : previous.views;

const strip = ({ views: _views, viewsRetrievedAt: _date, ...article }) => article;
const cache = {
  lastUpdated: new Date().toISOString().slice(0, 10),
  views,
  topAuthors: top.authors,
  search: search.map(strip),
  obs: obs.map(strip),
};

await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2) + "\n");
console.log(
  `Cached ${cache.search.length} Search Labs and ${cache.obs.length} Observability Labs articles.`,
  views ? `Views: ${views.total} (as of ${views.retrievedAt}).` : "No view data."
);
