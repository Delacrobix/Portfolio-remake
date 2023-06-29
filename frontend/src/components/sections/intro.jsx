import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import profilePicture from '../../assets/images/profile/me.jpg';
import SwitchMode from '../switchMode';
import SwitchLanguage from '../switchLanguage';
import DropdownHeader from '../dropdownHeader';
import { useTranslation } from 'react-i18next';

const Intro = forwardRef((props, ref) => {
  const { scrollTo } = props;
  const { t } = useTranslation();

  return (
    <section ref={ref} className='intro'>
      <DropdownHeader scrollTo={scrollTo} />
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
