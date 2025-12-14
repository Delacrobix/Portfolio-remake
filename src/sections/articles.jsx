import React, { forwardRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Link,
  Image,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Articles = forwardRef((__, ref) => {
  const { t } = useTranslation();

  // This will come from translations or a data file
  const articles = t("articles.list", { returnObjects: true });

  return (
    <section
      ref={ref}
      className='py-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center'>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon
            icon={faNewspaper}
            className='text-4xl text-primary'
          />
          <h2 className='font-comfortaa font-bold text-4xl'>
            {t("articles.title")}
          </h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t("articles.description")}
        </p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.isArray(articles) &&
          articles.map((article) => (
            <Card
              key={uuidv4()}
              className='hover:scale-105 transition-transform duration-300'
              isPressable
              isBlurred>
              {/* Cover Image */}
              {article.coverImage && (
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  className='w-full object-cover h-48'
                  classNames={{
                    wrapper: "w-full",
                  }}
                />
              )}

              <CardHeader className='flex-col items-start gap-2 pb-0'>
                <div className='flex gap-2 flex-wrap'>
                  {article.tags &&
                    article.tags.map((tag) => (
                      <Chip
                        key={uuidv4()}
                        size='sm'
                        variant='flat'
                        color='primary'>
                        {tag}
                      </Chip>
                    ))}
                </div>
                <h3 className='font-bold text-xl font-comfortaa mt-2'>
                  {article.title}
                </h3>
              </CardHeader>

              <CardBody className='py-4'>
                <p className='text-default-600 line-clamp-3'>
                  {article.description}
                </p>
                <div className='flex gap-4 mt-4 text-sm text-default-500'>
                  <span className='flex items-center gap-1'>
                    <FontAwesomeIcon icon={faCalendar} className='text-xs' />
                    {article.date}
                  </span>
                  <span className='flex items-center gap-1'>
                    <FontAwesomeIcon icon={faClock} className='text-xs' />
                    {article.readTime}
                  </span>
                </div>
              </CardBody>

              <CardFooter className='pt-0'>
                <Button
                  as={Link}
                  href={article.link}
                  target='_blank'
                  color='primary'
                  variant='flat'
                  size='sm'
                  className='w-full'>
                  {t("articles.readButton")}
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
});

export default Articles;
