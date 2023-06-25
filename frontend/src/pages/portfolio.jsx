import React from 'react';
import Intro from '../components/sections/intro';
import Header from '../components/sections/header';
import Footer from '../components/sections/footer';
import Two from '../components/sections/two';
import One from '../components/sections/one';
import Work from '../components/sections/work';
import Contact from '../components/sections/contact';

const Portfolio = () => {
  return (
    <>
      <Header />
      <Intro />
      <Work />
      <Two />
      <One />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
