import React, { useEffect, useState, useRef, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../components/workCard';
import bingoSrc from '../assets/images/prev/bingo.png';
import gallerySrc from '../assets/images/prev/mygallery.png';
import bookSrc from '../assets/images/prev/contact-book.png';
import dicesSrc from '../assets/images/prev/juego-dados.png';

const Work = forwardRef((__, ref) => {
  const [imgs, setImgs] = useState([]);
  const { t } = useTranslation();
  const workTitleRef = useRef(null);
  const aux = [];

  useEffect(() => {
    if (imgs.length != 0) {
      window.addEventListener('scroll', scrollAnimation);
    }
  }, [imgs]);

  function scrollAnimation() {
    const workTitle = workTitleRef.current;

    if (workTitle) {
      let workTittleHeight = workTitle.getBoundingClientRect().top;
      let lastImg;

      imgs.forEach((element) => {
        element.style.opacity = 0;
        lastImg = element;
      });

      let lastImgHeight = lastImg.getBoundingClientRect().top;

      if (screen.height / 2 > workTittleHeight && lastImgHeight > 0) {
        imgs.forEach((element) => {
          element.style.opacity = 1;
        });
      }
    }
  }

  function childData(data) {
    aux.push(data);
    setImgs(aux);
  }

  return (
    <section ref={ref} className='works'>
      <div className='content'>
        <header className='work-tittle' ref={workTitleRef}>
          <h2>{t('works.title')}</h2>
          <p>{t('works.description')}</p>
        </header>
        <section className='section-gallery'>
          <WorkCard
            childData={childData}
            techList={['React', 'NodeJS', 'Redis', 'Sass', 'Dotnet', 'MongoDB']}
            projectName={t('works.cards.work-card-1.title')}
            projectDescription={t('works.cards.work-card-1.description')}
            imgSrc={gallerySrc}
            repo={'https://github.com/Delacrobix/MyPersonalGallery'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCard
            childData={childData}
            techList={['React', 'NodeJS', 'MySQL', 'Sass', 'GraphQL', 'JS']}
            projectName={t('works.cards.work-card-2.title')}
            projectDescription={t('works.cards.work-card-2.description')}
            imgSrc={bookSrc}
            repo={'https://github.com/Delacrobix/ContactBook'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCard
            childData={childData}
            techList={['Pug', 'NodeJS', 'MongoDB', 'Sass', 'JS', 'CSS']}
            projectName={t('works.cards.work-card-3.title')}
            projectDescription={t('works.cards.work-card-3.description')}
            imgSrc={dicesSrc}
            repo={'https://github.com/Delacrobix/DicesGame'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCard
            childData={childData}
            techList={[
              'Dotnet',
              'JS',
              'Pug',
              'Sass',
              'MySQL',
              'NodeJS',
              'MongoDB',
            ]}
            projectName={t('works.cards.work-card-4.title')}
            projectDescription={t('works.cards.work-card-4.description')}
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
