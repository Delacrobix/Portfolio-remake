import React, { forwardRef } from "react";
import { Card, CardBody, Button, Chip, Link, Divider } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faExternalLinkAlt,
  faCalendar,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Certifications = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const mainCertifications = t("certifications.main", { returnObjects: true });
  const secondaryCertifications = t("certifications.secondary", {
    returnObjects: true,
  });

  return (
    <section
      ref={ref}
      className='py-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center bg-gradient-to-b from-default-100 to-transparent'>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon
            icon={faCertificate}
            className='text-4xl text-success'
          />
          <h2 className='font-comfortaa font-bold text-4xl'>
            {t("certifications.title")}
          </h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t("certifications.description")}
        </p>
      </header>

      {/* Main Certifications */}
      <div className='max-w-6xl mx-auto w-full mb-12'>
        <div className='flex items-center gap-3 mb-6'>
          <FontAwesomeIcon icon={faStar} className='text-warning text-xl' />
          <h3 className='font-comfortaa font-bold text-2xl'>
            {t("certifications.mainTitle")}
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {Array.isArray(mainCertifications) &&
            mainCertifications.map((cert) => (
              <Card
                key={uuidv4()}
                className='hover:shadow-xl transition-all duration-300 border-2 border-success-200 dark:border-success-800'
                isBlurred>
                <CardBody className='p-6'>
                  <div className='flex gap-4 items-start'>
                    <div className='flex-shrink-0 w-20 h-20 bg-gradient-to-br from-success-100 to-success-200 dark:from-success-900/30 dark:to-success-800/30 rounded-xl flex items-center justify-center'>
                      <FontAwesomeIcon
                        icon={faCertificate}
                        className='text-success text-3xl'
                      />
                    </div>

                    <div className='flex-grow'>
                      <div className='flex items-start justify-between mb-2'>
                        <h3 className='font-bold text-xl font-comfortaa'>
                          {cert.name}
                        </h3>
                        <Chip
                          color='success'
                          variant='solid'
                          size='sm'
                          startContent={
                            <FontAwesomeIcon
                              icon={faStar}
                              className='text-xs'
                            />
                          }>
                          {t("certifications.featured")}
                        </Chip>
                      </div>

                      <p className='text-success-700 dark:text-success-400 font-semibold text-sm mb-2'>
                        {cert.issuer}
                      </p>

                      {cert.credentialId && (
                        <p className='text-xs text-default-400 mb-3 font-mono bg-default-100 dark:bg-default-900/30 px-2 py-1 rounded inline-block'>
                          ID: {cert.credentialId}
                        </p>
                      )}

                      <div className='flex items-center gap-2 mb-4'>
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className='text-xs text-default-400'
                        />
                        <span className='text-sm text-default-500'>
                          {cert.date}
                          {cert.expires &&
                            ` • ${t("certifications.expires")}: ${
                              cert.expires
                            }`}
                        </span>
                      </div>

                      {cert.skills && (
                        <div className='flex flex-wrap gap-2 mb-4'>
                          {cert.skills.map((skill) => (
                            <Chip
                              key={uuidv4()}
                              size='sm'
                              variant='flat'
                              color='success'>
                              {skill}
                            </Chip>
                          ))}
                        </div>
                      )}

                      {cert.link && (
                        <Button
                          as={Link}
                          href={cert.link}
                          target='_blank'
                          size='sm'
                          variant='solid'
                          color='success'
                          className='w-full'
                          endContent={
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              className='text-xs'
                            />
                          }>
                          {t("certifications.viewButton")}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
        </div>
      </div>

      {/* Divider */}
      <Divider className='max-w-6xl mx-auto mb-8' />

      {/* Secondary Certifications */}
      <div className='max-w-6xl mx-auto w-full'>
        <h3 className='font-comfortaa font-semibold text-xl mb-6 text-default-600'>
          {t("certifications.secondaryTitle")}
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {Array.isArray(secondaryCertifications) &&
            secondaryCertifications.map((cert) => (
              <Card
                key={uuidv4()}
                className='hover:shadow-md transition-shadow'
                isPressable
                isBlurred>
                <CardBody className='p-4'>
                  <div className='flex gap-3 items-start'>
                    <div className='flex-shrink-0 w-12 h-12 bg-default-100 dark:bg-default-900/30 rounded-lg flex items-center justify-center'>
                      <FontAwesomeIcon
                        icon={faCertificate}
                        className='text-default-600 text-lg'
                      />
                    </div>

                    <div className='flex-grow min-w-0'>
                      <h4 className='font-bold text-sm font-comfortaa mb-1 truncate'>
                        {cert.name}
                      </h4>
                      <p className='text-default-600 text-xs mb-2 truncate'>
                        {cert.issuer}
                      </p>

                      <p className='text-xs text-default-400 mb-2'>
                        {cert.date}
                      </p>

                      {cert.link && (
                        <Button
                          as={Link}
                          href={cert.link}
                          target='_blank'
                          size='sm'
                          variant='flat'
                          color='default'
                          className='w-full h-7 text-xs'>
                          {t("certifications.viewButton")}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
});

export default Certifications;
