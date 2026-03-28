import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import SwitchMode from "../components/switchMode";
import SwitchLanguage from "../components/switchLanguage";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const { scrollTo } = props;
  const { t } = useTranslation();

  const linkClass =
    "text-[1.02rem] no-underline px-[0.6rem] transition-colors duration-150 hover:text-[#abbac2] dark:hover:text-[rgb(164,189,212)]";

  return (
    <Navbar
      id='header'
      className='font-rubik bg-[rgba(69,98,104,0.8)] dark:bg-[rgba(82,109,130,0.8)]'
      maxWidth='full'
      isBordered>
      <NavbarBrand>
        <h1
          className='font-bold text-3xl cursor-pointer fixed pl-4 transition-colors duration-300'
          onClick={() => scrollTo("intro")}
          style={{ margin: 0 }}>
          Jeffrey Rengifo
        </h1>
      </NavbarBrand>

      <NavbarContent className='uppercase max-[750px]:hidden' justify='end'>
        <NavbarItem className='max-[992px]:hidden'>
          <SwitchMode />
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("aboutMe")}>
            {t("header.nav-link-2")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("experience")}>
            {t("header.nav-link-3")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("projects")}>
            {t("header.nav-link-4")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("awards")}>
            {t("header.nav-link-5")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("articles")}>
            {t("header.nav-link-6")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("videos")}>
            {t("header.nav-link-7")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={linkClass}
            onClick={() => scrollTo("certifications")}>
            {t("header.nav-link-8")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("tools")}>
            {t("header.nav-link-9")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={linkClass} onClick={() => scrollTo("contact")}>
            {t("header.nav-link-10")}
          </Link>
        </NavbarItem>
        <NavbarItem className='max-[992px]:hidden'>
          <SwitchLanguage />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
