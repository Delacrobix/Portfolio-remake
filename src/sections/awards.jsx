import { useTranslation } from "react-i18next";
import ExternalLink, { TEXT_LINK } from "../components/ExternalLink";
import Section from "../components/Section";

export default function Awards() {
  const { t } = useTranslation();
  const awards = t("awards.list", { returnObjects: true });

  return (
    <Section id='awards'>
      {awards.map((award, index) => (
        <article
          key={award.event}
          id={`award-${index}`}
          className='grid gap-3 border-t border-rule py-[30px] first:border-t-0 first:pt-0 last:pb-0 wide:grid-cols-[150px_1fr] wide:gap-7 print:grid-cols-[150px_1fr] print:gap-7 print:py-4'>
          <p className='text-[17px] leading-tight font-semibold text-ink-2'>
            <b className='block text-[64px] leading-[0.95] font-extrabold tracking-[-0.03em] text-ink print:text-[40px]'>
              {award.rank}
            </b>
            {award.rankLabel}
          </p>
          <div className='min-w-0'>
            <h3 className='text-[28px] leading-tight font-extrabold tracking-[-0.02em]'>{award.event}</h3>
            <p className='mt-1 text-ink-2'>{award.meta}</p>
            <p className='mt-3 max-w-[38em]'>
              <b>{award.project}</b>, {award.description}
            </p>
            <p className='mt-3.5 flex flex-wrap gap-x-[22px] gap-y-2 text-[17px]'>
              {award.links.map((link) => (
                <ExternalLink key={link.url} href={link.url} className={TEXT_LINK}>
                  {link.label}
                </ExternalLink>
              ))}
            </p>
          </div>
        </article>
      ))}
    </Section>
  );
}
