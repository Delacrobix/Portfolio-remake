import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { svgTechsIcons } from './svg/svgExports';
import TechImg from './techImg';

export default function WorkDescription(props) {
  const {
    imgSrc,
    projectName,
    projectDescription,
    projectTechnicalInfo,
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
    'SQL Server': svgTechsIcons.sqlServer,
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
      aux.push(
        <TechImg
          image={imagesObj[element]}
          techName={element}
          customStyles={{
            iconSize: 'w-10 h-10',
            iconSeparation: 'p-4',
            iconText: 'text-xs',
          }}
          key={uuidv4()}
        />
      );
    });

    setTechArray(aux);
  }, []);

  const imgElement = (
    <div className={`w-[55%] `} key={uuidv4()}>
      <img className='' src={imgSrc} alt='' />
    </div>
  );
  const descriptionElement = (
    <div
      className={`work-description font-comfortaa w-[45%] p-10 text-lg`}
      key={uuidv4()}
    >
      <div className=''>
        <h2 className={' uppercase font-bold text-3xl py-4'}>{projectName}</h2>
        <p className={``}>{projectDescription}</p>
      </div>
      <div className={`py-8`}>
        <h3>{projectTechnicalInfo && projectTechnicalInfo}</h3>
        <p>Detailed description</p>
      </div>
      <div className=''>
        <h4 className=' text-xs'>Built with: </h4>
        <div className='techs'>
          <ul className='techs__ul flex'>
            {techArray.map((element) => {
              return element;
            })}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className=' flex items-center h-[100vh]'>
      {imgOnRight
        ? [descriptionElement, imgElement]
        : [imgElement, descriptionElement]}
    </div>
  );
}
