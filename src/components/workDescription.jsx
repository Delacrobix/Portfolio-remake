import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Button, Chip, Card, CardBody } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

WorkDescription.propTypes = {
  imgSrc: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectTechs: PropTypes.array,
  repo: PropTypes.string,
  appLink: PropTypes.string,
  imgOnRight: PropTypes.bool,
};

export default function WorkDescription(props) {
  const { t } = useTranslation();
  const {
    imgSrc,
    projectName,
    projectDescription,
    projectTechs,
    repo,
    appLink,
    imgOnRight,
  } = props;

  const imgElement = (
    <figure
      className='flex items-center work-cards-container w-[55%]'
      key={uuidv4()}>
      <Card className='w-full' isBlurred>
        <CardBody className='p-0'>
          <img
            alt='project-img'
            className={`img-layer-img w-full object-cover ${
              imgOnRight ? "rounded-l-md" : "rounded-r-md"
            }`}
            src={imgSrc}
          />
        </CardBody>
      </Card>
    </figure>
  );

  const descriptionElement = (
    <div
      className={`work-description font-comfortaa w-[45%] px-10 text-lg`}
      key={uuidv4()}>
      <div className=''>
        <h2 className={" uppercase font-bold text-3xl py-4"}>{projectName}</h2>
        <p className={``}>{projectDescription}</p>
      </div>

      <div className='pt-4'>
        <h4 className=' text-xs mb-3'>Built with: </h4>
        <div className='flex flex-wrap gap-2'>
          {projectTechs &&
            projectTechs.map((tech) => (
              <Chip key={uuidv4()} size='md' variant='flat' color='primary'>
                {tech}
              </Chip>
            ))}
        </div>
      </div>

      <div className={`w-full flex justify-center gap-4 mt-6 lg:gap-10 z-100`}>
        <Button
          as={Link}
          to={repo}
          target='_blank'
          color='primary'
          variant='bordered'
          size='lg'>
          {t("works.buttons.button-1")}
        </Button>
        <Button
          as={Link}
          to={appLink}
          target='_blank'
          color='primary'
          variant='solid'
          size='lg'>
          {t("works.buttons.button-2")}
        </Button>
      </div>
    </div>
  );

  return (
    <div className=' flex items-center py-16 h-[100%] '>
      {imgOnRight
        ? [descriptionElement, imgElement]
        : [imgElement, descriptionElement]}
    </div>
  );
}
