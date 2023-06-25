import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import i18n from '../config/languages';

const SwitchLanguage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function handleResize(event) {
      if (event.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    mediaQuery.addEventListener('rezise', handleResize);
    handleResize(mediaQuery);
  }, []);

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

  function mobileLanguageChange(value) {
    if (value === 'en') {
      i18n.changeLanguage(value);
    } else {
      i18n.changeLanguage(value);
    }
  }

  return isMobile ? (
    <Link id='switch-mobile-language' className='switch-mobile-language'>
      <FontAwesomeIcon
        icon={faLanguage}
        onClick={() => mobileLanguageChange('en')}
      />
      <FontAwesomeIcon
        icon={faLanguage}
        onClick={() => mobileLanguageChange('es')}
      />
    </Link>
  ) : (
    <select
      id='language-selector'
      className='language-selector'
      onChange={languageChange}
    >
      <option value='en'>English</option>
      <option value='es'>Español</option>
    </select>
  );
};

export default SwitchLanguage;
