import React from 'react';
import { Link } from 'react-router-dom';
import cv from '../../assets/files/cvs/ecv.pdf';

const Two = () => {
  function openPDF() {
    window.open(cv, '_blank');
  }

  return (
    <section id='two' className='section-two'>
      <div className='two-container'>
        <header>
          <h2>Who I Am?</h2>
        </header>
        <p>
          My name is Jeffrey Sneider Rengifo Marin but sometimes I sign as
          Jeffrey S. Rerín. I am Fullstack developer and actually I am studying
          Software Engineering. I feel passion for solving problems, facilities
          for the autodidact learning and for the team work.
        </p>
        <div className='cv-container'>
          <Link onClick={openPDF}>Watch CV</Link>
        </div>
      </div>
    </section>
  );
};

export default Two;
