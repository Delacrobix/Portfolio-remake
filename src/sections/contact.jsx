import React from "react";
import { Input, Button, Card, CardBody } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { svgSocialIcons } from "../components/svg/svgExports";
import useToast from "../hooks/useToast";

function ContactComponent(__, ref) {
  const { t } = useTranslation();
  const toast = useToast();

  const LINKEDIN = process.env.REACT_APP_LINKEDIN;
  const EMAIL = process.env.REACT_APP_EMAIL;

  function handleCopy(content) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        switch (content) {
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
      className='py-16 px-6 md:px-12 lg:px-24 min-h-[80vh] flex flex-col justify-center'
      ref={ref}>
      <header className='text-center mb-12'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='text-4xl text-primary'
          />
          <h2 className='font-comfortaa font-bold text-4xl'>
            {t("contact.title")}
          </h2>
        </div>
        <p className='font-comfortaa text-lg text-default-600 max-w-2xl mx-auto'>
          {t("contact.description")} <span alt='smile-emoji'>&#x1F60A;</span>
        </p>
      </header>
      <div className='max-w-2xl mx-auto w-full'>
        <div className='flex flex-col gap-6'>
        <ContactElement
          icon={svgSocialIcons.linkedin}
          link={LINKEDIN}
          content='linkedin.com/in/jeffrey-rerin/'
          handleCopy={handleCopy}
        />
        <ContactElement
          icon={svgSocialIcons.email}
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
  link: PropTypes.string,
  content: PropTypes.string.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

function handleRedirect(link) {
  if (link) {
    window.open(link, "_blank");
  }
}

function ContactElement({ icon, link, content, handleCopy }) {
  const IconWrapper = link ? (
    <Button
      className='w-16 h-16 min-w-16'
      onPress={() => handleRedirect(link)}
      variant='light'
      isIconOnly
      radius='lg'>
      <div className='w-10 h-10 flex items-center justify-center [&>svg]:!opacity-100'>
        {icon}
      </div>
    </Button>
  ) : (
    <div className='w-16 h-16 min-w-16 flex items-center justify-center'>
      <div className='w-10 h-10 flex items-center justify-center [&>svg]:!opacity-100'>
        {icon}
      </div>
    </div>
  );

  return (
    <Card className='w-full' isBlurred>
      <CardBody className='flex flex-row items-center gap-4 p-4'>
        <div className='flex-shrink-0'>{IconWrapper}</div>
        <div className='flex-grow'>
          <Input
            className='contact-input'
            isReadOnly
            size='lg'
            variant='bordered'
            value={content}
            classNames={{
              input: "text-base",
              inputWrapper: "h-14",
            }}
          />
        </div>
        <div className='flex-shrink-0'>
          <Button
            isIconOnly
            variant='light'
            onPress={() => handleCopy(link || content)}
            className='hover:scale-110 transition-all w-12 h-12 min-w-12'
            radius='lg'>
            <FontAwesomeIcon className='text-2xl' icon={faCopy} />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
