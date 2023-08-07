import React, { forwardRef, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import enCv from '../assets/files/cvs/ecv.pdf';
import esCv from '../assets/files/cvs/scv.pdf';
import { useState } from 'react';

const AboutMe = forwardRef((__, ref) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const aboutMeContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutMeContainer = aboutMeContainerRef.current;
      const title = titleRef.current;

      if (aboutMeContainer) {
        const targetPosition =
          aboutMeContainer.getBoundingClientRect().top + scrollPosition;
        const windowHeight = window.innerHeight;

        if (
          scrollPosition - scrollPosition * 0.25 >=
          targetPosition - windowHeight
        ) {
          aboutMeContainer.classList.add('active');
        } else {
          aboutMeContainer.classList.remove('active');
        }

        const titleTop = title.getBoundingClientRect().top;

        if (titleTop < windowHeight * 0.08) {
          aboutMeContainer.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  function openPDF() {
    if (language === 'es') {
      window.open(esCv, '_blank');
    } else {
      window.open(enCv, '_blank');
    }
  }

  return (
    <section ref={ref} className='about-me'>
      <div className='about-me__container' ref={aboutMeContainerRef}>
        <header className='about-me__title'>
          <h2 ref={titleRef}>{t('about-me.title')}</h2>
        </header>
        <p className='about-me__description'>{t('about-me.description')}</p>
        <div className='cv-container'>
          <Link onClick={openPDF}>{t('about-me.cv-button')}</Link>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
