import React, { forwardRef } from 'react';
import { Card, CardBody, Chip } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const Experience = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const experiences = t('experience.list', { returnObjects: true });

  return (
    <section
      ref={ref}
      className='py-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center'>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon icon={faBriefcase} className='text-4xl text-primary' />
          <h2 className='font-comfortaa font-bold text-4xl'>{t('experience.title')}</h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t('experience.description')}
        </p>
      </header>

      <div className='max-w-4xl mx-auto w-full'>
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2'></div>

          <div className='space-y-12'>
            {Array.isArray(experiences) &&
              experiences.map((exp, index) => (
                <div
                  key={uuidv4()}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}>
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ${
                      index % 2 === 0 ? 'md:translate-x-0' : 'md:translate-x-0'
                    }`}></div>

                  {/* Content */}
                  <div className='md:w-1/2 ml-16 md:ml-0'>
                    <Card className='hover:shadow-xl transition-shadow' isBlurred>
                      <CardBody className='p-6'>
                        <div className='flex items-start gap-3 mb-4'>
                          <div className='flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center'>
                            <FontAwesomeIcon icon={faBriefcase} className='text-primary text-xl' />
                          </div>
                          <div className='flex-grow'>
                            <h3 className='font-bold text-xl font-comfortaa'>{exp.position}</h3>
                            <p className='text-primary font-semibold'>{exp.company}</p>
                          </div>
                        </div>

                        <div className='flex flex-wrap gap-3 mb-4 text-sm text-default-500'>
                          <span className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faCalendar} className='text-xs' />
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className='flex items-center gap-1'>
                              <FontAwesomeIcon icon={faMapMarkerAlt} className='text-xs' />
                              {exp.location}
                            </span>
                          )}
                        </div>

                        <p className='text-default-600 mb-4'>{exp.description}</p>

                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className='mb-4'>
                            <h4 className='font-semibold text-sm mb-2'>
                              {t('experience.achievementsLabel')}:
                            </h4>
                            <ul className='list-disc list-inside space-y-1 text-sm text-default-600'>
                              {exp.achievements.map((achievement) => (
                                <li key={uuidv4()}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.technologies && (
                          <div className='flex flex-wrap gap-2'>
                            {exp.technologies.map((tech) => (
                              <Chip key={uuidv4()} size='sm' variant='flat' color='primary'>
                                {tech}
                              </Chip>
                            ))}
                          </div>
                        )}
                      </CardBody>
                    </Card>
                  </div>

                  {/* Spacer for desktop */}
                  <div className='hidden md:block md:w-1/2'></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;

