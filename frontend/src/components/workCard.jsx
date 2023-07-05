import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { svgTechsIcons } from './svg/svgExports';
import TechImg from './techImg';
import { useTranslation } from 'react-i18next';

const WorkCard = (props) => {
  const { t } = useTranslation();
  const {
    imgSrc,
    projectName,
    projectDescription,
    repo,
    appLink,
    childData,
    techList,
  } = props;
  const [techArray, setTechArray] = useState([]);
  const workContainerRef = useRef(null);

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
    const data = workContainerRef.current;

    if (childData) {
      childData(data);
    }

    const aux = [];

    techList.forEach((element) => {
      aux.push(
        <TechImg image={imagesObj[element]} techName={element} key={uuidv4()} />
      );
    });

    setTechArray(aux);
  }, []);

  return (
    <figure className='work-cards-container' ref={workContainerRef}>
      <div className='img-layer'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='layer'>
        <div className='text-container'>
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
        </div>
        <div className='buttons-container'>
          <div>
            <Link to={repo} target='_blank'>
              {t('works.buttons.button-1')}
            </Link>
          </div>
          <div>
            <Link to={appLink} target='_blank'>
              {t('works.buttons.button-2')}
            </Link>
          </div>
        </div>
        <div className='techs'>
          <ul className='techs__ul'>
            {techArray.map((element) => {
              return element;
            })}
          </ul>
        </div>
      </div>
    </figure>
  );
};

export default WorkCard;
