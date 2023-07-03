import React from 'react';

const TechImg = (props) => {
  const { image, techName } = props;

  return (
    <li className='tech-li'>
      <div className='tech-img-container'>{image}</div>
      <label className='tech-name'>{techName}</label>
    </li>
  );
};

export default TechImg;
