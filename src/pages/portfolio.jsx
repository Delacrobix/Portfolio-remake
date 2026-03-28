import { useRef } from "react";
import { I18nextProvider } from "react-i18next";

import Intro from "../sections/intro";
import Header from "../sections/header";
import Footer from "../sections/footer";
import AboutMe from "../sections/aboutMe";
import Experience from "../sections/experience";
import Projects from "../sections/projects";
import Articles from "../sections/articles";
import Videos from "../sections/videos";
import Awards from "../sections/awards";
import Certifications from "../sections/certifications";
import Tools from "../sections/tools";
import i18n from "../config/languages";
import Contact from "../sections/contact";
import useIsMobile from "../hooks/useIsMobile";

function Divider() {
  return (
    <div className='px-[25%]'>
      <hr className='border-t-[1.5px] border-black/30 dark:border-white/[0.404]' />
    </div>
  );
}

export default function Portfolio() {
  const isMobile = useIsMobile();

  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const introRef = useRef(null);
  const workRef = useRef(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const articlesRef = useRef(null);
  const videosRef = useRef(null);
  const awardsRef = useRef(null);
  const certificationsRef = useRef(null);
  const toolsRef = useRef(null);

  function scrollTo(section) {
    if (section === "intro") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const refSwitch = {
      skills: skillsRef,
      contact: contactRef,
      intro: introRef,
      work: workRef,
      aboutMe: aboutMeRef,
      experience: experienceRef,
      projects: projectsRef,
      articles: articlesRef,
      videos: videosRef,
      awards: awardsRef,
      certifications: certificationsRef,
      tools: toolsRef,
    };

    refSwitch[section].current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header scrollTo={scrollTo} isMobile={isMobile} />
      <Intro scrollTo={scrollTo} ref={introRef} isMobile={isMobile} />

      <I18nextProvider i18n={i18n}>
        <AboutMe ref={aboutMeRef} />
      </I18nextProvider>

      <Divider />

      <I18nextProvider i18n={i18n}>
        <Experience ref={experienceRef} />
      </I18nextProvider>

      <Divider />

      <I18nextProvider i18n={i18n}>
        <Projects ref={projectsRef} />
      </I18nextProvider>

      <Divider />

      <I18nextProvider i18n={i18n}>
        <Awards ref={awardsRef} />
      </I18nextProvider>

      <Divider />

      <I18nextProvider i18n={i18n}>
        <Articles ref={articlesRef} />
      </I18nextProvider>

      <Divider />

      <I18nextProvider i18n={i18n}>
        <Videos ref={videosRef} />
      </I18nextProvider>

      <Divider />

      <I18nextProvider i18n={i18n}>
        <Certifications ref={certificationsRef} />
      </I18nextProvider>

      <Divider />

      <I18nextProvider i18n={i18n}>
        <Tools ref={toolsRef} />
      </I18nextProvider>

      <Divider />
      <Divider />

      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}
