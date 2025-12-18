import React, { forwardRef, useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link,
  Image,
  Spinner,
  Pagination,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import articlesCache from "../data/articles-cache.json";

const ES_CONFIG = {
  url: process.env.REACT_APP_ES_URL || "",
  index: process.env.REACT_APP_ES_INDEX || "",
  apiKey: process.env.REACT_APP_ES_API_KEY || "",
};

const ARTICLES_PER_PAGE = 6;

const Articles = forwardRef((__, ref) => {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchArticles();
  }, [i18n.language]);

  // Calculate pagination
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, endIndex);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const url = `${ES_CONFIG.url}/${ES_CONFIG.index}/_search`;

      const query = {
        size: 50,
        from: 0,
        _source: [
          "title",
          "meta_description",
          "url",
          "meta_author",
          "meta_img",
        ],
        query: {
          bool: {
            filter: [
              {
                term: {
                  "meta_author.enum": "Jeffrey Rengifo",
                },
              },
            ],
          },
        },
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `ApiKey ${ES_CONFIG.apiKey}`,
        },
        body: JSON.stringify(query),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("ES Response Error:", errorText);
        throw new Error(
          `HTTP error! status: ${response.status} - ${errorText}`
        );
      }

      const data = await response.json();

      if (!data.hits || !data.hits.hits) {
        throw new Error("Invalid response format from Elasticsearch");
      }

      const fetchedArticles = data.hits.hits.map((hit) => ({
        title: hit._source.title,
        description: hit._source.meta_description || "",
        coverImage: hit._source.meta_img,
        link: hit._source.url || "#",
        authors: hit._source.meta_author?.enum
          ? [hit._source.meta_author.enum]
          : hit._source.meta_author || [],
      }));

      setArticles(fetchedArticles);
      setError(null);
    } catch (err) {
      console.error("Error fetching articles from Elasticsearch:", err);
      setError(err.message);
      setArticles(articlesCache[i18n.language] || []);
    } finally {
      setLoading(false);
    }
  };

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

      {loading && (
        <div className='flex justify-center items-center py-12'>
          <Spinner size='lg' color='primary' />
        </div>
      )}

      {error && (
        <div className='text-center py-6 text-warning'>
          <p className='text-sm'>Using cached articles</p>
        </div>
      )}

      {!loading && (
        <>
          <div className='max-w-7xl 2xl:max-w-[1800px] mx-auto w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 2xl:gap-6 mb-6'>
              {Array.isArray(currentArticles) &&
                currentArticles.map((article) => (
                  <Card
                    key={uuidv4()}
                    className='transition-shadow duration-300'
                    isBlurred>
                    {/* Cover Image */}
                    {article.coverImage && (
                      <div className='w-full h-40 2xl:h-56 bg-default-100 overflow-hidden'>
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          classNames={{
                            wrapper: "w-full h-full !max-w-full",
                            img: "w-full h-full object-cover",
                          }}
                          radius='none'
                        />
                      </div>
                    )}

                    <CardHeader className='flex-col items-start gap-1 pb-0 pt-3 2xl:pt-5 px-4 2xl:px-6'>
                      <h3 className='font-bold text-lg 2xl:text-2xl font-comfortaa line-clamp-2 leading-tight'>
                        {article.title}
                      </h3>
                    </CardHeader>

                    <CardBody className='py-2 2xl:py-4 px-4 2xl:px-6'>
                      <p className='text-default-600 text-sm 2xl:text-lg line-clamp-2 mb-2 leading-snug'>
                        {article.description}
                      </p>
                      {article.authors && article.authors.length > 0 && (
                        <div className='flex items-center gap-2 text-sm 2xl:text-lg text-default-500 mt-2'>
                          <FontAwesomeIcon
                            icon={faUser}
                            className='text-sm 2xl:text-lg'
                          />
                          <span className='text-sm 2xl:text-lg'>
                            {article.authors.join(", ")}
                          </span>
                        </div>
                      )}
                    </CardBody>

                    <CardFooter className='pt-0 pb-3 2xl:pb-5 px-4 2xl:px-6'>
                      <Button
                        as={Link}
                        href={article.link}
                        target='_blank'
                        color='primary'
                        variant='flat'
                        size='sm'
                        className='w-full text-sm 2xl:text-lg h-9 2xl:h-12 min-h-0'>
                        {t("articles.readButton")}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className='flex justify-center mt-0'>
              <Pagination
                total={totalPages}
                page={currentPage}
                onChange={setCurrentPage}
                color='primary'
                showControls
                showShadow
              />
            </div>
          )}
        </>
      )}
    </section>
  );
});

export default Articles;
