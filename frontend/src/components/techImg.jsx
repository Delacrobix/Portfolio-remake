import React from 'react';

const TechImg = (props) => {
  const { image, techName, customStyles } = props;
  const iconSize = customStyles ? customStyles.iconSize : '';
  const iconSeparation = customStyles ? customStyles.iconSeparation : '';
  const iconText = customStyles ? customStyles.iconText : '';

  return (
    <li className={`tech-li ${iconSeparation}`}>
      <div className={`tech-img-container ${iconSize} `}>{image}</div>
      <label className={`tech-name ${iconText}`}>{techName}</label>
    </li>
  );
};

export default TechImg;
