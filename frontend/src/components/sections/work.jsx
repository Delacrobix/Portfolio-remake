import React, { useEffect, useState, useRef, forwardRef } from 'react';
import WorkCard from '../workCard';
import bingoImg from '../../assets/images/prev/bingo.png';
import galleryImg from '../../assets/images/prev/mygallery.png';
import contactBookImg from '../../assets/images/prev/contact-book.png';
import dicesGameImg from '../../assets/images/prev/juego-dados.png';

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
            techs={['React', 'NodeJS', 'MongoDB']}
            childData={childData}
            projectName={'Bingo'}
            projectDescription={
              'Bingo game, you can to play alone or with more players'
            }
            imgSrc={bingoImg}
            repo={'https://github.com/Delacrobix/Juego-virtual-Bingo-'}
            appLink={'https://auth-module.up.railway.app/login'}
          />
          <WorkCard
            techs={['React', 'NodeJS', 'MongoDB']}
            childData={childData}
            projectName={'My personal gallery'}
            projectDescription={
              'Here is some ones of my best photos that I have taken'
            }
            imgSrc={galleryImg}
            repo={'https://github.com/Delacrobix/MyPersonalGallery'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCard
            techs={['React', 'NodeJS', 'MongoDB']}
            childData={childData}
            projectName={'Contact book'}
            projectDescription={
              'This is a simple contact book, you can add, delete and edit contacts'
            }
            imgSrc={contactBookImg}
            repo={'https://github.com/Delacrobix/ContactBook'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCard
            techs={['React', 'NodeJS', 'MongoDB']}
            childData={childData}
            projectName={'Dices game'}
            projectDescription={'Blabal'}
            imgSrc={dicesGameImg}
            repo={'https://github.com/Delacrobix/DicesGame'}
            appLink={'https://delacrobix.github'}
          />
        </section>
      </div>
    </section>
  );
});

export default Work;
