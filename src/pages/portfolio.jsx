import React, { useRef } from "react";
import { I18nextProvider } from "react-i18next";

import Intro from "../sections/intro";
import Header from "../sections/header";
import Footer from "../sections/footer";
import Skills from "../sections/skills";
import Work from "../sections/work";
import AboutMe from "../sections/aboutMe";
import i18n from "../config/languages";
import WorksCascade from "../sections/worksCascade";
import Contact from "../sections/contact";
import useIsMobile from "../hooks/useIsMobile";

export default function Portfolio() {
  const isMobile = useIsMobile();

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
      aboutMe: aboutMeRef,
    };

    refSwitch[section].current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header scrollTo={scrollTo} isMobile={isMobile} />
      <Intro scrollTo={scrollTo} ref={introRef} isMobile={isMobile} />
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
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}
