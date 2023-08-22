import React, { forwardRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import enCv from '../assets/files/cvs/ecv.pdf';
import esCv from '../assets/files/cvs/scv.pdf';
import { useTranslation } from 'react-i18next';
import profilePicture from '../assets/images/profile/me.jpg';
import { svgSocialIcons, svgIcons } from '../components/svg/svgExports';
import SwitchMode from '../components/switchMode';
import SwitchLanguage from '../components/switchLanguage';

const Intro = forwardRef((props, ref) => {
  const { scrollTo } = props;
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  function openPDF() {
    if (language === 'es') {
      window.open(esCv, '_blank');
    } else {
      window.open(enCv, '_blank');
    }
  }

  return (
    <section ref={ref} className='intro'>
      <div className='content'>
        <div className='profile-picture'>
          <div className='image-container'>
            <img src={profilePicture} alt='' />
          </div>
        </div>
        <header>
          <h2>Jeff</h2>
        </header>
        <p>{t('intro.welcome')}</p>
        <div className='social-media-container'>
          <div className='intro-icon'>
            <Link
              to='https://www.linkedin.com/in/jeffrey-rerin/'
              target='_blank'
            >
              {svgSocialIcons.linkedin}
            </Link>
            <span>LinkedIn</span>
          </div>
          <div className='intro-icon'>
            <Link to='https://github.com/Delacrobix' target='_blank'>
              {svgSocialIcons.github}
            </Link>
            <span>GitHub</span>
          </div>
          <div className='intro-icon'>
            <Link onClick={openPDF}>{svgIcons.cv}</Link>
            <span>CV</span>
          </div>
        </div>
        <footer>
          <Link
            onClick={() => scrollTo('work')}
            ref={ref}
            className='down-section-link'
          >
            <FontAwesomeIcon className='icon' icon={faCircleArrowDown} />
          </Link>
          <SwitchMode isMobile={true} />
          <SwitchLanguage isMobile={true} />
        </footer>
      </div>
    </section>
  );
});

export default Intro;
