import React, { useRef, useEffect, forwardRef } from 'react';
import TechImg from '../components/techImg';
import { svgTechsIcons } from '../components/svg/svgExports';
import { useTranslation } from 'react-i18next';

const Skills = forwardRef((__, ref) => {
  const { t } = useTranslation();
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
          <h2>{t('skills.title')}</h2>
        </header>
        <p className='skills-description'>{t('skills.description')}</p>
      </aside>
    </section>
  );
});

export default Skills;
