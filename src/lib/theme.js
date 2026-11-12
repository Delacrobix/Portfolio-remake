// Light is the default theme; dark is opt-in and remembered between visits.
// index.html applies the saved theme before first paint to avoid a flash.
const STORAGE_KEY = "theme";
const THEME_COLORS = { light: "#ffffff", dark: "#11151b" };
const listeners = new Set();

export function getTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Not being able to remember the choice is not an error worth surfacing.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeToTheme(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
