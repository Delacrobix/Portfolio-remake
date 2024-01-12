import React, { forwardRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../components/workCard';
import bingoSrc from '../assets/images/prev/bingo.png';
import gallerySrc from '../assets/images/prev/mygallery.png';
import bookSrc from '../assets/images/prev/contact-book.png';
import chordSrc from '../assets/images/prev/chord-generator.png';
import { useRef } from 'react';

const Work = forwardRef((__, ref) => {
  const { t } = useTranslation();
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const windowHeight = window.innerHeight;
  const halfWindowHeight = windowHeight / 2;

  useEffect(() => {
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    function handleScroll() {
      handleHover(card1);
      handleHover(card2);
      handleHover(card3);
      handleHover(card4);
    }

    window.addEventListener('scroll', handleScroll);
  }, []);

  function handleHover(card) {
    if (card) {
      const height = card.getBoundingClientRect().top;

      if (height < halfWindowHeight) {
        changeLayerStyle(card, 'visible', '1');
      }

      if (height < windowHeight * 0.1) {
        changeLayerStyle(card, 'hidden', '0');
      }

      if (height < 0) {
        changeLayerStyle(card, 'hidden', '0');
      }

      if (height > windowHeight * 0.7) {
        changeLayerStyle(card, 'hidden', '0');
      }
    }
  }

  function changeLayerStyle(card, visibility, opacity) {
    card.style.visibility = visibility;
    card.style.opacity = opacity;
  }

  return (
    <section ref={ref} className='works'>
      <div className='content'>
        <header className='work-tittle'>
          <h2>{t('works.title')}</h2>
          <p>{t('works.description')}</p>
        </header>
        {/* <section className='section-gallery'>
          <WorkCard
            ref={card1Ref}
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
          <WorkCard
            ref={card2Ref}
            techList={['React', 'NodeJS', 'Redis', 'Sass', 'Dotnet', 'MongoDB']}
            projectName={t('works.cards.work-card-2.title')}
            projectDescription={t('works.cards.work-card-2.description')}
            imgSrc={gallerySrc}
            repo={'https://github.com/Delacrobix/MyPersonalGallery'}
            appLink={'https://delacrobix.github.io/MyPersonalGallery/#/home'}
          />
          <WorkCard
            ref={card3Ref}
            techList={['React', 'NodeJS', 'MySQL', 'Sass', 'GraphQL', 'JS']}
            projectName={t('works.cards.work-card-3.title')}
            projectDescription={t('works.cards.work-card-3.description')}
            imgSrc={bookSrc}
            repo={'https://github.com/Delacrobix/contact-book-nodejs'}
            appLink={'https://delacrobix.github.io/contact-book-nodejs/#/home'}
          />
          <WorkCard
            ref={card4Ref}
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
        </section> */}
      </div>
    </section>
  );
});

export default Work;
