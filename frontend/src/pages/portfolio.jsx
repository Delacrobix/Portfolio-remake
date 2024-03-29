import React, { useEffect, useRef, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import Intro from '../sections/intro';
import Header from '../sections/header';
import Footer from '../sections/footer';
import Skills from '../sections/skills';
import Work from '../sections/work';
import AboutMe from '../sections/aboutMe';
import CarouselWorks from '../sections/carouselWorks';
import ContactSection from '../sections/contactSection';
import i18n from '../config/languages';
import WorksCascade from '../sections/worksCascade';

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const introRef = useRef(null);
  const workRef = useRef(null);
  const aboutMeRef = useRef(null);

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

  function scrollTo(section) {
    const refSwitch = {
      skills: skillsRef,
      contact: contactRef,
      intro: introRef,
      work: workRef,
      aboutMe: aboutMeRef,
    };

    refSwitch[section].current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header scrollTo={scrollTo} isMobile={isMobile} />
      <Intro scrollTo={scrollTo} ref={introRef} isMobile={isMobile} />
      {/* {isMobile ? <Work ref={workRef} /> : <CarouselWorks ref={workRef} />} */}
      {isMobile ? <Work ref={workRef} /> : <WorksCascade ref={workRef} />}
      <div className='divisor-line-container'>
        <hr className='divisor-line' />
      </div>
      <I18nextProvider i18n={i18n}>
        <AboutMe ref={aboutMeRef} />
      </I18nextProvider>
      <div className='divisor-line-container'>
        <hr className='divisor-line' />
      </div>
      <Skills ref={skillsRef} />
      <div className='divisor-line-container'>
        <hr className='divisor-line' />
      </div>
      <ContactSection ref={contactRef} />
      <Footer />
    </>
  );
};

export default Portfolio;
