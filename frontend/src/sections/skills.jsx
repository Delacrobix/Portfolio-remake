import React, { useRef, useEffect, forwardRef } from 'react';
import TechImg from '../components/techImg';
import { svgTechsIcons } from '../components/svg/svgExports';

const Skills = forwardRef((__, ref) => {
  const techContainerRef = useRef(null);
  const skillsTittleRef = useRef(null);
  const skillsTittleAsideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const techContainer = techContainerRef.current;
      const skillsTittle = skillsTittleRef.current;
      const skillsTittleAside = skillsTittleAsideRef.current;

      let skillsTittleHeight = skillsTittle.getBoundingClientRect().top;
      let techContainerHeight = techContainer.getBoundingClientRect().top;

      techContainer.style.opacity = 0;

      if (
        window.innerHeight / 1.6 > skillsTittleHeight &&
        techContainerHeight > -100
      ) {
        skillsTittleAside.classList.add('active');
        techContainer.style.opacity = 1;
      } else {
        skillsTittleAside.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='skills' ref={ref}>
      <section className='tech-container' ref={techContainerRef}>
        <ul>
          <TechImg image={svgTechsIcons.dotnet} techName={'.NET Core'} />
          <TechImg image={svgTechsIcons.js} techName={'Javascript'} />
          <TechImg image={svgTechsIcons.mongodb} techName={'Mongodb'} />
        </ul>
        <ul>
          <TechImg image={svgTechsIcons.sqlServer} techName={'SQL Server'} />
          <TechImg image={svgTechsIcons.react} techName={'React'} />
          <TechImg image={svgTechsIcons.sass} techName={'Sass'} />
        </ul>
        <ul>
          <TechImg image={svgTechsIcons.git} techName={'Git'} />
          <TechImg image={svgTechsIcons.nodejs} techName={'NodeJS'} />
          <TechImg image={svgTechsIcons.docker} techName={'Docker'} />
        </ul>
      </section>
      <aside className='skills-description-aside' ref={skillsTittleAsideRef}>
        <header className='skills-tittle-header' ref={skillsTittleRef}>
          <h2>Skills</h2>
        </header>
        <p className='skills-description'>
          These are the technologies that I have worked with. I have experience
          in developing applications with MVC architecture and modular
          applications. Additionally, I can build REST APIs and GraphQL APIs.
        </p>
      </aside>
    </section>
  );
});

export default Skills;
