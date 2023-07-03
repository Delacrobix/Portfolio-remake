import React, { useEffect, useState, useRef, forwardRef } from 'react';
import WorkCard from '../components/workCard';
import bingoSrc from '../assets/images/prev/bingo.png';
import gallerySrc from '../assets/images/prev/mygallery.png';
import bookSrc from '../assets/images/prev/contact-book.png';
import dicesSrc from '../assets/images/prev/juego-dados.png';

const Work = forwardRef((__, ref) => {
  const [imgs, setImgs] = useState([]);
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
          <h2>My work</h2>
          <p>Here is a part of my experience as software developer.</p>
        </header>
        <section className='section-gallery'>
          <WorkCard
            childData={childData}
            techList={['React', 'NodeJS', 'Redis', 'Sass', 'Dotnet', 'MongoDB']}
            projectName={'My personal gallery'}
            projectDescription={
              'Here is some ones of my best photos that I have taken'
            }
            imgSrc={gallerySrc}
            repo={'https://github.com/Delacrobix/MyPersonalGallery'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCard
            childData={childData}
            techList={['React', 'NodeJS', 'MySQL', 'Sass', 'GraphQL', 'JS']}
            projectName={'Contact book'}
            projectDescription={
              'This is a simple contact book, you can add, delete and edit contacts'
            }
            imgSrc={bookSrc}
            repo={'https://github.com/Delacrobix/ContactBook'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCard
            childData={childData}
            techList={['Pug', 'NodeJS', 'MongoDB', 'Sass', 'JS', 'CSS']}
            projectName={'Dices game'}
            projectDescription={'Blabal'}
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
            projectName={'Bingo'}
            projectDescription={
              'Bingo game, you can to play alone or with more players'
            }
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
