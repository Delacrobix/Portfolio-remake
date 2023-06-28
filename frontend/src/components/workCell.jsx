import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const WorkCell = (props) => {
  const { projectName, projectDescription, repo, appLink, imgSrc, childData } =
    props;

  const workContainerRef = useRef(null);

  useEffect(() => {
    const data = workContainerRef.current;

    childData(data);
  }, []);

  return (
    <figure className='work-container' ref={workContainerRef}>
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
      </div>
    </figure>
  );
};

export default WorkCell;
