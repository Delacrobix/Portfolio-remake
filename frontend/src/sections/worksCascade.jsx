import React from 'react';
import WorkDescription from '../components/workDescription';
import { useTranslation } from 'react-i18next';

import bingoSrc from '../assets/images/prev/bingo.png';
import chordSrc from '../assets/images/prev/chord-generator.png';
import bookSrc from '../assets/images/prev/contact-book.png';
import gallerySrc from '../assets/images/prev/mygallery.png';

function WorksCascadeComponent(_, ref) {
  const { t } = useTranslation();

  return (
    <section className='work-cascade' ref={ref}>
      <WorkDescription
        projectTechs={[
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
        imgOnRight={false}
      />
      <WorkDescription
        projectTechs={[
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
        imgOnRight={true}
      />
      <WorkDescription
        projectTechs={['React', 'NodeJS', 'Redis', 'Sass', 'Dotnet', 'MongoDB']}
        projectName={t('works.cards.work-card-2.title')}
        projectDescription={t('works.cards.work-card-2.description')}
        imgSrc={gallerySrc}
        repo={'https://github.com/Delacrobix/MyPersonalGallery'}
        appLink={'https://delacrobix.github.io/MyPersonalGallery/#/home'}
        imgOnRight={false}
      />
      <WorkDescription
        projectTechs={['React', 'NodeJS', 'MySQL', 'Sass', 'GraphQL', 'JS']}
        projectName={t('works.cards.work-card-3.title')}
        projectDescription={t('works.cards.work-card-3.description')}
        imgSrc={bookSrc}
        repo={'https://github.com/Delacrobix/contact-book-nodejs'}
        appLink={'https://delacrobix.github.io/contact-book-nodejs/#/home'}
        imgOnRight={true}
      />
    </section>
  );
}

const WorksCascade = React.forwardRef(WorksCascadeComponent);

export default WorksCascade;
