import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';
import React, { useEffect, useState } from 'react';
import bingoSrc from '../../assets/images/prev/bingo.png';
import dicesSrc from '../../assets/images/prev/juego-dados.png';
import bookSrc from '../../assets/images/prev/contact-book.png';
import gallerySrc from '../../assets/images/prev/mygallery.png';

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

const WorkCards = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.slow,
  });

  const slides = [
    {
      key: uuidv4(),
      content: <img src={bingoSrc} alt='2' />,
    },
    {
      key: uuidv4(),
      content: <img src={dicesSrc} alt='3' />,
    },
    {
      key: uuidv4(),
      content: <img src={bookSrc} alt='4' />,
    },
    {
      key: uuidv4(),
      content: <img src={gallerySrc} alt='5' />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  // const onChangeInput = (e) => {
  //   setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0,
  //   });
  // };

  const handleTouchStart = (evt) => {
    if (!state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setState({
      ...state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    });
  };

  const handleTouchMove = (evt) => {
    if (!state.enableSwipe || (!state.xDown && !state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = state.xDown - xUp;
    let yDiff = state.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setState({
          goToSlide: state.goToSlide + 1,
          xDown: null,
          yDown: null,
        });
      } else {
        /* right swipe */
        setState({
          goToSlide: state.goToSlide - 1,
          xDown: null,
          yDown: null,
        });
      }
    }
  };

  return (
    <div
      style={{ width: '80%', height: '500px', margin: '0 auto' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      {/* <div
        style={{
          margin: '0 auto',
          marginTop: '2rem',
          width: '50%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <label>Go to slide: </label>
          <input name='goToSlide' onChange={onChangeInput} />
        </div>
        <div>
          <label>Offset Radius: </label>
          <input name='offsetRadius' onChange={onChangeInput} />
        </div>
        <div>
          <label>Show navigation: </label>
          <input
            type='checkbox'
            checked={state.showNavigation}
            name='showNavigation'
            onChange={(e) => {
              setState({ showNavigation: e.target.checked });
            }}
          />
        </div>
        <div>
          <label>Enable swipe: </label>
          <input
            type='checkbox'
            checked={state.enableSwipe}
            name='enableSwipe'
            onChange={(e) => {
              setState({ enableSwipe: e.target.checked });
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setState({ config: config.gentle });
            }}
            disabled={state.config === config.gentle}
          >
            Gentle Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setState({ config: config.slow });
            }}
            disabled={state.config === config.slow}
          >
            Slow Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setState({ config: config.wobbly });
            }}
            disabled={state.config === config.wobbly}
          >
            Wobbly Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setState({ config: config.stiff });
            }}
            disabled={state.config === config.stiff}
          >
            Stiff Transition
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default WorkCards;
