import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
// import { config } from 'react-spring';
import React, { useState } from 'react';
import WorkCard from '../workCard';
import bingoSrc from '../../assets/images/prev/bingo.png';
import dicesSrc from '../../assets/images/prev/juego-dados.png';
import bookSrc from '../../assets/images/prev/contact-book.png';
import gallerySrc from '../../assets/images/prev/mygallery.png';

// const getTouches = (evt) => {
//   return evt.touches || evt.originalEvent.touches;
// };

const CarouselWorks = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    goToSlideDelay: 500,
    offsetRadius: 2,
    animationConfig: {
      mass: 1,
      tension: 250,
      friction: 25,
    },
    showNavigation: true,
    enableSwipe: false,
  });

  const slides = [
    {
      key: uuidv4(),
      content: (
        <WorkCard
          techs={['React', 'NodeJS', 'MongoDB']}
          projectName={'Bingo'}
          projectDescription={
            'Bingo game, you can to play alone or with more players'
          }
          imgSrc={bingoSrc}
          repo={'https://github.com/Delacrobix/Juego-virtual-Bingo-'}
          appLink={'https://auth-module.up.railway.app/login'}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <WorkCard
          techs={['React', 'NodeJS', 'MongoDB']}
          projectName={'My personal gallery'}
          projectDescription={
            'Here is some ones of my best photos that I have taken'
          }
          imgSrc={dicesSrc}
          repo={'https://github.com/Delacrobix/MyPersonalGallery'}
          appLink={'https://delacrobix.github'}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <WorkCard
          techs={['React', 'NodeJS', 'SQL Server']}
          projectName={'Contact book'}
          projectDescription={
            'This is a simple contact book, you can add, delete and edit contacts'
          }
          imgSrc={bookSrc}
          repo={'https://github.com/Delacrobix/ContactBook'}
          appLink={'https://delacrobix.github'}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <WorkCard
          techs={['React', 'NodeJS', 'MongoDB', 'Sass']}
          projectName={'Dices game'}
          projectDescription={'Blabal'}
          imgSrc={gallerySrc}
          repo={'https://github.com/Delacrobix/DicesGame'}
          appLink={'https://delacrobix.github'}
        />
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => setState({ goToSlide: index, showNavigation: true }),
    };
  });

  return (
    <section className='work__cards'>
      <div className='content'>
        <header className='work-cards__header'>
          <h2>My work</h2>
          <p>Here is a part of my experience as software developer</p>
        </header>
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          goToSlideDelay={state.goToSlideDelay}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.animationConfig}
        />
      </div>
    </section>
  );
};

export default CarouselWorks;
