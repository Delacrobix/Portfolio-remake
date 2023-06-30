import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TechImg from './techImg';
import imgReact from '../assets/images/techs/react.png';
import imgMongoDB from '../assets/images/techs/mongodb.png';
import imgNodeJS from '../assets/images/techs/nodejs.png';
import imgSass from '../assets/images/techs/sass.png';
import imgSQLServer from '../assets/images/techs/slq-server4.png';

const WorkCard = (props) => {
  const {
    imgSrc,
    projectName,
    projectDescription,
    repo,
    appLink,
    childData,
    techs,
  } = props;
  const [techArray, setTechArray] = useState([]);
  const workContainerRef = useRef(null);

  const imagesObj = {
    React: imgReact,
    MongoDB: imgMongoDB,
    NodeJS: imgNodeJS,
    Sass: imgSass,
    'SQL Server': imgSQLServer,
  };

  useEffect(() => {
    const data = workContainerRef.current;

    if (childData) {
      childData(data);
    }

    const aux = [];

    techs.forEach((element) => {
      aux.push(
        <TechImg
          imageUrl={imagesObj[element]}
          techName={element}
          key={uuidv4()}
        />
      );
    });

    setTechArray(aux);
    // console.log('Tech Array: ', techArray);
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
              Repository
            </Link>
          </div>
          <div>
            <Link to={appLink} target='_blank'>
              Live app
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
