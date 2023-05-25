import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../../../assets/images/expert";
import burger from "../../../../../assets/images/icons/burger.svg";
import { useTranslation } from "react-i18next";
import NavbarList from "./navbarList/NavbarList";

const Navbar = ({ setActive }) => {
  const { t } = useTranslation();

  return (
    <div className="community-navbar">
      <div className="container">
        <div className="community-navbar__inner">
          <Link to="/portal">
            <div className="navbar-list">
              <img src={LogoIcon} alt="" className="navbar-icon" />
              <h4 className={`navbar--subname`}>{t("expert.headtitle")}</h4>
            </div>
          </Link>

          <button
            className="community-navbar__burger"
            onClick={() => setActive(true)}
          >
            <img src={burger} alt="menu burger" className="" />
          </button>
          <NavbarList />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
