import { useState } from "react";
import { useTranslation } from "react-i18next";
import TopBar from "../components/TopBar";
import videos from "../data/videos.json";
import useLabsData from "../hooks/useLabsData";
import useSiteCommands from "../hooks/useSiteCommands";
import useSiteIndex from "../hooks/useSiteIndex";
import Areas from "../sections/areas";
import Articles from "../sections/articles";
import Awards from "../sections/awards";
import Certifications from "../sections/certifications";
import Contact from "../sections/contact";
import Experience from "../sections/experience";
import Footer from "../sections/footer";
import Intro from "../sections/intro";
import Projects from "../sections/projects";
import Videos from "../sections/videos";

export default function Portfolio() {
  const { t } = useTranslation();
  const { articles, views, topAuthors } = useLabsData();
  const [articleQuery, setArticleQuery] = useState("");
  const searchEntries = useSiteIndex(articles, videos);
  const commands = useSiteCommands(articles, videos);

  const searchCount = articles.filter((article) => article.lab === "search").length;
  const counts = {
    total: articles.length,
    search: searchCount,
    obs: articles.length - searchCount,
    videos: videos.length,
  };

  return (
    <>
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper'>
        {t("skip")}
      </a>
      <TopBar />
      <main id='main'>
        <Intro searchEntries={searchEntries} commands={commands} onFilterArticles={setArticleQuery} />
        <Areas />
        <Experience counts={counts} />
        <Articles
          articles={articles}
          views={views}
          topAuthors={topAuthors}
          query={articleQuery}
          onQueryChange={setArticleQuery}
        />
        <Awards />
        <Certifications />
        <Projects />
        <Videos videos={videos} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
