import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Areas() {
  const { t } = useTranslation();
  const areas = t("areas.list", { returnObjects: true });

  return (
    <Section id='areas' tint>
      <div className='grid gap-6 wide:grid-cols-3 wide:gap-10'>
        {areas.map((area, index) => (
          <div key={area.title} id={`area-${index}`}>
            <h3 className='mb-1.5 text-[19px] leading-[1.3] font-bold'>{area.title}</h3>
            <p className='text-[17.5px] text-ink-2'>{area.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
