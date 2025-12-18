import React, { forwardRef } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { svgTechsIcons } from "../components/svg/svgExports";

const Tools = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const tools = t("tools.list", { returnObjects: true });

  const getToolIcon = (svgKey, fallbackIcon) => {
    if (svgKey && svgTechsIcons[svgKey]) {
      return (
        <div className='w-16 h-16 flex items-center justify-center'>
          {svgTechsIcons[svgKey]}
        </div>
      );
    }
    return fallbackIcon;
  };

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

      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
          {Array.isArray(tools) &&
            tools.map((tool) => (
              <Card
                key={uuidv4()}
                className={
                  tool.url
                    ? "hover:scale-105 transition-transform duration-300"
                    : ""
                }
                isPressable={!!tool.url}
                isBlurred
                onPress={() => {
                  if (tool.url) {
                    window.open(tool.url, "_blank", "noopener,noreferrer");
                  }
                }}>
                <CardBody className='p-6 text-center flex flex-col items-center'>
                  <div className='mb-4 flex justify-center items-center'>
                    {getToolIcon(tool.svgKey, tool.icon)}
                  </div>
                  <h3 className='font-bold text-base font-comfortaa mb-1'>
                    {tool.name}
                  </h3>
                  <p className='text-xs text-default-600'>{tool.category}</p>
                </CardBody>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
});

export default Tools;
