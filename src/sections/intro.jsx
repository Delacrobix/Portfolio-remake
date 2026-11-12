import { Trans, useTranslation } from "react-i18next";
import profilePicture from "../assets/images/profile/me.jpg";
import { ButtonLink } from "../components/Button";
import { TEXT_LINK } from "../components/ExternalLink";
import { WRAP } from "../components/Section";
import SiteSearch from "../components/SiteSearch";
import { DownloadIcon } from "../components/icons";
import { resumeUrl } from "../config/resume";
import { SITE } from "../config/site";

function Portrait({ className }) {
  const { t } = useTranslation();
  return (
    <div className={`flex-none overflow-hidden rounded-[14px] bg-photo-tile ${className}`}>
      {/* The photo has a white background: multiply lets the tile colour show through it. */}
      <img
        src={profilePicture}
        alt={t("intro.photoAlt")}
        width='220'
        height='220'
        className='size-full object-cover mix-blend-multiply'
      />
    </div>
  );
}

// "https://www.example.com/path/" -> "example.com/path"
const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const sectionLink = (id) => <a href={`#${id}`} className={`${TEXT_LINK} text-ink`} />;

export default function Intro({ searchEntries, commands, onFilterArticles }) {
  const { t, i18n } = useTranslation();

  return (
    <section
      id='top'
      className={`${WRAP} grid gap-8 pt-7 pb-12 wide:grid-cols-[1fr_220px] wide:gap-16 wide:pt-[76px] wide:pb-[72px] print:grid-cols-[1fr_150px] print:pt-0 print:pb-8`}>
      <div className='min-w-0'>
        <div className='flex items-center gap-4'>
          <Portrait className='size-[76px] wide:hidden print:hidden' />
          <h1 className='text-[clamp(2.5rem,6vw,4.75rem)] leading-none font-extrabold tracking-[-0.03em]'>
            {SITE.name}
          </h1>
        </div>
        <p className='mt-[18px] text-2xl leading-[1.35] font-medium text-balance'>{t("intro.role")}</p>
        <p className='mt-[18px] max-w-[34em] text-xl text-ink-2'>
          <Trans
            i18nKey='intro.lead'
            components={{
              articles: sectionLink("articles"),
              videos: sectionLink("videos"),
              projects: sectionLink("projects"),
            }}
          />
        </p>

        <div className='mt-[26px] flex flex-wrap gap-2 wide:mt-[30px] wide:gap-3 print:hidden'>
          <ButtonLink variant='primary' external href={resumeUrl(i18n.language)} className='max-wide:px-3.5'>
            <DownloadIcon className='hidden size-[17px] wide:block' />
            <span className='wide:hidden'>{t("intro.cvShort")}</span>
            <span className='hidden wide:inline'>{t("intro.cv")}</span>
          </ButtonLink>
          <ButtonLink external href={SITE.linkedin} className='max-wide:px-3.5'>
            LinkedIn
          </ButtonLink>
          <ButtonLink external href={SITE.github} className='max-wide:px-3.5'>
            GitHub
          </ButtonLink>
        </div>

        <div className='print:hidden'>
          <SiteSearch entries={searchEntries} commands={commands} onFilterArticles={onFilterArticles} />
        </div>

        {/* On paper the buttons become plain contact details. */}
        <p className='mt-4 hidden text-[17px] print:block'>
          {[SITE.email, ...[SITE.url, SITE.linkedin, SITE.github].map(displayUrl)].join("  ·  ")}
        </p>
      </div>

      <Portrait className='hidden size-[220px] wide:block print:block print:size-[150px]' />
    </section>
  );
}
