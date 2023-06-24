import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
      <ul className='icons'>
        <li>
          <Link
            to='https://www.linkedin.com/in/jeffrey-rerin/'
            target='_blank'
            className='icon brands fa-linkedin-in'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            <span className='label'>LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link
            to='https://github.com/Delacrobix'
            target='_blank'
            className='icon brands fa-github'
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className='label'>Github</span>
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
