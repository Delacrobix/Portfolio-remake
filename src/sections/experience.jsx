import { useTranslation } from "react-i18next";
import Entry, { BulletList, EntryTitle, TagList } from "../components/Entry";
import Section from "../components/Section";

/** `counts` fills the live figures quoted in the experience bullets. */
export default function Experience({ counts }) {
  const { t } = useTranslation();
  const jobs = t("experience.list", { returnObjects: true, ...counts });

  return (
    <Section id='experience'>
      {jobs.map((job, index) => (
        <Entry key={job.position} id={`experience-${index}`} aside={job.period}>
          <EntryTitle>{job.position}</EntryTitle>
          <p className='mt-0.5 text-ink-2'>{job.company}</p>
          {job.bullets && <BulletList items={job.bullets} />}
          {job.text && <p className='mt-3 max-w-[40em]'>{job.text}</p>}
          <TagList tags={job.tags} />
        </Entry>
      ))}
    </Section>
  );
}
