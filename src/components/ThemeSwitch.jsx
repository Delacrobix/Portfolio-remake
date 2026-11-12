import { useTranslation } from "react-i18next";
import useTheme from "../hooks/useTheme";
import { setTheme } from "../lib/theme";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeSwitch() {
  const { t } = useTranslation();
  const dark = useTheme() === "dark";
  const label = dark ? t("nav.themeLight") : t("nav.themeDark");

  return (
    <button
      type='button'
      aria-label={label}
      title={label}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className='grid size-11 cursor-pointer place-items-center rounded-lg border border-rule-2 text-ink-2 transition-colors duration-150 hover:border-ink hover:text-ink'>
      {dark ? <SunIcon className='size-[18px]' /> : <MoonIcon className='size-[18px]' />}
    </button>
  );
}
