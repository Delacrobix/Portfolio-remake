import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SECTIONS = [
  { key: "intro", label: "header.nav-link-1" },
  { key: "aboutMe", label: "header.nav-link-2" },
  { key: "experience", label: "header.nav-link-3" },
  { key: "projects", label: "header.nav-link-4" },
  { key: "awards", label: "header.nav-link-5" },
  { key: "articles", label: "header.nav-link-6" },
  { key: "observabilityArticles", label: "header.nav-link-7" },
  { key: "videos", label: "header.nav-link-8" },
  { key: "certifications", label: "header.nav-link-9" },
  { key: "tools", label: "header.nav-link-10" },
  { key: "contact", label: "header.nav-link-11" },
];

export default function DotNav({ scrollTo, sectionRefs }) {
  const { t } = useTranslation();
  const [active, setActive] = useState("intro");

  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY + window.innerHeight * 0.4;
      let current = "intro";

      for (const { key } of SECTIONS) {
        const ref = sectionRefs[key];
        if (!ref?.current) continue;
        const docTop = ref.current.getBoundingClientRect().top + window.scrollY;
        if (docTop <= offset) current = key;
      }

      setActive(current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <nav className='fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 max-[750px]:hidden'>
      {SECTIONS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => scrollTo(key)}
          className={`group flex items-center gap-[10px] bg-transparent border-none p-0 cursor-pointer transition-colors duration-200 ${
            active === key
              ? "text-primary"
              : "text-default-400 dark:text-default-600 hover:text-default-600 dark:hover:text-default-400"
          }`}>
          {/* Dot */}
          <span
            className={`block rounded-full flex-shrink-0 transition-all duration-300 ${
              active === key
                ? "w-[9px] h-[9px] bg-primary shadow-[0_0_6px_2px] shadow-primary/40"
                : "w-[6px] h-[6px] bg-current group-hover:w-[8px] group-hover:h-[8px]"
            }`}
          />
          {/* Label: always visible ≥1280px, hover-only on 750–1279px */}
          <span
            className={`font-rubik text-[0.75rem] whitespace-nowrap select-none transition-all duration-200
              opacity-0 group-hover:opacity-100
              min-[1280px]:opacity-100
              ${active === key ? "font-semibold" : "font-normal"}`}>
            {t(label)}
          </span>
        </button>
      ))}
    </nav>
  );
}
