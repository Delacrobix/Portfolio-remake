import { useTranslation } from "react-i18next";

export const WRAP = "mx-auto w-full max-w-[1200px] px-[22px] wide:px-10";

/** A page section: its title in a left rail, its content on the right. */
export default function Section({ id, tint = false, className = "", children }) {
  const { t } = useTranslation();
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={`border-t border-rule ${tint ? "bg-wash" : ""} ${className}`}>
      <div className={`${WRAP} grid gap-5 pt-11 pb-[52px] wide:grid-cols-[240px_1fr] wide:gap-14 wide:pt-16 wide:pb-[72px] print:grid-cols-[190px_1fr] print:gap-10 print:pt-7 print:pb-8`}>
        <h2
          id={titleId}
          className='self-start text-3xl leading-tight font-extrabold tracking-[-0.02em] wide:sticky wide:top-[104px] print:static print:text-2xl'>
          {t(`nav.${id}`)}
        </h2>
        <div className='min-w-0'>{children}</div>
      </div>
    </section>
  );
}
