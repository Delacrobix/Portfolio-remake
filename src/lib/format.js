export function formatDate(isoDate, language) {
  return new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

export function formatNumber(value, language) {
  // "es" alone leaves four-digit numbers ungrouped; es-CO groups consistently.
  return new Intl.NumberFormat(language === "es" ? "es-CO" : language).format(value);
}

/** Rounds down to a multiple of `step` so the figure reads as "more than". */
export function roundDownTo(value, step) {
  return Math.floor(value / step) * step;
}
