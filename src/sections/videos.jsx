import { useTranslation } from "react-i18next";
import ExternalLink from "../components/ExternalLink";
import Section from "../components/Section";

export default function Videos({ videos }) {
  const { t } = useTranslation();

  return (
    <Section id='videos' tint>
      <p className='mb-7 max-w-[40em] text-[19px] text-ink-2 print:mb-3'>{t("videos.intro", { count: videos.length })}</p>
      <div className='grid grid-cols-2 gap-x-[22px] gap-y-[26px] wide:grid-cols-4 print:gap-y-1'>
        {videos.map((video) => (
          <ExternalLink key={video.link} href={video.link} className='group block no-underline'>
            <img
              src={video.thumbnail}
              alt=''
              loading='lazy'
              width='320'
              height='180'
              className='aspect-video w-full rounded-[10px] bg-rule object-cover transition-opacity duration-150 group-hover:opacity-85 dark:brightness-90 print:hidden'
            />
            <span className='mt-2.5 block text-[16.5px] leading-[1.35] font-semibold decoration-2 group-hover:underline print:mt-0 print:font-medium'>
              {video.title}
            </span>
          </ExternalLink>
        ))}
      </div>
    </Section>
  );
}
