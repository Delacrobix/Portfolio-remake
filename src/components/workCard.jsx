import React, { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

import { svgTechsIcons } from "./svg/svgExports";
import TechImg from "./techImg";

const WorkCard = forwardRef(
  (
    { imgSrc, projectName, projectDescription, repo, appLink, techList },
    ref
  ) => {
    const { t } = useTranslation();

    const [techArray, setTechArray] = useState([]);

    const imagesObj = {
      React: svgTechsIcons.react,
      MongoDB: svgTechsIcons.mongodb,
      Nest: svgTechsIcons.nest,
      Typescript: svgTechsIcons.typescript,
      TailwindCSS: svgTechsIcons.tailwind,
      GenAI: svgTechsIcons.genAI,
      NodeJS: svgTechsIcons.nodejs,
      Sass: svgTechsIcons.sass,
      "SQL Server": svgTechsIcons.sqlServer,
      Pug: svgTechsIcons.pug,
      MySQL: svgTechsIcons.mysql,
      Dotnet: svgTechsIcons.dotnet,
      Redis: svgTechsIcons.redis,
      JS: svgTechsIcons.js,
      CSS: svgTechsIcons.css,
      GraphQL: svgTechsIcons.graphql,
    };

    useEffect(() => {
      if (!techList) return;

      const aux = [];

      techList.forEach((element) => {
        if (!imagesObj[element]) {
          return;
        }

        aux.push(
          <TechImg
            image={imagesObj[element]}
            techName={element}
            customStyles={{
              iconSize: "w-6 h-6 sm:w-8 sm:h-8",
              iconSeparation: "px-1 mb-1 sm:px-2 sm:mb-2",
              iconText: "text-xs",
            }}
            key={uuidv4()}
          />
        );
      });

      setTechArray(aux);
    }, []);

    return (
      <figure className='work-cards-container flex items-center justify-center my-2 mx-0'>
        <div className='img-layer'>
          <img className='img-layer-img' src={imgSrc} alt='' />
        </div>
        <div className='layer' ref={ref}>
          <div className='text-container'>
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
          </div>
          <div className='buttons-container flex justify-center gap-8'>
            <div>
              <Link
                className='rounded-md px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6'
                to={repo}
                target='_blank'>
                {t("works.buttons.button-1")}
              </Link>
            </div>
            <div>
              <Link
                className='rounded-md px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6'
                to={appLink}
                target='_blank'>
                {t("works.buttons.button-2")}
              </Link>
            </div>
          </div>
          <div className='techs'>
            <ul className='techs__ul flex w-[50%] mb-1 mr-6 sm:mr-7 md:mr-2'>
              {techArray.map((element) => {
                return (
                  <li key={uuidv4()} className='w-1/6'>
                    {element}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </figure>
    );
  }
);

WorkCard.propTypes = {
  imgSrc: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  repo: PropTypes.string,
  appLink: PropTypes.string,
  techList: PropTypes.array,
};

export default WorkCard;
