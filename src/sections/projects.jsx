import React, { forwardRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Projects = forwardRef((__, ref) => {
  const { t } = useTranslation();

  const projects = t("projects.list", { returnObjects: true });

  const getImpactIcon = (type) => {
    switch (type) {
      case "productivity":
        return <FontAwesomeIcon icon={faChartLine} className='text-success' />;
      case "users":
        return <FontAwesomeIcon icon={faUsers} className='text-primary' />;
      default:
        return <FontAwesomeIcon icon={faRocket} className='text-secondary' />;
    }
  };

  return (
    <section
      ref={ref}
      className='py-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center'>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon
            icon={faRocket}
            className='text-4xl text-secondary'
          />
          <h2 className='font-comfortaa font-bold text-4xl'>
            {t("projects.title")}
          </h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t("projects.description")}
        </p>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {Array.isArray(projects) &&
          projects.map((project) => (
            <Card
              key={uuidv4()}
              className='hover:shadow-2xl transition-all duration-300'
              isBlurred>
              <CardHeader className='flex-col items-start gap-3 pb-0'>
                <div className='w-full'>
                  <h3 className='font-bold text-2xl font-comfortaa mb-2'>
                    {project.name}
                  </h3>
                  <p className='text-default-500 text-sm'>{project.tagline}</p>
                </div>
              </CardHeader>

              <CardBody className='py-4 space-y-4'>
                <div className='space-y-3'>
                  <div>
                    <h4 className='font-semibold text-sm mb-2 text-default-700'>
                      💡 {t("projects.problemLabel")}
                    </h4>
                    <p className='text-sm text-default-600'>
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-sm mb-2 text-default-700'>
                      ✨ {t("projects.solutionLabel")}
                    </h4>
                    <p className='text-sm text-default-600'>
                      {project.solution}
                    </p>
                  </div>

                  {project.impact && (
                    <div className='bg-success-50 dark:bg-success-900/20 p-3 rounded-lg'>
                      <div className='flex items-start gap-2'>
                        <span className='text-lg'>
                          {getImpactIcon(project.impactType)}
                        </span>
                        <div>
                          <h4 className='font-semibold text-sm mb-1 text-success-700 dark:text-success-400'>
                            📈 {t("projects.impactLabel")}
                          </h4>
                          <p className='text-sm text-success-600 dark:text-success-300'>
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className='flex flex-wrap gap-2'>
                  {project.tech &&
                    project.tech.map((tech) => (
                      <Chip
                        key={uuidv4()}
                        size='sm'
                        variant='flat'
                        color='primary'>
                        {tech}
                      </Chip>
                    ))}
                </div>
              </CardBody>

              <CardFooter className='gap-3 pt-0'>
                {project.repo && (
                  <Button
                    as={Link}
                    to={project.repo}
                    target='_blank'
                    variant='bordered'
                    color='primary'
                    size='sm'
                    className='flex-1'>
                    {t("projects.codeButton")}
                  </Button>
                )}
                {project.demo && (
                  <Button
                    as={Link}
                    to={project.demo}
                    target='_blank'
                    variant='solid'
                    color='primary'
                    size='sm'
                    className='flex-1'>
                    {t("projects.demoButton")}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
});

export default Projects;
