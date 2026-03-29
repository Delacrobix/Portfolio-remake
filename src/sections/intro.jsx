import { forwardRef } from "react";
import { Avatar, Chip, Link as NextUILink } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { SHOW_ELASTIC_RANK } from "../components/ElasticLeaderboard";
import { useTranslation } from "react-i18next";

import cv from "../assets/files/cvs/jeff-cv.pdf";
import profilePicture from "../assets/images/profile/me.jpg";
import bgImage from "../assets/images/backgrounds/10.jpg";
import { svgSocialIcons, svgIcons } from "../components/svg/svgExports";

function openPDF() {
  window.open(cv, "_blank");
}

const Intro = forwardRef(({ }, ref) => {
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className='intro font-comfortaa w-full h-full pt-16 pb-4 m-0 flex justify-center items-center bg-cover bg-fixed'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='text-[#dde6ed] flex flex-col items-center justify-center'>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center mt-6'>
            <Avatar
              src={profilePicture}
              className='w-48 h-48 text-large'
              isBordered
              color='primary'
            />
          </div>
        </div>
        <header>
          <h2 className='mt-4 mb-0 text-center text-[3.5rem] [text-shadow:0.15rem_0.15rem_0.6rem_rgba(50,36,100,0.9)]'>
            Jeff
          </h2>
        </header>
        <p className='font-extrabold text-[1.5rem] m-4 text-center [text-shadow:0.15rem_0.15rem_0.6rem_rgba(50,36,100,0.9)]'>
          {t("intro.welcome")}
        </p>
        {SHOW_ELASTIC_RANK && (
          <Chip
            startContent={
              <FontAwesomeIcon icon={faTrophy} className='text-warning' />
            }
            color='warning'
            variant='flat'
            className='mb-4 font-comfortaa backdrop-blur-sm'>
            {t("about-me.chip")}
          </Chip>
        )}
        <div className='flex items-center'>
          <div className='group flex flex-col items-center px-[0.6rem] hover:scale-105 transition-transform duration-200'>
            <NextUILink
              href='https://www.linkedin.com/in/jeffrey-rerin/'
              target='_blank'
              isExternal
              color='foreground'
              className='[&_svg]:h-12 [&_svg]:w-12 [&_svg]:cursor-pointer'>
              {svgSocialIcons.linkedin}
            </NextUILink>
            <span className='invisible opacity-0 text-[0.7rem] transition-opacity duration-300 group-hover:visible group-hover:opacity-100'>
              LinkedIn
            </span>
          </div>
          <div className='group flex flex-col items-center px-[0.6rem] hover:scale-105 transition-transform duration-200'>
            <NextUILink
              href='https://github.com/Delacrobix'
              target='_blank'
              isExternal
              color='foreground'
              className='[&_svg]:h-12 [&_svg]:w-12 [&_svg]:cursor-pointer'>
              {svgSocialIcons.github}
            </NextUILink>
            <span className='invisible opacity-0 text-[0.7rem] transition-opacity duration-300 group-hover:visible group-hover:opacity-100'>
              GitHub
            </span>
          </div>
          <div className='group flex flex-col items-center px-[0.6rem] hover:scale-105 transition-transform duration-200'>
            <button
              type='button'
              onClick={openPDF}
              className='bg-transparent border-none p-0 cursor-pointer [&_svg]:h-12 [&_svg]:w-12'>
              {svgIcons.cv}
            </button>
            <span className='invisible opacity-0 text-[0.7rem] transition-opacity duration-300 group-hover:visible group-hover:opacity-100'>
              CV
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Intro;
