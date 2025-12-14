import React, { forwardRef } from "react";
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faMedal, faAward } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Awards = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const awards = t("awards.list", { returnObjects: true });

  const getAwardIcon = (position) => {
    switch (position) {
      case "1st":
        return (
          <FontAwesomeIcon
            icon={faTrophy}
            className='text-yellow-500 text-3xl'
          />
        );
      case "2nd":
        return (
          <FontAwesomeIcon icon={faMedal} className='text-gray-400 text-3xl' />
        );
      case "3rd":
        return (
          <FontAwesomeIcon icon={faMedal} className='text-amber-700 text-3xl' />
        );
      default:
        return (
          <FontAwesomeIcon icon={faAward} className='text-primary text-3xl' />
        );
    }
  };

  return (
    <section
      ref={ref}
      className='py-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center bg-gradient-to-b from-transparent to-default-100'>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon icon={faTrophy} className='text-4xl text-warning' />
          <h2 className='font-comfortaa font-bold text-4xl'>
            {t("awards.title")}
          </h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t("awards.description")}
        </p>
      </header>

      <div className='max-w-4xl mx-auto w-full space-y-6'>
        {Array.isArray(awards) &&
          awards.map((award) => (
            <Card
              key={uuidv4()}
              className='hover:shadow-lg transition-shadow duration-300'
              isBlurred>
              <CardBody className='p-6'>
                <div className='flex gap-6 items-start'>
                  <div className='flex-shrink-0'>
                    {getAwardIcon(award.position)}
                  </div>

                  <div className='flex-grow'>
                    <div className='flex justify-between items-start mb-3 flex-wrap gap-2'>
                      <div>
                        <h3 className='font-bold text-xl font-comfortaa mb-1'>
                          {award.event}
                        </h3>
                        <p className='text-default-500 text-sm'>
                          {award.organizer}
                        </p>
                      </div>
                      <Chip color='warning' variant='flat' size='lg'>
                        {award.position} {t("awards.place")}
                      </Chip>
                    </div>

                    <p className='text-default-600 mb-4'>{award.description}</p>

                    <div className='flex flex-wrap gap-2 mb-3'>
                      {award.technologies &&
                        award.technologies.map((tech) => (
                          <Chip key={uuidv4()} size='sm' variant='bordered'>
                            {tech}
                          </Chip>
                        ))}
                    </div>

                    <p className='text-sm text-default-400'>{award.date}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
      </div>
    </section>
  );
});

export default Awards;
