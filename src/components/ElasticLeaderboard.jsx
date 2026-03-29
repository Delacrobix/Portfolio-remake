import { useState, useEffect } from "react";
import { Card, CardBody, Chip, Spinner, Avatar } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import profilePicture from "../assets/images/profile/me.jpg";

const API_URL = import.meta.env.VITE_ARTICLES_API_URL || "";
const MY_AUTHOR = "Jeffrey Rengifo";

// Toggle to false to hide the entire ranking feature
export const SHOW_ELASTIC_RANK = true;

// Podium display order: left = 2nd, center = 1st, right = 3rd
const PODIUM_SLOTS = [
  { dataIndex: 1, rank: 2, medal: "🥈", platformH: "h-10" },
  { dataIndex: 0, rank: 1, medal: "🥇", platformH: "h-16" },
  { dataIndex: 2, rank: 3, medal: "🥉", platformH: "h-6" },
];

const PLATFORM_STYLES = {
  1: "bg-[#3d2e00] border-t-2 border-[#f5b800]",
  2: "bg-[#1e2535] border-t-2 border-[#8fa8c0]",
  3: "bg-[#2a1a06] border-t-2 border-[#a0622a]",
};

export default function ElasticLeaderboard() {
  const { t } = useTranslation();
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopAuthors() {
      try {
        const res = await fetch(`${API_URL}/top-authors`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setAuthors(data.authors?.slice(0, 3) ?? []);
      } catch {
        // Silently fail — leaderboard simply won't render
      } finally {
        setLoading(false);
      }
    }
    fetchTopAuthors();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center py-8'>
        <Spinner size='md' color='warning' />
      </div>
    );
  }

  if (authors.length < 3) return null;

  return (
    <div className='max-w-2xl mx-auto mb-14'>
      <div className='flex items-center justify-center gap-2 mb-8'>
        <FontAwesomeIcon icon={faTrophy} className='text-warning text-xl' />
        <h3 className='font-comfortaa font-bold text-xl'>
          {t("leaderboard.title")}
        </h3>
      </div>

      <div className='flex items-end justify-center gap-2 md:gap-6'>
        {PODIUM_SLOTS.map(({ dataIndex, rank, medal, platformH }) => {
          const author = authors[dataIndex];
          if (!author) return null;
          const isMe = author.author === MY_AUTHOR;

          return (
            <div key={rank} className='flex flex-col items-center w-28 md:w-40'>
              {/* Author card */}
              <Card
                className={`w-full mb-0 transition-all duration-300 ${
                  isMe
                    ? "border-2 border-primary shadow-lg shadow-primary/25 scale-105"
                    : "border border-default-200 dark:border-default-800"
                }`}>
                <CardBody className='flex flex-col items-center py-4 px-2 gap-2'>
                  <span className='text-2xl'>{medal}</span>
                  {isMe ? (
                    <Avatar
                      src={profilePicture}
                      className='w-10 h-10'
                      isBordered
                      color='primary'
                    />
                  ) : (
                    <div className='w-10 h-10 rounded-full bg-default-100 dark:bg-default-800 flex items-center justify-center'>
                      <FontAwesomeIcon
                        icon={faUser}
                        className='text-default-400'
                      />
                    </div>
                  )}
                  <p
                    className={`font-comfortaa font-semibold text-xs text-center leading-tight ${
                      isMe ? "text-primary" : "text-default-600"
                    }`}>
                    {author.author}
                  </p>
                  <Chip
                    size='sm'
                    color={isMe ? "primary" : "default"}
                    variant='flat'>
                    {author.count} {t("leaderboard.articles")}
                  </Chip>
                </CardBody>
              </Card>

              {/* Podium platform */}
              <div
                className={`w-full ${platformH} rounded-t-md ${PLATFORM_STYLES[rank]} flex items-center justify-center`}>
                <span className='font-bold text-default-500'>{rank}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
