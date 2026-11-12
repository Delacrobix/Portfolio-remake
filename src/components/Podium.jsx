import { useTranslation } from "react-i18next";
import profilePicture from "../assets/images/profile/me.jpg";
import { SITE } from "../config/site";

// Visual order of a podium: second place, first place, third place.
const SLOTS = [1, 0, 2];
const TALLEST_BAR_PX = 150;

/** The three authors with the most articles on Elastic Search Labs. */
export default function Podium({ authors }) {
  const { t } = useTranslation();
  if (authors.length < 3) return null;
  const highest = authors[0].count;

  return (
    <figure className='mb-[52px] rounded-[14px] border border-rule bg-paper px-5 pt-[26px] wide:px-[30px] print:hidden'>
      <figcaption className='text-[19px] leading-[1.3] font-bold'>{t("articles.podiumTitle")}</figcaption>
      <ol className='mx-auto mt-[22px] grid max-w-[640px] grid-cols-3 items-end gap-2.5 wide:gap-[18px]'>
        {SLOTS.map((slot) => {
          const { author, count } = authors[slot];
          const isMe = author === SITE.name;
          return (
            <li key={author} className='text-center'>
              {isMe && (
                <img
                  src={profilePicture}
                  alt=''
                  width='64'
                  height='64'
                  className='mx-auto mb-2.5 size-16 rounded-full border-[3px] border-brand object-cover dark:brightness-90'
                />
              )}
              <span className={`block text-[17.5px] leading-tight font-bold ${isMe ? "text-brand" : ""}`}>
                {author}
              </span>
              <span className='mt-0.5 mb-3 block text-base text-ink-2'>
                {t("articles.authorCount", { count })}
              </span>
              <div
                style={{ height: Math.round((count / highest) * TALLEST_BAR_PX) }}
                className={`grid place-items-start justify-center rounded-t-lg pt-3 text-3xl font-extrabold ${
                  isMe ? "bg-brand text-paper" : "bg-rule text-ink-2"
                }`}>
                {slot + 1}
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
