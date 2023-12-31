import Carousel, { slidesToShowPlugin } from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import React, { forwardRef, useState } from 'react';
import WorkCard from '../components/workCard';
import bingoSrc from '../assets/images/prev/bingo.png';
import chordSrc from '../assets/images/prev/chord-generator.png';
import bookSrc from '../assets/images/prev/contact-book.png';
import gallerySrc from '../assets/images/prev/mygallery.png';
import { useTranslation } from 'react-i18next';

const CarouselWorks = forwardRef((__, ref) => {
  const { t } = useTranslation();
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
    enableSwipe: true,
  });

  const slides = [
    {
      key: uuidv4(),
      content: (
        <WorkCard
          techList={[
            'React',
            'GraphQL',
            'MongoDB',
            'SQL Server',
            'NodeJS',
            'Sass',
            'Dotnet',
            'Redis',
          ]}
          projectName={t('works.cards.work-card-4.title')}
          projectDescription={t('works.cards.work-card-4.description')}
          imgSrc={chordSrc}
          repo={'https://github.com/Delacrobix/Song-maker'}
          appLink={'https://chordgenerator.site/#/tone-selector'}
        />
      ),
    },
    // {
    //   key: uuidv4(),
    //   content: (
    //     <WorkCard
    //       techList={['Pug', 'NodeJS', 'MongoDB', 'Sass', 'JS', 'CSS']}
    //       projectName={t('works.cards.work-card-4.title')}
    //       projectDescription={t('works.cards.work-card-4.description')}
    //       imgSrc={dicesSrc}
    //       repo={'https://github.com/Delacrobix/juego-dados'}
    //       appLink={'https://delx-dicesgame-ag7izwz66-delacrobix.vercel.app'}
    //     />
    //   ),
    // },
    {
      key: uuidv4(),
      content: (
        <WorkCard
          techList={[
            'Dotnet',
            'JS',
            'Pug',
            'Sass',
            'MySQL',
            'NodeJS',
            'MongoDB',
          ]}
          projectName={t('works.cards.work-card-1.title')}
          projectDescription={t('works.cards.work-card-1.description')}
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
          techList={['React', 'NodeJS', 'Redis', 'Sass', 'Dotnet', 'MongoDB']}
          projectName={t('works.cards.work-card-2.title')}
          projectDescription={t('works.cards.work-card-2.description')}
          imgSrc={gallerySrc}
          repo={'https://github.com/Delacrobix/MyPersonalGallery'}
          appLink={'https://delacrobix.github.io/MyPersonalGallery/#/home'}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <WorkCard
          techList={['React', 'NodeJS', 'MySQL', 'Sass', 'GraphQL', 'JS']}
          projectName={t('works.cards.work-card-3.title')}
          projectDescription={t('works.cards.work-card-3.description')}
          imgSrc={bookSrc}
          repo={'https://github.com/Delacrobix/contact-book-nodejs'}
          appLink={'https://delacrobix.github.io/contact-book-nodejs/#/home'}
        />
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        setState({ goToSlide: index, showNavigation: true });
      },
    };
  });

  function offsetFn(offsetFromRadius) {
    if (offsetFromRadius === 0) {
      return {
        pointerEvents: 'auto',
      };
    } else {
      return {
        pointerEvents: 'none',
      };
    }
  }

  return (
    <section className='work__cards' ref={ref}>
      <div className='content'>
        <header className='work-cards__header'>
          <h2>{t('works.title')}</h2>
          <p>{t('works.description')}</p>
        </header>
        <Carousel
          plugins={[slidesToShowPlugin]}
          slides={slides}
          goToSlide={state.goToSlide}
          goToSlideDelay={state.goToSlideDelay}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.animationConfig}
          offsetFn={offsetFn}
        />
      </div>
    </section>
  );
});

export default CarouselWorks;
