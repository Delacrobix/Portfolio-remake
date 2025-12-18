import React, { forwardRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link,
  Image,
  Pagination,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faUser, faPlay } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const VIDEOS_PER_PAGE = 3;

const Videos = forwardRef((__, ref) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const videos = t("videos.list", { returnObjects: true }) || [];

  // Calculate pagination
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const endIndex = startIndex + VIDEOS_PER_PAGE;
  const currentVideos = videos.slice(startIndex, endIndex);

  return (
    <section
      ref={ref}
      className='py-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center'>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon icon={faVideo} className='text-4xl text-danger' />
          <h2 className='font-comfortaa font-bold text-4xl'>
            {t("videos.title")}
          </h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t("videos.description")}
        </p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {Array.isArray(currentVideos) &&
          currentVideos.map((video) => (
            <Card
              key={uuidv4()}
              className='transition-shadow duration-300 relative'
              isBlurred>
              {/* Video Thumbnail */}
              {video.thumbnail && (
                <div className='relative'>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    className='w-full h-48 object-cover'
                    classNames={{
                      wrapper: "w-full !max-w-full",
                      img: "w-full h-full object-cover",
                    }}
                    radius='none'
                  />
                  {/* Play Overlay */}
                  <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/50'>
                    <div className='w-16 h-16 rounded-full bg-danger flex items-center justify-center shadow-lg'>
                      <FontAwesomeIcon
                        icon={faPlay}
                        className='text-white text-2xl ml-1'
                      />
                    </div>
                  </div>
                </div>
              )}

              <CardHeader className='flex-col items-start gap-2 pb-0'>
                <h3 className='font-bold text-xl font-comfortaa'>
                  {video.title}
                </h3>
              </CardHeader>

              <CardBody className='py-4'>
                <p className='text-default-600 line-clamp-3 mb-3'>
                  {video.description}
                </p>
                {video.authors && video.authors.length > 0 && (
                  <div className='flex items-center gap-2 text-sm text-default-500 mt-auto'>
                    <FontAwesomeIcon icon={faUser} className='text-xs' />
                    <span>{video.authors.join(", ")}</span>
                  </div>
                )}
              </CardBody>

              <CardFooter className='pt-0'>
                <Button
                  as={Link}
                  href={video.link}
                  target='_blank'
                  color='danger'
                  variant='flat'
                  size='sm'
                  className='w-full'
                  startContent={<FontAwesomeIcon icon={faPlay} />}>
                  {t("videos.watchButton")}
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      {totalPages > 1 && (
        <div className='flex justify-center mt-8'>
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={setCurrentPage}
            color='danger'
            showControls
            showShadow
          />
        </div>
      )}
    </section>
  );
});

export default Videos;
