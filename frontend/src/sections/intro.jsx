import React, { forwardRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import cv from "../assets/files/cvs/jeff-cv.pdf";
import profilePicture from "../assets/images/profile/me.jpg";
import { svgSocialIcons, svgIcons } from "../components/svg/svgExports";
import SwitchMode from "../components/switchMode";
import SwitchLanguage from "../components/switchLanguage";

const Intro = forwardRef(({ scrollTo }, ref) => {
  const { t } = useTranslation();

  function openPDF() {
    window.open(cv, "_blank");
  }

  return (
    <section ref={ref} className='intro'>
      <div className='content'>
        <div className='profile-picture flex justify-center items-center'>
          <div className='image-container flex justify-center mt-6'>
            <img
              className=' object-cover size-[50%] rounded-[50%]'
              src={profilePicture}
              alt=''
            />
          </div>
        </div>
        <header>
          <h2>Jeff</h2>
        </header>
        <p>{t("intro.welcome")}</p>
        <div className='social-media-container'>
          <div className='intro-icon'>
            <Link
              to='https://www.linkedin.com/in/jeffrey-rerin/'
              target='_blank'>
              {svgSocialIcons.linkedin}
            </Link>
            <span>LinkedIn</span>
          </div>
          <div className='intro-icon'>
            <Link to='https://github.com/Delacrobix' target='_blank'>
              {svgSocialIcons.github}
            </Link>
            <span>GitHub</span>
          </div>
          <div className='intro-icon'>
            <Link onClick={openPDF}>{svgIcons.cv}</Link>
            <span>CV</span>
          </div>
        </div>
        <footer>
          <Link
            onClick={() => scrollTo("work")}
            ref={ref}
            className='down-section-link'>
            <FontAwesomeIcon className='icon' icon={faCircleArrowDown} />
          </Link>
          <SwitchMode isMobile={true} />
          <SwitchLanguage isMobile={true} />
        </footer>
      </div>
    </section>
  );
});

Intro.propTypes = {
  scrollTo: PropTypes.func,
};

export default Intro;
