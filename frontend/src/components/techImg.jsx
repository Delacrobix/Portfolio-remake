import React from 'react';

const TechImg = (props) => {
  const { imageUrl, techName } = props;

  return (
    <li className='tech-img-li'>
      <img className='tech-img' src={imageUrl} alt='' />
      <label className='tech-name'>{techName}</label>
    </li>
  );
};

export default TechImg;
