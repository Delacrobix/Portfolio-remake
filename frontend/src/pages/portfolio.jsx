import React, { useEffect, useRef, useState } from 'react';
import Intro from '../sections/intro';
import Header from '../sections/header';
import Footer from '../sections/footer';
import Skills from '../sections/skills';
import Work from '../sections/work';
import Contact from '../sections/contact';
import AboutMe from '../sections/aboutMe';
import CarouselWorks from '../sections/carouselWorks';
import ContactSection from '../sections/contactSection';
import SwitchButton from '../components/switchButton';

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [switchWork, setSwitchWork] = useState(true);

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

  function switchWorkHandler() {
    if (switchWork) {
      setSwitchWork(false);
    } else {
      setSwitchWork(true);
    }
  }

  function scrollTo(section) {
    const refSwitch = {
      skills: skillsRef,
      contact: contactRef,
      intro: introRef,
      work: workRef,
      two: aboutMeRef,
    };

    refSwitch[section].current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header scrollTo={scrollTo} isMobile={isMobile} />
      <Intro scrollTo={scrollTo} ref={introRef} isMobile={isMobile} />
      <SwitchButton switchWorkHandler={switchWorkHandler} />
      {switchWork ? (
        <CarouselWorks ref={workRef} switchWorkHandler={switchWorkHandler} />
      ) : (
        <Work ref={workRef} switchWorkHandler={switchWorkHandler} />
      )}
      <div className='divisor-line-container'>
        <hr className='divisor-line' />
      </div>
      <AboutMe ref={aboutMeRef} />
      <div className='divisor-line-container'>
        <hr className='divisor-line' />
      </div>
      <Skills ref={skillsRef} />
      <div className='divisor-line-container'>
        <hr className='divisor-line' />
      </div>
      {/* <Contact ref={contactRef} /> */}
      <ContactSection ref={contactRef} />
      <Footer />
    </>
  );
};

export default Portfolio;
