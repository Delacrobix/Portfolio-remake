import PropTypes from "prop-types";

TechImg.propTypes = {
  image: PropTypes.element.isRequired,
  techName: PropTypes.string,
  customStyles: PropTypes.object,
};

export default function TechImg({ image, techName, customStyles }) {
  const iconSize = customStyles?.iconSize ?? "";
  const iconSeparation = customStyles?.iconSeparation ?? "";
  const iconText = customStyles?.iconText ?? "";

  return (
    <span
      className={`group font-comfortaa flex flex-col items-center transition-transform duration-200 hover:scale-105 w-full ${iconSeparation}`}>
      <div className={`flex justify-center items-center ${iconSize}`}>
        {image}
      </div>
      <label
        className={`transition-[color,opacity] duration-200 text-black/70 opacity-0 dark:text-[rgba(221,230,237,0.5)] group-hover:opacity-100 group-hover:text-black dark:group-hover:text-[#dde6ed] ${iconText}`}>
        {techName}
      </label>
    </span>
  );
}
