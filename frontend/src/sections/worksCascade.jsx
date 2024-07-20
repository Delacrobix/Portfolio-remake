import React from "react";
import WorkDescription from "../components/workDescription";
import { useTranslation } from "react-i18next";

import chordSrc from "../assets/images/prev/chord-generator.png";
// import gallerySrc from "../assets/images/prev/mygallery.png";
import cssTailwindConverterSrc from "../assets/images/prev/desktop/css-tailwind-converter-home.png";
import cvConverterSrc from "../assets/images/prev/desktop/cv-converter-result.png";

function WorksCascadeComponent(_, ref) {
  const { t } = useTranslation();

  return (
    <section className='work-cascade py-32' ref={ref}>
      {/* TODO: Change the description and name */}
      <WorkDescription
        projectTechs={["Nest", "React", "NodeJS", "TailwindCSS", "Typescript"]}
        projectName={t("works.cards.work-card-1.title")}
        projectDescription={t("works.cards.work-card-1.description")}
        imgSrc={cssTailwindConverterSrc}
        repo={"https://github.com/Delacrobix/CSS-tailwind_converter"}
        appLink={"https://css-tailwind-converter.pages.dev"}
        imgOnRight={false}
      />
      {/* TODO: Change the description and name */}
      <WorkDescription
        projectTechs={["React", "NodeJS", "Nest", "Typescript", "Tailwind"]}
        projectName={t("works.cards.work-card-3.title")}
        projectDescription={t("works.cards.work-card-3.description")}
        imgSrc={cvConverterSrc}
        repo={"https://github.com/Delacrobix/CV-analyzer"}
        appLink={"https://cv-analyzer-frontend.pages.dev"}
        imgOnRight={true}
      />
      <WorkDescription
        projectTechs={[
          "React",
          "GraphQL",
          "MongoDB",
          "SQL Server",
          "NodeJS",
          "Sass",
          "Dotnet",
          "Redis",
        ]}
        projectName={t("works.cards.work-card-4.title")}
        projectDescription={t("works.cards.work-card-4.description")}
        imgSrc={chordSrc}
        repo={"https://github.com/Delacrobix/Song-maker"}
        appLink={"https://chordgenerator.site/#/tone-selector"}
        imgOnRight={false}
      />
      {/* <WorkDescription
        projectTechs={["React", "NodeJS", "Redis", "Sass", "Dotnet", "MongoDB"]}
        projectName={t("works.cards.work-card-2.title")}
        projectDescription={t("works.cards.work-card-2.description")}
        imgSrc={gallerySrc}
        repo={"https://github.com/Delacrobix/MyPersonalGallery"}
        appLink={"https://delacrobix.github.io/MyPersonalGallery/#/home"}
        imgOnRight={true}
      /> */}
    </section>
  );
}

const WorksCascade = React.forwardRef(WorksCascadeComponent);

export default WorksCascade;
