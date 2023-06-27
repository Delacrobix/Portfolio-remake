import React, { forwardRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faCircleArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import profilePicture from '../../assets/images/profile/me.jpg';
import SwitchMode from '../switchMode';
import SwitchLanguage from '../switchLanguage';
import { useTranslation } from 'react-i18next';

const Intro = forwardRef((props, ref) => {
  const { scrollTo } = props;
  const { t } = useTranslation();

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

    mediaQuery.addEventListener('change', handleResize);
    handleResize(mediaQuery);
  }, []);

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
        <footer>
          <Link
            onClick={() => scrollTo('work')}
            ref={ref}
            className='down-section-link'
          >
            {/* <FontAwesomeIcon icon={faAngleDown} /> */}
            <FontAwesomeIcon className='icon' icon={faCircleArrowDown} />
          </Link>
          {isMobile ? (
            <>
              <SwitchLanguage isMobile={isMobile} />{' '}
              <SwitchMode
                classProp={'switch-mobile'}
                idProp={'switch-mobile'}
              />
            </>
          ) : null}
        </footer>
      </div>
    </section>
  );
});

export default Intro;
