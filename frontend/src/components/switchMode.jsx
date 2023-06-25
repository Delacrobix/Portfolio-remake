import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SwitchMode = (props) => {
  const { classProp, idProp } = props;
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleMode = () => {
    setIsDayMode(!isDayMode);

    const btnSwitch = document.querySelector(`#${idProp}`);

    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
  };

  return (
    <li>
      <div className={classProp} id={idProp} onClick={toggleMode}>
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
