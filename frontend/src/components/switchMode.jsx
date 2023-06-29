import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const SwitchMode = (props) => {
  const { isMobile } = props;
  const [isDayMode, setIsDayMode] = useState(true);
  const switchButtonRef = useRef(null);

  const toggleMode = () => {
    setIsDayMode(!isDayMode);

    const btnSwitch = switchButtonRef.current;

    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
  };

  return isMobile ? (
    <li>
      <div
        ref={switchButtonRef}
        className='switch-mode-mobile'
        onClick={toggleMode}
      >
        <span>
          <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
        </span>
      </div>
    </li>
  ) : (
    <li>
      <div ref={switchButtonRef} className='switch-mode' onClick={toggleMode}>
        <span>
          <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
        </span>
        <span>
          <FontAwesomeIcon icon={isDayMode ? faMoon : faSun} />
        </span>
      </div>
    </li>
  );
};

export default SwitchMode;
