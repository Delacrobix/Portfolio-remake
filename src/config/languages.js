import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "../languages/en.json";
import esTranslation from "../languages/es.json";

export const LANGUAGES = ["es", "en"];
const STORAGE_KEY = "language";

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall through to the default.
  }
  return "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: initialLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function applyLanguage(language) {
  document.documentElement.lang = language;
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Not being able to remember the choice is not an error worth surfacing.
  }
}

applyLanguage(i18n.language);
i18n.on("languageChanged", applyLanguage);

export default i18n;
