import React from 'react';
import { useTranslation } from 'react-i18next';

const Copied = () => {
  const { t } = useTranslation();

  return (
    <div className='copied'>
      <p>{t('contact.copied')}</p>
    </div>
  );
};

export default Copied;
