import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

const WorkCard = forwardRef(
  (
    { imgSrc, projectName, projectDescription, repo, appLink, techList },
    ref
  ) => {
    const { t } = useTranslation();

    return (
      <figure className='work-cards-container flex items-center justify-center my-2 mx-0'>
        <div className='img-layer'>
          <img className='img-layer-img' src={imgSrc} alt='' />
        </div>
        <Card className='layer' ref={ref} isBlurred>
          <CardHeader className='flex-col items-start'>
            <h3 className='text-xl font-bold'>{projectName}</h3>
          </CardHeader>
          <CardBody>
            <p className='text-sm'>{projectDescription}</p>
            <div className='techs mt-4'>
              <div className='flex flex-wrap gap-2'>
                {techList &&
                  techList.map((tech) => (
                    <Chip
                      key={uuidv4()}
                      size='sm'
                      variant='flat'
                      color='primary'>
                      {tech}
                    </Chip>
                  ))}
              </div>
            </div>
          </CardBody>
          <CardFooter className='flex justify-center gap-4'>
            <Button
              as={Link}
              to={repo}
              target='_blank'
              color='primary'
              variant='bordered'
              size='md'>
              {t("works.buttons.button-1")}
            </Button>
            <Button
              as={Link}
              to={appLink}
              target='_blank'
              color='primary'
              variant='solid'
              size='md'>
              {t("works.buttons.button-2")}
            </Button>
          </CardFooter>
        </Card>
      </figure>
    );
  }
);

WorkCard.propTypes = {
  imgSrc: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  repo: PropTypes.string,
  appLink: PropTypes.string,
  techList: PropTypes.array,
};

export default WorkCard;
