// Small in-browser search: accent folding, prefix matching and typo tolerance.

const STOP_WORDS = new Set([
  "de", "la", "el", "los", "las", "en", "y", "con", "para", "un", "una", "del", "a",
  "the", "of", "and", "to", "in", "with", "for",
]);

const WEIGHTS = { title: 4, keywords: 3, text: 1.5, inherited: 1 };

export function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function tokenize(text) {
  return normalize(text ?? "")
    .split(/[^a-z0-9|]+/)
    .filter(Boolean);
}

// Levenshtein distance that gives up once it exceeds `max`.
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      rowMin = Math.min(rowMin, current[j]);
    }
    if (rowMin > max) return max + 1;
    previous = current;
  }
  return previous[b.length];
}

/** 3 = exact, 2 = prefix, 1 = close (one typo, two in long words), 0 = no match. */
export function matchToken(query, token) {
  if (token === query) return 3;
  if (query.length >= 2 && token.startsWith(query)) return 2;
  if (query.length < 5) return 0;
  // "agentes" finds "agent"
  if (token.length >= 5 && query.startsWith(token)) return 1;
  const max = query.length >= 8 ? 2 : 1;
  if (editDistance(query, token, max) <= max) return 1;
  if (editDistance(query, token.slice(0, query.length), 1) <= 1) return 1;
  return 0;
}

function bestMatch(query, tokens) {
  let best = 0;
  for (const token of tokens) {
    const score = matchToken(query, token);
    if (score > best) best = score;
    if (best === 3) break;
  }
  return best;
}

/** Query tokens without stop words, unless the query is only stop words. */
export function queryTokens(query) {
  const tokens = tokenize(query);
  const meaningful = tokens.filter((token) => !STOP_WORDS.has(token));
  return meaningful.length ? meaningful : tokens;
}

/** Adds the token lists a search entry is matched against. */
export function createEntry(entry) {
  return {
    ...entry,
    tokens: {
      title: tokenize(entry.title),
      keywords: tokenize(entry.keywords),
      text: tokenize(entry.text),
      inherited: tokenize(entry.inherited),
    },
  };
}

/** Entries where every query token matches somewhere, best first. */
export function searchEntries(entries, query) {
  const tokens = queryTokens(query);
  if (!tokens.length) return [];

  const results = [];
  for (const entry of entries) {
    let score = 0;
    let matchesAll = true;
    for (const token of tokens) {
      const tokenScore = Math.max(
        ...Object.keys(WEIGHTS).map(
          (field) => bestMatch(token, entry.tokens[field]) * WEIGHTS[field]
        )
      );
      if (!tokenScore) {
        matchesAll = false;
        break;
      }
      score += tokenScore;
    }
    if (matchesAll) results.push({ entry, score: score + (entry.isSection ? 0.5 : 0) });
  }
  return results.sort((a, b) => b.score - a.score);
}

/** Splits text into parts so matching words can be highlighted. */
export function splitMatches(text, tokens) {
  if (!tokens.length) return [{ text, match: false }];
  return text
    .split(/([\p{L}\p{N}|]+)/u)
    .filter(Boolean)
    .map((part) => ({
      text: part,
      match: tokens.some((token) => matchToken(token, normalize(part)) > 0),
    }));
}

/** A short excerpt of `text` around the first matching word. */
export function excerpt(text, tokens, wordCount = 22) {
  if (!text) return "";
  const words = text.split(/\s+/);
  const first = words.findIndex((word) =>
    tokenize(word).some((part) => tokens.some((token) => matchToken(token, part) > 0))
  );
  const start = Math.max(0, (first < 0 ? 0 : first) - 6);
  const end = start + wordCount;
  return (
    (start > 0 ? "… " : "") +
    words.slice(start, end).join(" ") +
    (end < words.length ? " …" : "")
  );
}
