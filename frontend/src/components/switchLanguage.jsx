import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SwitchLanguage = (props) => {
  const { classProp, idProp } = props;
  return (
    <Link id={idProp} className={classProp}>
      <FontAwesomeIcon icon={faLanguage} />
      <FontAwesomeIcon icon={faLanguage} />
    </Link>
  );
};

export default SwitchLanguage;
