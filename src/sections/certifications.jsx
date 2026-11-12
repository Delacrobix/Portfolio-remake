import { useTranslation } from "react-i18next";
import ExternalLink, { TEXT_LINK } from "../components/ExternalLink";
import Section from "../components/Section";

/** Two tiers: professional certifications first, then courses and training. */
export default function Certifications() {
  const { t } = useTranslation();
  const main = t("certifications.main", { returnObjects: true });
  const courses = t("certifications.courses", { returnObjects: true });

  return (
    <Section id='certifications' tint>
      <div className='grid gap-6 md:grid-cols-2 print:grid-cols-2'>
        {main.map((cert, index) => (
          <article
            key={cert.name}
            id={`certification-${index}`}
            className='grid items-start gap-4 rounded-[14px] border border-rule bg-paper p-[22px] sm:grid-cols-[128px_1fr] sm:gap-5'>
            <img
              src={cert.thumbnail}
              alt=''
              loading='lazy'
              width='128'
              height='96'
              className='aspect-[4/3] w-32 rounded-md border border-rule bg-white object-contain dark:brightness-90'
            />
            <div className='min-w-0'>
              <h3 className='text-[22px] leading-tight font-extrabold tracking-[-0.01em]'>{cert.name}</h3>
              <p className='mt-1.5 text-[17px] text-ink-2'>{cert.meta}</p>
              <ExternalLink href={cert.link} className={`${TEXT_LINK} mt-3.5 inline-block text-[17px]`}>
                {t("certifications.view")}
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>

      <h3 className='mt-11 mb-[18px] text-[19px] leading-[1.3] font-bold'>{t("certifications.coursesTitle")}</h3>
      <ul className='border-t border-rule'>
        {courses.map((course, index) => (
          <li
            key={course.name}
            id={`course-${index}`}
            className='grid grid-cols-[72px_1fr] items-center gap-x-5 gap-y-1 border-b border-rule py-3.5 wide:grid-cols-[72px_1fr_220px_auto] print:py-2'>
            <img
              src={course.thumbnail}
              alt=''
              loading='lazy'
              width='72'
              height='51'
              className='row-span-3 w-[72px] rounded-[4px] border border-rule bg-white object-contain wide:row-span-1 dark:brightness-90'
            />
            <b className='font-bold'>{course.name}</b>
            <span className='col-start-2 text-ink-2 wide:col-start-auto'>{course.meta}</span>
            <ExternalLink href={course.link} className={`${TEXT_LINK} col-start-2 text-[16.5px] wide:col-start-auto`}>
              {t("certifications.viewCourse")}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
