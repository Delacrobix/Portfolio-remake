import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "./switchLanguage";
import PaletteSwitcher from "./PaletteSwitcher";
import { SHOW_PALETTE_SWITCHER } from "../config/palettes";

const SECTIONS = [
  { key: "intro", label: "header.nav-link-1" },
  { key: "aboutMe", label: "header.nav-link-2" },
  { key: "experience", label: "header.nav-link-3" },
  { key: "projects", label: "header.nav-link-4" },
  { key: "awards", label: "header.nav-link-5" },
  { key: "articles", label: "header.nav-link-6" },
  { key: "videos", label: "header.nav-link-7" },
  { key: "certifications", label: "header.nav-link-8" },
  { key: "tools", label: "header.nav-link-9" },
  { key: "contact", label: "header.nav-link-10" },
];

export default function TopBar({ scrollTo }) {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  function handleNav(key) {
    scrollTo(key);
    setDrawerOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm shadow-black/20"
            : "bg-transparent"
        }`}>
        <button
          onClick={() => scrollTo("intro")}
          className='font-rubik font-bold text-xl cursor-pointer bg-transparent border-none p-0 text-foreground transition-colors duration-300'>
          Jeffrey Rengifo
        </button>

        {/* Desktop controls */}
        <div className='flex items-center gap-4 max-[750px]:hidden'>
          {SHOW_PALETTE_SWITCHER && <PaletteSwitcher />}
          <SwitchLanguage />
        </div>

        {/* Mobile hamburger */}
        <button
          className='hidden max-[750px]:flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-2 text-foreground'
          onClick={() => setDrawerOpen(true)}
          aria-label='Open menu'>
          <span className='block w-[22px] h-[2px] bg-current rounded' />
          <span className='block w-[22px] h-[2px] bg-current rounded' />
          <span className='block w-[16px] h-[2px] bg-current rounded' />
        </button>
      </header>

      {/* Backdrop */}
      <button
        aria-label='Close menu'
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 hidden max-[750px]:block w-full border-none cursor-default ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 z-[101] bg-background shadow-2xl flex-col py-8 px-6 transition-transform duration-300 ease-in-out hidden max-[750px]:flex ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className='flex items-center justify-between mb-8'>
          <span className='font-rubik font-bold text-lg text-foreground'>Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className='bg-transparent border-none cursor-pointer p-1 text-default-400 hover:text-foreground transition-colors'
            aria-label='Close menu'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path
                d='M4 4l12 12M16 4L4 16'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>

        <ul className='flex flex-col gap-1 flex-1 list-none p-0 m-0 overflow-y-auto'>
          {SECTIONS.map(({ key, label }) => (
            <li key={key}>
              <button
                onClick={() => handleNav(key)}
                className='w-full text-left font-rubik text-[0.95rem] py-3 px-3 rounded-lg bg-transparent border-none cursor-pointer text-default-400 hover:bg-primary/10 hover:text-primary transition-colors duration-150'>
                {t(label)}
              </button>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-4 pt-5 border-t border-default-200 mt-4'>
          {SHOW_PALETTE_SWITCHER && <PaletteSwitcher />}
          <SwitchLanguage />
        </div>
      </nav>
    </>
  );
}
