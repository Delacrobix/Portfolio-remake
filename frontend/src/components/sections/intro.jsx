import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../../assets/images/profile/me.jpg';
import SwitchMode from '../switchMode';
import SwitchLanguage from '../switchLanguage';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();

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
        <p>{t('intro.welcome')}</p>
        <footer>
          <Link to='#two' className=''>
            More
          </Link>
          <SwitchMode classProp={'switch-mobile'} idProp={'switch-mobile'} />
          <SwitchLanguage />
        </footer>
      </div>
    </section>
  );
};

export default Intro;
