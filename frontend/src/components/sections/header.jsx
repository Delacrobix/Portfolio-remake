import React from 'react';
import { Link } from 'react-router-dom';
import SwitchMode from '../switchMode';
import SwitchLanguage from '../switchLanguage';

const Header = () => {
  return (
    <header id='header' className='header'>
      <h1>Jeffrey's website</h1>
      <nav>
        <ul>
          <SwitchMode classProp={'switch'} idProp={'switch'} />
          <li>
            <Link to='#intro'>Intro</Link>
          </li>
          <li>
            <Link to='#two'>Who I Am</Link>
          </li>
          <li>
            <Link to='#one'>Skills</Link>
          </li>
          <li>
            <Link to='#work'>My Work</Link>
          </li>
          <li>
            <Link to='#contact'>Contact</Link>
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
