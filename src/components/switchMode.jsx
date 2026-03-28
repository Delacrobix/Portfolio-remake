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
      {/* switch-mode-mobile: hidden by default, shown as flex at ≤992px */}
      <button
        ref={switchButtonRef}
        className='hidden max-[992px]:flex w-[5.6rem] h-[5.6rem] rounded-full bg-white/30 border border-white/50 items-center justify-center hover:bg-white/50 transition-all duration-500'
        onClick={toggleMode}>
        <span className='text-[3rem]'>
          <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
        </span>
      </button>
    </li>
  ) : (
    /* switch-mode keeps its class for the ::after sliding knob (CSS pseudo-element) */
    <button
      ref={switchButtonRef}
      className='switch-mode bg-[#343d5b] rounded-[20px] relative cursor-pointer flex outline-none p-[0.11rem] items-center justify-center'
      onClick={toggleMode}>
      <span className='w-[1.85rem] h-[1.85rem] leading-[1.85rem] block text-white ml-[5px]'>
        <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
      </span>
      <span className='w-[1.85rem] h-[1.85rem] leading-[1.85rem] block text-white ml-[5px]'>
        <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
      </span>
    </button>
  );
}
