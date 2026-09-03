import { Card, CardBody } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// Toggle to false to hide the Observability Labs article count
export const SHOW_OBSERVABILITY_ARTICLE_COUNT = true;

export default function ObservabilityArticleCount({ count }) {
  const { t, i18n } = useTranslation();
  const formattedCount = new Intl.NumberFormat(i18n.language).format(count);

  return (
    <div className='w-full max-w-lg mx-auto mb-14'>
      <h3 className='font-comfortaa font-bold text-xl md:text-2xl text-center text-balance mb-7'>
        {t("observabilityStats.title")}
      </h3>

      <Card className='relative overflow-hidden border border-primary/40 bg-gradient-to-br from-content1 via-content1 to-primary/15 shadow-xl shadow-primary/15'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20'
        />
        <div
          aria-hidden='true'
          className='absolute -right-16 -top-20 h-52 w-52 rounded-full bg-primary/20 blur-3xl'
        />
        <div
          aria-hidden='true'
          className='absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl'
        />

        <CardBody className='relative z-10 flex flex-col items-center px-6 py-8 sm:px-8 sm:py-9'>
          <span className='text-center text-xs font-semibold uppercase tracking-[0.2em] text-default-500'>
            {t("observabilityStats.eyebrow")}
          </span>

          <div className='mt-4 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6'>
            <div className='relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-inner shadow-primary/20'>
              <div
                aria-hidden='true'
                className='absolute inset-2 rounded-xl border border-primary/10'
              />
              <FontAwesomeIcon
                icon={faEye}
                aria-hidden='true'
                className='relative text-primary text-2xl'
              />
            </div>

            <div className='flex items-center justify-center gap-3'>
              <strong className='font-comfortaa text-6xl font-bold leading-none tabular-nums text-primary'>
                {formattedCount}
              </strong>
              <span className='max-w-44 text-left text-base font-medium leading-snug text-default-600'>
                {t("observabilityStats.articles")}
              </span>
            </div>
          </div>

          <div className='mt-5 flex items-center justify-center gap-2 text-xs text-default-500'>
            <span
              aria-hidden='true'
              className='h-1.5 w-1.5 rounded-full bg-primary shadow-sm shadow-primary'
            />
            <span translate='no'>Elastic Observability Labs</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

ObservabilityArticleCount.propTypes = {
  count: PropTypes.number.isRequired,
};
