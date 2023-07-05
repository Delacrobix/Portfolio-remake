import React, { forwardRef, useState } from 'react';
import { svgSocialIcons } from '../components/svg/svgExports';
import Copied from '../components/copied';
import { useTranslation } from 'react-i18next';

const ContactSection = forwardRef((__, ref) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState();

  const TELEGRAM = process.env.REACT_APP_TELEGRAM;
  const LINKEDIN = process.env.REACT_APP_LINKEDIN;
  const EMAIL = process.env.REACT_APP_EMAIL;

  function handleRedirect(link) {
    window.open(link, '_blank');
  }

  function handleCopy() {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((error) => {
        console.error('Error al copiar el texto: ', error);
      });
  }

  return (
    <section className='contact-section' ref={ref}>
      <div className='contact-section__container'>
        <header className='contact__header'>
          <h2>{t('contact.title')}</h2>
          <p>
            {t('contact.description')}{' '}
            <span role='img' aria-label='Cara sonriente'>
              &#x1F60A;
            </span>
          </p>
        </header>
        <div className='contact-icons-container'>
          <div className='icon-container '>
            <div className='telegram' onClick={() => handleRedirect(TELEGRAM)}>
              {svgSocialIcons.telegram}
              <label className='icon-container__label'>Telegram</label>
            </div>
          </div>
          <div className='icon-container'>
            <div className='linkedin' onClick={() => handleRedirect(LINKEDIN)}>
              {svgSocialIcons.linkedin}
              <label className='icon-container__label'>LinkedIn</label>
            </div>
          </div>
          <div className='icon-container '>
            <div className='email' onClick={handleCopy}>
              {svgSocialIcons.email}
              <label className='icon-container__label'>Email</label>
            </div>
            {copied && <Copied />}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
