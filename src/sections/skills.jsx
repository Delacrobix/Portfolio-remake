import React, { useRef, useEffect, forwardRef } from "react";
import { useTranslation } from "react-i18next";

import { svgTechsIcons } from "../components/svg/svgExports";
import TechImg from "../components/techImg";

const Skills = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const techContainerRef = useRef(null);
  const skillsTittleRef = useRef(null);
  const skillsTittleAsideRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const techContainer = techContainerRef.current;
      const skillsTittle = skillsTittleRef.current;
      const skillsTittleAside = skillsTittleAsideRef.current;

      let skillsTittleHeight = skillsTittle.getBoundingClientRect().top;
      let techContainerHeight = techContainer.getBoundingClientRect().top;

      techContainer.style.opacity = 0;

      if (
        window.innerHeight / 1.6 > skillsTittleHeight &&
        techContainerHeight > -100
      ) {
        skillsTittleAside.classList.add("active");
        techContainer.style.opacity = 1;
      } else {
        skillsTittleAside.classList.remove("active");
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  const customStyles = {
    iconSize: "w-28 h-28",
    iconSeparation: "p-10",
    iconText: "text-xs",
  };

  return (
    <section className='skills' ref={ref}>
      <section className='tech-container' ref={techContainerRef}>
        <ul>
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.docker}
            techName={"Docker"}
          />
          {/* TODO: Change for Elasticsearch */}
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.elasticsearch}
            techName={"Elasticsearch"}
          />
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.nodejs}
            techName={"NodeJS"}
          />
        </ul>
        <ul>
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.genAI}
            techName={"GenAI"}
          />
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.react}
            techName={"React"}
          />
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.python}
            techName={"Python"}
          />
        </ul>
        <ul>
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.git}
            techName={"Git"}
          />
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.mongodb}
            techName={"Mongodb"}
          />
          <TechImg
            customStyles={customStyles}
            image={svgTechsIcons.typescript}
            techName={"Typescript"}
          />
        </ul>
      </section>
      <aside
        className='skills-description-aside font-comfortaa'
        ref={skillsTittleAsideRef}>
        <header
          className='skills-tittle-header font-comfortaa'
          ref={skillsTittleRef}>
          <h2 className='font-bold'>{t("skills.title")}</h2>
        </header>
        <p className='skills-description'>{t("skills.description")}</p>
      </aside>
    </section>
  );
});

export default Skills;
