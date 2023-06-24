import React from 'react';
import { Link } from 'react-router-dom';
import SwitchMode from './switchMode';

const Header = () => {
  /*
   * Code for language selector
   */
  const languageSelector = document.getElementById('language-selector');

  function languageChange(event) {
    // let selectedOption = event.target.options[event.target.selectedIndex].value;
    // if (selectedOption === 'es') {
    //   window.location.href = '/';
    // } else if (selectedOption === 'en') {
    //   window.location.href = '/en';
    // }
  }

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
            <select
              id='language-selector'
              className='language-selector'
              onChange={(e) => languageChange}
            >
              <option value='en'>English</option>
              <option value='es'>Español</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
