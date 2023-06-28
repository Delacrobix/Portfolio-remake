import React from 'react';

const TechImg = (props) => {
  const { imageUrl, techName } = props;

  return (
    <li className='tech-li'>
      <div className='tech-img-container'>
        <img className='tech-img' src={imageUrl} alt='' />
      </div>
      <label className='tech-name'>{techName}</label>
    </li>
  );
};

export default TechImg;
