import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import {
  BayroqIcon,
  EmailIcon,
  ExitIcon,
  EyeIcon,
  GerbIcon,
  LogoIcon,
  MessengerIcon,
  MusicIcon,
  NotificationIcon,
  PhoneIcon,
} from "../../../../../assets/images/expert";
import { useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import i18next from "i18next";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import { CiGlobe } from "react-icons/ci";
import { languageList } from "../../../../../component/Layout/data";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Navbar = ({ navbarUrl }) => {
  const [activeLang, setactiveLang] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };

  return (
    <div className="navbarpage">
      <div className="container">
        <div className="navbarpage__inner">
          <Link to={navbarUrl?.home}>
            <div className="navbar-list">
              <img src={LogoIcon} alt="" className="navbar-icon" />
              <h4 className={`navbar--subname`}>{t("expert.headtitle")}</h4>
            </div>
          </Link>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="tel:+998555022299" className={`navbar--link`}>
                <PhoneIcon />
                +998(55)502-22-99
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="mailto:info@vatandoshlarfondi.uz"
                className={`navbar--link`}
              >
                <EmailIcon />
                info@vatandoshlarfondi.uz
              </a>
            </li>
          </ul>
          <div className="navbar-list">
            <button className="navbarpage-icon">
              <img src={GerbIcon} alt="icon" />
            </button>
            <button className="navbarpage-icon">
              <img src={BayroqIcon} alt="icon" />
            </button>
            <button className={`navbarpage--icon`}>
              <MusicIcon />
            </button>
            <button className={`navbarpage--notification`}>
              <EyeIcon />
            </button>
            <div className="navbarpage_language">
              <div
                className="navbarpage_language-wrapper"
                style={{
                  background: `#065EA9`,
                }}
                onClick={() => setactiveLang((el) => !el)}
              >
                <CiGlobe className="navbarpage_language-icon" />
                <span style={{ color: "white" }}>
                  {languageList.find((lan) => lan.type === language).label}
                </span>
                <IoMdArrowDropdown className="navbarpage_language-iconArrow" />
              </div>
              <div
                className="navbarpage_language-bar"
                style={
                  activeLang
                    ? {
                        display: "flex",
                        background: `#065EA9`,
                      }
                    : null
                }
              >
                {languageList.map((el, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      handleChangeLng(el.type);
                    }}
                  >
                    {el.label}
                  </p>
                ))}
              </div>
            </div>
            <button className={`navbarpage--notification`}>
              <NotificationIcon />
            </button>
            <button className={`navbarpage--notification`}>
              <MessengerIcon />
            </button>
            <Link to={navbarUrl?.register} className={`navbar--button`}>
              <ExitIcon />
              Кабинет
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
