import React from 'react';
import Intro from '../components/intro';
import Header from '../components/header';
import Footer from '../components/footer';
import Two from '../components/two';
import One from '../components/one';
import Work from '../components/work';
import Contact from '../components/contact';

const Portfolio = () => {
  return (
    <>
      <Header />
      <Intro />
      <Two />
      <One />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
