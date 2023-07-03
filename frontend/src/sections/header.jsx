import React from 'react';
import { Link } from 'react-router-dom';
import SwitchMode from '../components/switchMode';
import SwitchLanguage from '../components/switchLanguage';

const Header = (props) => {
  const { scrollTo } = props;

  return (
    <header id='header' className='header'>
      <h1 className='header__h1'>Jeffrey Rengifo Marin</h1>
      <nav>
        <ul>
          <SwitchMode classProp={'switch-mode'} idProp={'switch'} />
          <li>
            <Link className='header__link' onClick={() => scrollTo('intro')}>
              Intro
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('work')}>
              My Work
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('two')}>
              Who I Am
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('skills')}>
              Skills
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('contact')}>
              Contact
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
