import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import SwitchMode from "../components/switchMode";
import SwitchLanguage from "../components/switchLanguage";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const { scrollTo } = props;
  const { t } = useTranslation();

  return (
    <Navbar
      id='header'
      className='header font-rubik'
      maxWidth='full'
      isBordered>
      <NavbarBrand>
        <h1
          className='header__h1 font-bold text-3xl cursor-pointer'
          onClick={() => scrollTo("intro")}
          style={{ margin: 0 }}>
          Jeffrey Rerín
        </h1>
      </NavbarBrand>

      <NavbarContent className='uppercase' justify='end'>
        <NavbarItem>
          <SwitchMode classProp={"switch-mode"} idProp={"switch"} />
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("aboutMe")}>
            {t("header.nav-link-2")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("experience")}>
            {t("header.nav-link-3")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("projects")}>
            {t("header.nav-link-4")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("awards")}>
            {t("header.nav-link-5")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("articles")}>
            {t("header.nav-link-6")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("videos")}>
            {t("header.nav-link-7")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='header__link'
            onClick={() => scrollTo("certifications")}>
            {t("header.nav-link-8")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("tools")}>
            {t("header.nav-link-9")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='header__link' onClick={() => scrollTo("contact")}>
            {t("header.nav-link-10")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <SwitchLanguage />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
