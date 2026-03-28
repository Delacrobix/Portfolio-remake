import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { svgLanguagesIcons } from "./svg/svgExports";
import i18n from "../config/languages";

SwitchLanguage.propTypes = {
  isMobile: PropTypes.bool,
};

export default function SwitchLanguage({ isMobile }) {
  const [flagLanguage, setFlagLanguage] = useState("en");
  const languageRef = useRef(null);

  useEffect(() => {
    i18n.changeLanguage(flagLanguage);
  }, []);

  function languageChange(event) {
    const value = event.target.value;

    i18n.changeLanguage(value);
  }

  function mobileLanguageChange() {
    const languageSpan = languageRef.current;

    if (flagLanguage === "es") {
      setFlagLanguage("en");

      languageSpan.classList.remove("en");
      languageSpan.classList.add("es");

      i18n.changeLanguage("en");
    } else {
      setFlagLanguage("es");

      languageSpan.classList.add("en");
      languageSpan.classList.remove("es");

      i18n.changeLanguage("es");
    }
  }

  return isMobile ? (
    /* switch-mobile-language keeps its class for the JS-toggled .es/.en flag logic */
    <button
      className='switch-mobile-language es hidden max-[992px]:block bg-white/30 rounded-full border border-white/50 p-1 cursor-pointer transition-all duration-500 hover:bg-white/50 ml-2'
      onClick={mobileLanguageChange}
      ref={languageRef}>
      <span className='opacity-80 transform-[scale(60%)] block'>
        {svgLanguagesIcons.enFlag}
      </span>
      <span className='opacity-80 transform-[scale(60%)] block'>
        {svgLanguagesIcons.esFlag}
      </span>
    </button>
  ) : (
    <select
      className='cursor-pointer rounded-[10px] text-[0.8rem] px-[0.3rem] py-[0.3rem] text-black font-bold dark:bg-[rgba(39,55,77,0.8)] dark:text-[#dde6ed]'
      onChange={languageChange}>
      <option className='text-[0.9rem] dark:text-[#dde6ed] dark:bg-[#27374d]' value='en'>English</option>
      <option className='text-[0.9rem] dark:text-[#dde6ed] dark:bg-[#27374d]' value='es'>Español</option>
    </select>
  );
}
