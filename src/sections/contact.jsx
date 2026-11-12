import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonLink } from "../components/Button";
import Section from "../components/Section";
import { SITE } from "../config/site";
import { copyText } from "../lib/dom";

const FEEDBACK_MS = 4000;

export default function Contact() {
  const { t } = useTranslation();
  // null, "copied" or "failed"
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(null), FEEDBACK_MS);
    return () => clearTimeout(timer);
  }, [feedback]);

  async function copyEmail() {
    setFeedback((await copyText(SITE.email)) ? "copied" : "failed");
  }

  return (
    <Section id='contact' className='print:hidden'>
      <p className='max-w-[34em] text-xl'>{t("contact.text")}</p>
      <div className='mt-[30px] flex flex-wrap gap-3'>
        <Button variant='primary' onClick={copyEmail}>
          {feedback === "copied" ? t("contact.copied") : t("contact.copy")}
        </Button>
        <ButtonLink external href={SITE.linkedin}>
          LinkedIn
        </ButtonLink>
        <ButtonLink external href={SITE.github}>
          GitHub
        </ButtonLink>
      </div>
      <p role='status' className='mt-3 min-h-7 text-ink-2'>
        {feedback === "failed" && t("contact.failed", { email: SITE.email })}
      </p>
    </Section>
  );
}
