import React, { forwardRef } from "react";
import { Card, CardBody, Chip, Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faMedal,
  faAward,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faMedal} className='text-slate-300 text-3xl' />
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

  const getChipColor = (position) => {
    switch (position) {
      case "1st":
        return "warning";
      case "2nd":
        return "default";
      case "3rd":
        return "warning";
      default:
        return "primary";
    }
  };

  const getChipClassName = (position) => {
    if (position === "2nd") {
      return "bg-slate-100 dark:bg-slate-300 text-slate-500 dark:text-slate-800";
    }
    if (position === "3rd") {
      return "bg-amber-200 dark:bg-amber-400 text-amber-700 dark:text-amber-900";
    }
    return "";
  };

  return (
    <section
      ref={ref}
      className='py-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center'>
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
            <Card key={uuidv4()} isBlurred>
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
                        {award.team && (
                          <p className='text-default-400 text-xs mt-1'>
                            {award.team}
                          </p>
                        )}
                      </div>
                      <Chip
                        color={getChipColor(award.position)}
                        variant='flat'
                        size='lg'
                        className={getChipClassName(award.position)}>
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

                    <p className='text-sm text-default-400 mb-3'>
                      {award.date}
                    </p>

                    {award.links && award.links.length > 0 && (
                      <div className='mt-4'>
                        <p className='text-sm font-semibold font-comfortaa mb-2 text-default-700'>
                          {t("awards.relatedLinksLabel")}:
                        </p>
                        <div className='flex flex-wrap gap-2'>
                          {award.links.map((link) => (
                            <Button
                              key={uuidv4()}
                              size='sm'
                              color='primary'
                              variant='flat'
                              endContent={
                                <FontAwesomeIcon
                                  icon={faExternalLinkAlt}
                                  className='text-xs'
                                />
                              }
                              onPress={() =>
                                window.open(
                                  link.url,
                                  "_blank",
                                  "noopener,noreferrer"
                                )
                              }>
                              {link.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
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
