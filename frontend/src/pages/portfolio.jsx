import React, { useEffect, useRef, useState } from 'react';
import Intro from '../components/sections/intro';
import Header from '../components/sections/header';
import Footer from '../components/sections/footer';
import Skills from '../components/sections/skills';
import Work from '../components/sections/work';
import Contact from '../components/sections/contact';
import AboutMe from '../components/sections/aboutMe';
import WorkCards from '../components/sections/workCards';

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
      two: aboutMeRef,
    };

    refSwitch[section].current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header scrollTo={scrollTo} isMobile={isMobile} />
      <Intro scrollTo={scrollTo} ref={introRef} isMobile={isMobile} />
      {/* <WorkCards /> */}
      <Work ref={workRef} />
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
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default Portfolio;
