import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { svgTechsIcons } from "./svg/svgExports";
import TechImg from "./techImg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

WorkDescription.propTypes = {
  imgSrc: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectTechs: PropTypes.array,
  repo: PropTypes.string,
  appLink: PropTypes.string,
  imgOnRight: PropTypes.bool,
};

export default function WorkDescription(props) {
  const { t } = useTranslation();
  const {
    imgSrc,
    projectName,
    projectDescription,
    projectTechs,
    repo,
    appLink,
    imgOnRight,
  } = props;

  const [techArray, setTechArray] = useState([]);
  const imagesObj = {
    React: svgTechsIcons.react,
    MongoDB: svgTechsIcons.mongodb,
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
    const aux = [];

    projectTechs.forEach((element) => {
      if (!imagesObj[element]) {
        return;
      }

      aux.push(
        <TechImg
          image={imagesObj[element]}
          techName={element}
          customStyles={{
            iconSize: " w-8 h-8 lg:w-10 lg:h-10",
            iconSeparation: "px-4 mt-4",
            iconText: "text-xs",
          }}
          key={uuidv4()}
        />
      );
    });

    setTechArray(aux);
  }, []);

  const imgElement = (
    <figure className='flex items-center work-cards-container w-[55%]'>
      <div className=''>
        <img
          alt='project-img'
          className={`img-layer-img ${
            imgOnRight ? "rounded-l-md" : "rounded-r-md"
          }`}
          src={imgSrc}
        />
      </div>
    </figure>
  );
  const descriptionElement = (
    <div
      className={`work-description font-comfortaa w-[45%] px-10 text-lg`}
      key={uuidv4()}>
      <div className=''>
        <h2 className={" uppercase font-bold text-3xl py-4"}>{projectName}</h2>
        <p className={``}>{projectDescription}</p>
      </div>

      <div className='pt-4'>
        <h4 className=' text-xs'>Built with: </h4>
        <div className='techs'>
          <ul className='techs__ul flex flex-wrap'>
            {techArray.map((element) => (
              <li key={uuidv4} className='w-1/5'>
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`w-full flex justify-center gap-4 mt-4 lg:gap-10 z-100`}>
        <Link className={`${buttonStyles}`} to={repo} target='_blank'>
          {t("works.buttons.button-1")}
        </Link>
        <Link className={`${buttonStyles}`} to={appLink} target='_blank'>
          {t("works.buttons.button-2")}
        </Link>
      </div>
    </div>
  );

  return (
    <div className=' flex items-center py-16 h-[100%] '>
      {imgOnRight
        ? [descriptionElement, imgElement]
        : [imgElement, descriptionElement]}
    </div>
  );
}

const buttonStyles =
  "bg-transparent px-6 lg:px-8 py-3 lg:py-4 border border-black rounded-md cursor-pointer hover:bg-slate-200 transition-all duration-200 z-100";
