import React, { forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const AboutMe = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const aboutMeContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const aboutMeContainer = aboutMeContainerRef.current;
      const title = titleRef.current;

      if (aboutMeContainer) {
        const targetPosition =
          aboutMeContainer.getBoundingClientRect().top + scrollPosition;
        const windowHeight = window.innerHeight;

        if (
          scrollPosition - scrollPosition * 0.1 >=
          targetPosition - windowHeight
        ) {
          aboutMeContainer.classList.add("active");
        } else {
          aboutMeContainer.classList.remove("active");
        }

        const titleTop = title.getBoundingClientRect().top;

        if (titleTop < windowHeight * 0.08) {
          aboutMeContainer.classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className='about-me w-full font-comfortaa'>
      <div className='about-me__container' ref={aboutMeContainerRef}>
        <header className='about-me__title font-bold'>
          <h2 ref={titleRef}>{t("about-me.title")}</h2>
        </header>
        <p className='about-me__description'>{t("about-me.description")}</p>
      </div>
    </section>
  );
});

export default AboutMe;
