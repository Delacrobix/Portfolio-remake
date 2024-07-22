import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

SwitchMode.propTypes = {
  isMobile: PropTypes.bool,
};

export default function SwitchMode({ isMobile }) {
  const [isDayMode, setIsDayMode] = useState(true);
  const switchButtonRef = useRef(null);

  function toggleMode() {
    setIsDayMode(!isDayMode);

    const btnSwitch = switchButtonRef.current;

    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
  }

  return isMobile ? (
    <li>
      <button
        ref={switchButtonRef}
        className='switch-mode-mobile'
        onClick={toggleMode}>
        <span>
          <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
        </span>
      </button>
    </li>
  ) : (
    <li>
      <button
        ref={switchButtonRef}
        className='switch-mode'
        onClick={toggleMode}>
        <span>
          <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
        </span>
        <span>
          <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
        </span>
      </button>
    </li>
  );
}
