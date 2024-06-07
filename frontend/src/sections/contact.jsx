import React from "react";
import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

import { svgSocialIcons } from "../components/svg/svgExports";
import useToast from "../hooks/useToast";

function ContactComponent(__, ref) {
  const { t } = useTranslation();
  const toast = useToast();

  const TELEGRAM = process.env.REACT_APP_TELEGRAM;
  const LINKEDIN = process.env.REACT_APP_LINKEDIN;
  const EMAIL = process.env.REACT_APP_EMAIL;

  function handleCopy(content) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        switch (content) {
          case TELEGRAM:
            toast("Telegram copied to the clipboard", "success");
            break;
          case LINKEDIN:
            toast("LinkedIn copied to the clipboard", "success");
            break;
          case EMAIL:
            toast("Email copied to the clipboard", "success");
            break;
          default:
            break;
        }
      })
      .catch((error) => {
        toast("Error al copiar el texto: ", "error");
        console.error("Error al copiar el texto: ", error);
      });
  }

  return (
    <section
      className='flex flex-col justify-center items-center h-[80vh]'
      ref={ref}>
      <header className='font-comfortaa'>
        <h2 className='font-bold text-center text-2xl py-4'>
          {t("contact.title")}
        </h2>
        <p className='py-2 text-center text-lg'>
          {t("contact.description")} <span alt='smile-emoji'>&#x1F60A;</span>
        </p>
      </header>
      <div className={`flex justify-center `}>
        <div className='w-full'>
          <ContactElement
            icon={svgSocialIcons.telegram}
            link={TELEGRAM}
            content='@jeffrey_rerin'
            handleCopy={handleCopy}
          />
          <ContactElement
            icon={svgSocialIcons.linkedin}
            link={LINKEDIN}
            content='linkedin.com/in/jeffrey-rerin/'
            handleCopy={handleCopy}
          />
          <ContactElement
            icon={svgSocialIcons.email}
            link={EMAIL}
            content='jeffrey.rengifom@gmail.com'
            handleCopy={handleCopy}
          />
        </div>
      </div>
    </section>
  );
}

// This export is necessary to use the ref prop and forward it to the section
export default React.forwardRef(ContactComponent);

ContactElement.propTypes = {
  icon: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

function ContactElement({ icon, link, content, handleCopy }) {
  return (
    <div className='flex gap-6 justify-center items-center'>
      <div className=' w-24'>{icon}</div>
      <div className=''>
        <Input
          isReadOnly
          size='lg'
          variant='bordered'
          defaultValue={content}
          className='w-full'
        />
      </div>
      <button
        className='p-4 hover:scale-110 transition-all s'
        onClick={() => handleCopy(link)}>
        <FontAwesomeIcon className='text-3xl' icon={faCopy} />
      </button>
    </div>
  );
}
