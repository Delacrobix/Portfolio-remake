import React from "react";
import { Button } from "@nextui-org/react";
import { svgSocialIcons } from "../components/svg/svgExports";

export default function Footer() {
  const LINKEDIN = process.env.REACT_APP_LINKEDIN;
  const GITHUB = process.env.REACT_APP_GITHUB;

  const currentYear = new Date().getFullYear();

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className='py-12 px-6 md:px-12 lg:px-24 border-t border-default-200 dark:border-default-800'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6'>
          {/* Social Icons */}
          <div className='flex items-center justify-center gap-4'>
            <Button
              isIconOnly
              variant='light'
              onPress={() => handleRedirect(LINKEDIN)}
              className='w-16 h-16 min-w-16 hover:scale-110 transition-all'
              radius='full'>
              <div className='w-10 h-10 flex items-center justify-center [&>svg]:!opacity-100'>
                {svgSocialIcons.linkedin}
              </div>
            </Button>
            <Button
              isIconOnly
              variant='light'
              onPress={() => handleRedirect(GITHUB)}
              className='w-16 h-16 min-w-16 hover:scale-110 transition-all'
              radius='full'>
              <div className='w-10 h-10 flex items-center justify-center [&>svg]:!opacity-100'>
                {svgSocialIcons.github}
              </div>
            </Button>
          </div>

          {/* Copyright */}
          <div className='text-center'>
            <p className='text-sm text-default-500 font-comfortaa'>
              © {currentYear} Jeffrey S. Rerín
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
