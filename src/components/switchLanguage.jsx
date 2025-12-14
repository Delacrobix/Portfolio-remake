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
    <button
      className='switch-mobile-language es'
      onClick={mobileLanguageChange}
      ref={languageRef}>
      {svgLanguagesIcons.enFlag}
      {svgLanguagesIcons.esFlag}
    </button>
  ) : (
    <select className='language-selector font-bold' onChange={languageChange}>
      <option value='en'>English</option>
      <option value='es'>Español</option>
    </select>
  );
}
