import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownHeader = (props) => {
  const { scrollTo } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown-header'>
      <button className='dropdown-header__toggle' onClick={toggleMenu}>
        Menú
      </button>
      {isOpen && (
        <ul className='dropdown-header__list'>
          <li>
            <Link className='header__link' onClick={() => scrollTo('intro')}>
              Intro
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('work')}>
              My Work
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('two')}>
              Who I Am
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('skills')}>
              Skills
            </Link>
          </li>
          <li>
            <Link className='header__link' onClick={() => scrollTo('contact')}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownHeader;
