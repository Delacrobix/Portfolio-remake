import { svgLanguagesIcons } from './svg/svgExports';
import i18n from '../config/languages';
import { useRef, useState } from 'react';

const SwitchLanguage = (props) => {
  const languageRef = useRef(null);
  const { isMobile } = props;
  const [language, setLanguage] = useState('es');

  function languageChange(event) {
    const value = event.target.value;

    if (value === 'en') {
      console.log(value);
      i18n.changeLanguage(value);
    } else {
      console.log(value);
      i18n.changeLanguage(value);
    }
  }

  function mobileLanguageChange() {
    const languageSpan = languageRef.current;

    if (language === 'es') {
      setLanguage('en');

      languageSpan.classList.remove('en');
      languageSpan.classList.add('es');

      i18n.changeLanguage('en');
    } else {
      setLanguage('es');

      languageSpan.classList.add('en');
      languageSpan.classList.remove('es');

      i18n.changeLanguage('es');
    }
  }

  return isMobile ? (
    <span
      className='switch-mobile-language en'
      onClick={mobileLanguageChange}
      ref={languageRef}
    >
      {svgLanguagesIcons.esFlag}
      {svgLanguagesIcons.enFlag}
    </span>
  ) : (
    <select className='language-selector' onChange={languageChange}>
      <option value='es'>Español</option>
      <option value='en'>English</option>
    </select>
  );
};

export default SwitchLanguage;
