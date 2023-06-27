import React from 'react';
import { Link } from 'react-router-dom';
import SwitchMode from '../switchMode';
import SwitchLanguage from '../switchLanguage';

const Header = (props) => {
  const { scrollTo } = props;

  return (
    <header id='header' className='header'>
      <h1 className='header__h1'>Jeffrey Rengifo Marin</h1>
      <nav>
        <ul>
          <SwitchMode classProp={'switch'} idProp={'switch'} />
          <li>
            <Link onClick={() => scrollTo('intro')}>Intro</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo('two')}>Who I Am</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo('skills')}>Skills</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo('work')}>My Work</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo('contact')}>Contact</Link>
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
