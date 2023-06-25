import React, { useRef, useEffect } from 'react';
import TechImg from '../techImg';

const One = () => {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context('../../assets/images/techs', false, /\.(png|jpe?g|svg)$/)
  );

  const techContainerRef = useRef(null);
  const skillsTittleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const techContainer = techContainerRef.current;
      const skillsTittle = skillsTittleRef.current;

      let skillsTittleHeight = skillsTittle.getBoundingClientRect().top;
      let techContainerHeight = techContainer.getBoundingClientRect().top;

      techContainer.style.opacity = 0;

      if (
        window.innerHeight / 1.6 > skillsTittleHeight &&
        techContainerHeight > -100
      ) {
        techContainer.style.opacity = 1;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <section id='one' className='section-one'>
      <section className='tech-container' ref={techContainerRef}>
        <ul>
          <TechImg imageUrl={images[0]} techName={'.NET Core'} />
          <TechImg imageUrl={images[5]} techName={'Javascript'} />
          <TechImg imageUrl={images[6]} techName={'Mongodb'} />
        </ul>
        <ul>
          <TechImg imageUrl={images[12]} techName={'SQL Server'} />
          <TechImg imageUrl={images[10]} techName={'React'} />
          <TechImg imageUrl={images[11]} techName={'Sass'} />
        </ul>
        <ul>
          <TechImg imageUrl={images[3]} techName={'Git'} />
          <TechImg imageUrl={images[9]} techName={'NodeJS'} />
          <TechImg imageUrl={images[13]} techName={'Spring boot'} />
        </ul>
      </section>
      <aside>
        <header id='skills-tittle' ref={skillsTittleRef}>
          <h2>Skills</h2>
        </header>
        <p>
          These are the technologies that I have worked with. I have experience
          in developing applications with MVC architecture and modular
          applications. Additionally, I can build REST APIs and GraphQL APIs.
        </p>
      </aside>
    </section>
  );
};

export default One;
