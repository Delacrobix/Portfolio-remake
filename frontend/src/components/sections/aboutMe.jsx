import React, { forwardRef, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cv from '../../assets/files/cvs/ecv.pdf';

const AboutMe = forwardRef((__, ref) => {
  const aboutMeContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutMeContainer = aboutMeContainerRef.current;
      const title = titleRef.current;

      if (aboutMeContainer) {
        const targetPosition =
          aboutMeContainer.getBoundingClientRect().top + scrollPosition;
        const windowHeight = window.innerHeight;

        if (
          scrollPosition - scrollPosition * 0.25 >=
          targetPosition - windowHeight
        ) {
          aboutMeContainer.classList.add('active');
        } else {
          aboutMeContainer.classList.remove('active');
        }

        const titleTop = title.getBoundingClientRect().top;

        if (titleTop < windowHeight * 0.08) {
          aboutMeContainer.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  function openPDF() {
    window.open(cv, '_blank');
  }

  return (
    <section ref={ref} className='about-me'>
      <div className='about-me__container' ref={aboutMeContainerRef}>
        <header className='about-me__title'>
          <h2 ref={titleRef}>Who I Am?</h2>
        </header>
        <p className='about-me__description'>
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
});

export default AboutMe;
