import React, { useEffect, useState, useRef } from 'react';
import WorkCell from './workCell';
import bingoImg from '../assets/images/prev/bingo.png';
import galleryImg from '../assets/images/prev/mygallery.png';
import contactBookImg from '../assets/images/prev/contact-book.png';
import dicesGameImg from '../assets/images/prev/juego-dados.png';

const Work = () => {
  const [imgs, setImgs] = useState([]);
  const workTitleRef = useRef(null);
  let aux = [];

  useEffect(() => {
    // const imgs = document.querySelectorAll('.work-container');
    // const imgs_container = document.querySelector('.section-gallery');
    // const work_tittle = document.querySelector('#work-tittle');

    function scrollAnimation() {
      const workTitle = workTitleRef.current;

      let workTittleHeight = workTitle.getBoundingClientRect().top;
      let lastImg;

      imgs.forEach((element) => {
        element.style.opacity = 0;
        lastImg = element;
      });

      let last_imgHeight = lastImg.getBoundingClientRect().top;

      if (screen.height / 2 > workTittleHeight && last_imgHeight > 0) {
        imgs.forEach((element) => {
          element.style.opacity = 1;
        });
      }
    }

    window.addEventListener('scroll', scrollAnimation);
  }, []);

  function childData(data) {
    console.log('DATA: ', data);
    aux.push(data);
    console.log('AUX: ', aux);

    setImgs(aux);
    console.log('IMGS: ', imgs);
  }

  return (
    <section id='work' className='works'>
      <div className='content'>
        <header id='work-tittle' ref={workTitleRef}>
          <h2>My work</h2>
          <p>Here is a part of my experience as software developer.</p>
        </header>

        <section className='section-gallery'>
          <WorkCell
            childData={childData}
            projectName={'bingo'}
            projectDescription={
              'Bingo game, you can to play alone or with more players'
            }
            imgSrc={bingoImg}
            repo={'https://github.com/Delacrobix/Juego-virtual-Bingo-'}
            appLink={'https://auth-module.up.railway.app/login'}
          />
          <WorkCell
            childData={childData}
            projectName={'my personal gallery'}
            projectDescription={
              'Here is some ones of my best photos that I have taken'
            }
            imgSrc={galleryImg}
            repo={'https://github.com/Delacrobix/MyPersonalGallery'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCell
            childData={childData}
            projectName={'contact book'}
            projectDescription={
              'This is a simple contact book, you can add, delete and edit contacts'
            }
            imgSrc={contactBookImg}
            repo={'https://github.com/Delacrobix/ContactBook'}
            appLink={'https://delacrobix.github'}
          />
          <WorkCell
            childData={childData}
            projectName={'dices game'}
            projectDescription={'Blabal'}
            imgSrc={dicesGameImg}
            repo={'https://github.com/Delacrobix/DicesGame'}
            appLink={'https://delacrobix.github'}
          />
        </section>
      </div>
    </section>
  );
};

export default Work;
