import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Avatar, Button, Link as NextUILink } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import cv from "../assets/files/cvs/jeff-cv.pdf";
import profilePicture from "../assets/images/profile/me.jpg";
import { svgSocialIcons, svgIcons } from "../components/svg/svgExports";
import SwitchMode from "../components/switchMode";
import SwitchLanguage from "../components/switchLanguage";

function openPDF() {
  window.open(cv, "_blank");
}

const Intro = forwardRef(({ scrollTo }, ref) => {
  const { t } = useTranslation();

  return (
    <section ref={ref} className='intro'>
      <div className='content'>
        <div className='profile-picture flex justify-center items-center'>
          <div className='image-container flex justify-center mt-6'>
            <Avatar
              src={profilePicture}
              className='w-48 h-48 text-large'
              isBordered
              color='primary'
            />
          </div>
        </div>
        <header>
          <h2>Jeff</h2>
        </header>
        <p>{t("intro.welcome")}</p>
        <div className='social-media-container'>
          <div className='intro-icon'>
            <NextUILink
              href='https://www.linkedin.com/in/jeffrey-rerin/'
              target='_blank'
              isExternal
              color='foreground'>
              {svgSocialIcons.linkedin}
            </NextUILink>
            <span>LinkedIn</span>
          </div>
          <div className='intro-icon'>
            <NextUILink
              href='https://github.com/Delacrobix'
              target='_blank'
              isExternal
              color='foreground'>
              {svgSocialIcons.github}
            </NextUILink>
            <span>GitHub</span>
          </div>
          <div className='intro-icon'>
            <Button isIconOnly variant='light' onPress={openPDF}>
              {svgIcons.cv}
            </Button>
            <span>CV</span>
          </div>
        </div>
        <footer>
          <Link
            onClick={() => scrollTo("aboutMe")}
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

export default Intro;
