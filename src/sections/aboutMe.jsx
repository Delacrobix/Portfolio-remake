import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { SHOW_ELASTIC_RANK } from "../components/ElasticLeaderboard";

const stats = [
  { value: "4+", label: "Years coding" },
  { value: "SWE", label: "Software Engineer" },
  ...(SHOW_ELASTIC_RANK ? [{ value: "#1", label: "Search Labs rank", accent: "warning" }] : []),
  { value: "ES", label: "Elasticsearch expert" },
];

const AboutMe = forwardRef((__, ref) => {
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className='min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-24'>
      <div className='w-full max-w-5xl mx-auto'>
        {/* Role header */}
        <div className='mb-10'>
          <div className='pb-2 border-l-4 border-primary pl-6'>
            <h2 className='font-rubik font-bold text-2xl md:text-3xl'>
              Technical Writer
            </h2>
            <p className='font-rubik text-xl text-default-500'>
              &amp; Elastic Consultant
            </p>
            <p className='text-sm text-default-400 mt-2 flex items-center gap-2'>
              <FontAwesomeIcon icon={faLocationDot} className='text-primary' />
              Medellín, Colombia
            </p>
          </div>
        </div>

        {/* Description */}
        <p className='font-comfortaa text-lg text-default-700 dark:text-default-300 leading-relaxed max-w-3xl mb-14'>
          {t("about-me.description")}
        </p>

        {/* Stats strip */}
        <div className='grid grid-cols-2 md:grid-cols-4 border-t border-default-200 dark:border-default-800'>
          {stats.map(({ value, label, accent }) => (
            <div
              key={label}
              className='border-r last:border-r-0 border-default-200 dark:border-default-800 px-6 py-5'>
              <p
                className={`font-comfortaa font-bold text-3xl ${
                  accent === "warning" ? "text-warning" : "text-primary"
                }`}>
                {value}
              </p>
              <p className='text-xs text-default-500 mt-1'>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
