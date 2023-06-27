import React, { useRef } from 'react';
import Intro from '../components/sections/intro';
import Header from '../components/sections/header';
import Footer from '../components/sections/footer';
import Skills from '../components/sections/skills';
import Work from '../components/sections/work';
import Contact from '../components/sections/contact';
import AboutMe from '../components/sections/aboutMe';

const Portfolio = () => {
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const introRef = useRef(null);
  const workRef = useRef(null);
  const aboutMeRef = useRef(null);

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
      <Header scrollTo={scrollTo} />
      <Intro scrollTo={scrollTo} ref={introRef} />
      <Work ref={workRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default Portfolio;
