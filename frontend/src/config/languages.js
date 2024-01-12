import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from '../languages/en.json';
import esTranslation from '../languages/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'en',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
