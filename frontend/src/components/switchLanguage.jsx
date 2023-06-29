import EnFlag from './svg/enFlag';
import EsFlag from './svg/esFlag';
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

      languageSpan.classList.remove('es');
      languageSpan.classList.add('en');

      i18n.changeLanguage(language);
    } else {
      setLanguage('es');

      languageSpan.classList.add('es');
      languageSpan.classList.remove('en');

      i18n.changeLanguage(language);
    }
  }

  return isMobile ? (
    <span
      className='switch-mobile-language es'
      onClick={mobileLanguageChange}
      ref={languageRef}
    >
      <EsFlag />
      <EnFlag />
    </span>
  ) : (
    <select className='language-selector' onChange={languageChange}>
      <option value='en'>English</option>
      <option value='es'>Español</option>
    </select>
  );
};

export default SwitchLanguage;
