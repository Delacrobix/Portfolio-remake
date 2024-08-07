import React, { forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import WorkCard from "../components/workCard";
import chordSrc from "../assets/images/prev/chord-generator.png";
import cssTailwindConverterSrc from "../assets/images/prev/desktop/css-tailwind-converter-home.png";
import cvConverterSrc from "../assets/images/prev/desktop/cv-converter-result.png";

function WorkComponent(__, ref) {
  const { t } = useTranslation();
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const windowHeight = window.innerHeight;
  const halfWindowHeight = windowHeight / 2;

  useEffect(() => {
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    function handleScroll() {
      handleHover(card1);
      handleHover(card2);
      handleHover(card3);
      handleHover(card4);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleHover(card) {
    if (card) {
      const height = card.getBoundingClientRect().top;

      if (height < halfWindowHeight) {
        changeLayerStyle(card, "visible", "1");
      }

      if (height < windowHeight * 0.1) {
        changeLayerStyle(card, "hidden", "0");
      }

      if (height < 0) {
        changeLayerStyle(card, "hidden", "0");
      }

      if (height > windowHeight * 0.7) {
        changeLayerStyle(card, "hidden", "0");
      }
    }
  }

  function changeLayerStyle(card, visibility, opacity) {
    card.style.visibility = visibility;
    card.style.opacity = opacity;
  }

  return (
    <section ref={ref} className='works py-32'>
      <div className='content'>
        <header className='work-tittle py-4 font-comfortaa'>
          <h2 className='font-bold'>{t("works.title")}</h2>
          <p>{t("works.description")}</p>
        </header>
        <section className='section-gallery'>
          <WorkCard
            ref={card4Ref}
            techList={[
              "Nest",
              "React",
              "NodeJS",
              "TailwindCSS",
              "Typescript",
              "GenAI",
            ]}
            projectName={t("works.cards.work-card-1.title")}
            projectDescription={t("works.cards.work-card-1.description")}
            imgSrc={cssTailwindConverterSrc}
            repo={"https://github.com/Delacrobix/CSS-tailwind_converter"}
            appLink={"https://css-tailwind-converter.pages.dev"}
          />
          <WorkCard
            ref={card3Ref}
            techList={[
              "React",
              "NodeJS",
              "Nest",
              "Typescript",
              "TailwindCSS",
              "GenAI",
            ]}
            projectName={t("works.cards.work-card-3.title")}
            projectDescription={t("works.cards.work-card-3.description")}
            imgSrc={cvConverterSrc}
            repo={"https://github.com/Delacrobix/CV-analyzer"}
            appLink={"https://cv-analyzer-frontend.pages.dev"}
          />
          <WorkCard
            ref={card1Ref}
            techList={[
              "GenAI",
              "React",
              "GraphQL",
              "MongoDB",
              "SQL Server",
              "NodeJS",
              "Redis",
            ]}
            projectName={t("works.cards.work-card-4.title")}
            projectDescription={t("works.cards.work-card-4.description")}
            imgSrc={chordSrc}
            repo={"https://github.com/Delacrobix/Song-maker"}
            appLink={"https://chordgenerator.site/#/tone-selector"}
          />
        </section>
      </div>
    </section>
  );
}

const Work = forwardRef(WorkComponent);

export default Work;
