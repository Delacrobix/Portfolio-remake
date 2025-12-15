import React, { forwardRef } from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Tools = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const tools = t("tools.list", { returnObjects: true });

  return (
    <section ref={ref} className='py-16 px-6 md:px-12 lg:px-24'>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon
            icon={faToolbox}
            className='text-4xl text-secondary'
          />
          <h2 className='font-comfortaa font-bold text-4xl'>
            {t("tools.title")}
          </h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t("tools.description")}
        </p>
      </header>

      <div className='max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
          {Array.isArray(tools) &&
            tools.map((tool, index) => (
              <Card
                key={uuidv4()}
                className='hover:scale-105 transition-transform duration-300'
                isPressable
                isBlurred>
                <CardBody className='p-6 text-center'>
                  <div className='mb-4 text-5xl flex justify-center items-center h-20'>
                    {tool.icon}
                  </div>
                  <h3 className='font-bold text-lg font-comfortaa mb-2'>
                    {tool.name}
                  </h3>
                  <p className='text-sm text-default-600 mb-3'>
                    {tool.category}
                  </p>
                  <Chip
                    size='sm'
                    variant='flat'
                    color='secondary'
                    className='mx-auto'>
                    #{index + 1}
                  </Chip>
                </CardBody>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
});

export default Tools;
