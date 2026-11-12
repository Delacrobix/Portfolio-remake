import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { SECTIONS, SITE } from "../config/site";
import useActiveSection from "../hooks/useActiveSection";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { WRAP } from "./Section";
import { CloseIcon, MenuIcon } from "./icons";

const NAV_IDS = SECTIONS.filter((section) => section.inNav).map((section) => section.id);

export default function TopBar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const spyIds = useMemo(() => SECTIONS.map((section) => section.id), []);
  const active = useActiveSection(spyIds);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const links = (linkClass, activeClass) =>
    NAV_IDS.map((id) => (
      <a
        key={id}
        href={`#${id}`}
        aria-current={active === id ? "true" : undefined}
        onClick={() => setMenuOpen(false)}
        className={`${linkClass} ${active === id ? activeClass : "text-ink-2 hover:bg-wash hover:text-ink"}`}>
        {t(`nav.${id}`)}
      </a>
    ));

  return (
    <header className='sticky top-0 z-30 border-b border-rule bg-paper print:hidden'>
      <div className={`${WRAP} flex h-[68px] items-center justify-between gap-4`}>
        <a href='#top' className='text-lg font-bold whitespace-nowrap no-underline'>
          {SITE.name}
        </a>

        <div className='flex items-center gap-2 sm:gap-3'>
          <nav aria-label={t("nav.label")} className='hidden items-center gap-0.5 nav:flex'>
            {links(
              "rounded-lg px-3 py-[7px] text-base font-medium no-underline transition-colors duration-150",
              "bg-brand-wash font-semibold text-brand"
            )}
          </nav>
          <LanguageSwitch />
          <ThemeSwitch />
          <button
            type='button'
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
            className='flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-rule-2 px-3 text-[15px] font-semibold nav:hidden'>
            {menuOpen ? <CloseIcon className='size-4' /> : <MenuIcon className='size-4' />}
            <span className='hidden sm:inline'>{menuOpen ? t("nav.close") : t("nav.menu")}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id='mobile-menu'
          aria-label={t("nav.label")}
          className={`${WRAP} grid gap-1 border-t border-rule pt-3 pb-4 nav:hidden`}>
          {links(
            "rounded-lg px-3 py-2.5 text-lg font-medium no-underline",
            "bg-brand-wash font-semibold text-brand"
          )}
        </nav>
      )}
    </header>
  );
}
