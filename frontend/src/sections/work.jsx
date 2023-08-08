import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../components/workCard';
import bingoSrc from '../assets/images/prev/bingo.png';
import gallerySrc from '../assets/images/prev/mygallery.png';
import bookSrc from '../assets/images/prev/contact-book.png';
import chordSrc from '../assets/images/prev/chord-generator.png';

const Work = forwardRef((__, ref) => {
  const { t } = useTranslation();

  return (
    <section ref={ref} className='works'>
      <div className='content'>
        <header className='work-tittle'>
          <h2>{t('works.title')}</h2>
          <p>{t('works.description')}</p>
        </header>
        <section className='section-gallery'>
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
            appLink={'https://chordgenerator.site/#/create-song/tone'}
          />
          <WorkCard
            techList={['React', 'NodeJS', 'Redis', 'Sass', 'Dotnet', 'MongoDB']}
            projectName={t('works.cards.work-card-2.title')}
            projectDescription={t('works.cards.work-card-2.description')}
            imgSrc={gallerySrc}
            repo={'https://github.com/Delacrobix/MyPersonalGallery'}
            appLink={'https://delacrobix.github.io/MyPersonalGallery/#/home'}
          />
          <WorkCard
            techList={['React', 'NodeJS', 'MySQL', 'Sass', 'GraphQL', 'JS']}
            projectName={t('works.cards.work-card-3.title')}
            projectDescription={t('works.cards.work-card-3.description')}
            imgSrc={bookSrc}
            repo={'https://github.com/Delacrobix/contact-book-nodejs'}
            appLink={'https://delacrobix.github.io/contact-book-nodejs/#/home'}
          />
          {/* <WorkCard
            childData={childData}
            techList={['Pug', 'NodeJS', 'MongoDB', 'Sass', 'JS', 'CSS']}
            projectName={t('works.cards.work-card-4.title')}
            projectDescription={t('works.cards.work-card-4.description')}
            imgSrc={dicesSrc}
            repo={'https://github.com/Delacrobix/juego-dados'}
            appLink={'https://delx-dicesgame-ag7izwz66-delacrobix.vercel.app'}
          /> */}
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
        </section>
      </div>
    </section>
  );
});

export default Work;
