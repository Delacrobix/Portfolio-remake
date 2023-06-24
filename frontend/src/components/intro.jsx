import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../assets/images/profile/me.jpg';
import SwitchMode from './switchMode';
import SwitchLanguage from './switchLanguage';

const Intro = () => {
  return (
    <section id='intro' className='intro'>
      <div className='content'>
        <div id='profile-picture' className='profile-picture'>
          <div id='image-container' className='image-container'>
            <img src={profilePicture} alt='' />
          </div>
        </div>
        <header>
          <h2>Jeff</h2>
        </header>
        <p>Welcome to my site. I am a Fullstack developer.</p>
        <footer>
          <Link to='#two' className=''>
            More
          </Link>
          <SwitchMode classProp={'switch-mobile'} idProp={'switch-mobile'} />
          <SwitchLanguage
            classProp={'switch-mobile-language'}
            idProp={'switch-mobile-language'}
          />
        </footer>
      </div>
    </section>
  );
};

export default Intro;
