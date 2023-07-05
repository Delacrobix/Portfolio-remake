import React from 'react';
import { Link } from 'react-router-dom';
import SwitchMode from '../components/switchMode';
import SwitchLanguage from '../components/switchLanguage';
import { useTranslation } from 'react-i18next';

const Header = (props) => {
  const { scrollTo } = props;
  const { t } = useTranslation();

  return (
    <header id='header' className='header'>
      <h1 className='header__h1'>Jeffrey Rengifo Marin</h1>
      <nav>
        <ul>
          <SwitchMode classProp={'switch-mode'} idProp={'switch'} />
          <li>
            <Link className='header__link' onClick={() => scrollTo('intro')}>
              {t('header.nav-link-1')}
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('work')}>
              {t('header.nav-link-2')}
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('aboutMe')}>
              {t('header.nav-link-3')}
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('skills')}>
              {t('header.nav-link-4')}
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('contact')}>
              {t('header.nav-link-5')}
            </Link>
          </li>
          <li>
            <SwitchLanguage />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
