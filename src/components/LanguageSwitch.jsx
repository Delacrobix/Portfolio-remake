import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../config/languages";

export default function LanguageSwitch() {
  const { t, i18n } = useTranslation();

  return (
    <div role='group' aria-label={t("nav.language")} className='flex rounded-lg border border-rule-2 p-0.5'>
      {LANGUAGES.map((language) => {
        const current = i18n.language === language;
        return (
          <button
            key={language}
            type='button'
            lang={language}
            aria-pressed={current}
            onClick={() => i18n.changeLanguage(language)}
            className={`min-h-10 cursor-pointer rounded-md px-2.5 py-1 text-[15px] font-semibold uppercase transition-colors duration-150 ${
              current ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"
            }`}>
            {language}
          </button>
        );
      })}
    </div>
  );
}
