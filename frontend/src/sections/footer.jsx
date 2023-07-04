import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const LINKEDIN = process.env.REACT_APP_LINKEDIN;
  const GITHUB = process.env.REACT_APP_GITHUB;
  const TELEGRAM = process.env.REACT_APP_TELEGRAM;

  return (
    <footer className='footer'>
      <ul className='icons-ul'>
        <li>
          <Link to={LINKEDIN} target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
            <span className='label'>LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link to={GITHUB} target='_blank'>
            <FontAwesomeIcon icon={faGithub} className='icon' />
            <span className='label'>Github</span>
          </Link>
        </li>
        <li>
          <Link to={TELEGRAM} target='_blank'>
            <FontAwesomeIcon icon={faTelegram} className='icon' />
            <span className='label'>Telegram</span>
          </Link>
        </li>
      </ul>
      <ul className='menu'>
        <li> Jeffrey S. Rerín</li>
      </ul>
    </footer>
  );
};

export default Footer;
