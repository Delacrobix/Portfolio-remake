import React from "react";
import PropTypes from "prop-types";

TechImg.propTypes = {
  image: PropTypes.element.isRequired,
  techName: PropTypes.string,
  customStyles: PropTypes.object,
};

export default function TechImg({ image, techName, customStyles }) {
  const iconSize = customStyles ? customStyles?.iconSize : "";
  const iconSeparation = customStyles ? customStyles?.iconSeparation : "";
  const iconText = customStyles ? customStyles?.iconText : "";

  return (
    <span className={`tech-li w-full ${iconSeparation}`}>
      <div className={`tech-img-container ${iconSize} `}>{image}</div>
      <label className={`tech-name ${iconText}`}>{techName}</label>
    </span>
  );
}
