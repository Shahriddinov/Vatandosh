import React from "react";
import "../navbar.scss";
import { Link } from "react-router-dom";
import {
  BayroqIcon,
  EmailIcon,
  ExitIcon,
  EyeIcon,
  GerbIcon,
  MusicIcon,
  PhoneIcon,
} from "../../../../../../assets/images/expert";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import i18next from "i18next";
import { languageChange } from "../../../../../../reduxToolkit/languageSlice";
import { languageList } from "../../../../../../component/Layout/data";

const NavbarList = ({ navbarUrl }) => {
  const [activeLang, setactiveLang] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };

  return (
    <ul className="community-navbar__list">
      <li className="community-navbar__item">
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
      </li>

      <li className="community-navbar__item">
        <ul className="navbar-list">
          <li className="navbar-item">
            <button className="community-navbar-icon ">
              <img src={GerbIcon} alt="icon" />
            </button>
          </li>

          <li className="navbar-item">
            <button className="community-navbar-icon ">
              <img src={BayroqIcon} alt="icon" />
            </button>
          </li>

          <li className="navbar-item">
            <button className={`community-navbar--icon `}>
              <MusicIcon />
            </button>
          </li>
        </ul>
      </li>

      <li className="community-navbar__item">
        <ul className="navbar-list">
          <li className="navbar-item">
            <button className={`community-navbar--notification `}>
              <EyeIcon />
            </button>
          </li>

          <li className="navbar-item">
            <div className="community-navbar_language">
              <div
                className="community-navbar_language-wrapper"
                style={{
                  background: `#065EA9`,
                }}
                onClick={() => setactiveLang((el) => !el)}
              >
                <CiGlobe className="community-navbar_language-icon" />
                <span style={{ color: "white" }}>
                  {languageList.find((lan) => lan.type === language).label}
                </span>
                <IoMdArrowDropdown className="community-navbar_language-iconArrow" />
              </div>
              <div
                className="community-navbar_language-bar"
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
          </li>

          <li className="navbar-item">
            <Link to={navbarUrl?.register} className={`navbar--button`}>
              <ExitIcon />
              Кабинет
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavbarList;
