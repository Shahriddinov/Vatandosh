import { useContext, useEffect, useState } from "react";

import Logo from "../../../assets/images/Logos.svg";
import burger from "../../../assets/images/icons/burger.svg";
import Phone from "../../../assets/images/phone.svg";
import Message from "../../../assets/images/Message.svg";
import Flag from "../../../assets/images/Flag.svg";
import Blazon from "../../../assets/images/blazon.svg";
import Music from "../../../assets/images/Music.svg";
import Search from "../../../assets/images/search.png";
import Eye from "../../../assets/images/EyeGlass.png";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import Menus from "./component/Menus/Menus";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import { GrayContext } from "../Layout";
import Navbar from "./component/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { languageList } from "../data";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [activeSidebar, setactiveSidebar] = useState(false);
  const { pathname } = useLocation();
  const [activeLang, setactiveLang] = useState(false);
  const { grayScale } = useContext(GrayContext);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };
  const contactData = useSelector(
    (state) => state.contactSlice.contactData.data
  );

  useEffect(() => {
    if (activeSidebar) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "inherit";
  }, [activeSidebar]);

  return (
    <header
      className="head"
      style={activeSidebar ? { background: "#FFFFFF" } : null}
    >
      <div className="header">
        <div className="header_navbar">
          <Link to="/" className="header_navbar_left">
            <img src={Logo} alt="logo" />
          </Link>
          <a
            href={`tel: ${contactData?.phone}`}
            className="header_navbar_phone"
          >
            <img src={Phone} alt="phone" />
            <div className="header_navbar_phone_number">+998(55)502-22-99</div>
          </a>
          <a
            href={`mailto: ${contactData?.email}`}
            className="header_navbar_phone"
          >
            <img src={Message} alt="message" />
            <div className="header_navbar_phone_number">
              info@vatandoshlarfondi.uz
            </div>
          </a>
          <a href="/flag">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Flag}
              className="header_navbar_flags"
              alt="flag"
            />
          </a>
          <a href="/coat">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Blazon}
              className="header_navbar_flags"
              alt="blazon"
            />
          </a>
          <a href="/anthem">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Music}
              className="header_navbar_flags"
              alt="music"
            />
          </a>
          <label className="header_navbar_search">
            <input
              type="text"
              className="header_navbar_search_inputs"
              placeholder={t("search")}
            />
            <img
              src={Search}
              className="header_navbar_search_icon"
              alt="search"
            />
          </label>
          <button className="header_navbar_eye" onClick={() => grayScale()}>
            <motion.img whileTap={{ scale: 0.6 }} src={Eye} alt="eye" />
          </button>

          <div className="header_navbar_language">
            <div
              className="header_navbar_language-wrapper"
              onClick={() => setactiveLang((el) => !el)}
            >
              <CiGlobe className="header_navbar_language-icon" />
              <span style={{ color: "white" }}>
                {language.split("")[0].toUpperCase() + language.split("")[1]}
              </span>
              <IoMdArrowDropdown className="header_navbar_language-iconArrow" />
            </div>
            <div
              className="header_navbar_language-bar"
              style={activeLang ? { display: "flex" } : null}
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
              {/* <p onClick={(e) => {
                                handleChangeLng(e.target.innerText.toLowerCase());
                                setactiveLang((el) => !el)
                            }}>Uz</p>
                            <p onClick={(e) => {
                                handleChangeLng(e.target.innerText.toLowerCase());
                                setactiveLang((el) => !el)
                            }}>Ru</p>
                            <p onClick={(e) => {
                                handleChangeLng(e.target.innerText.toLowerCase());
                                setactiveLang((el) => !el)
                            }}>En</p>
                            <p onClick={(e) => {
                                handleChangeLng(e.target.innerText.toLowerCase());
                                setactiveLang((el) => !el)
                            }}>oz</p> */}
            </div>
          </div>
          <button
            className="header_navbar_eye burger"
            onClick={() => setactiveSidebar(!activeSidebar)}
          >
            {activeSidebar ? (
              <CgClose className="burger-closeIcon" />
            ) : (
              <img src={burger} alt="error" />
            )}
          </button>
        </div>

        <Navbar
          activeSidebar={activeSidebar}
          setactiveSidebar={setactiveSidebar}
        />

        <div
          className={activeSidebar ? "overlay overlayActive" : "overlay"}
          onClick={() => setactiveSidebar(!activeSidebar)}
        ></div>
      </div>
      {pathname.split("/")[1].includes("portal") ? "" : <Menus />}
    </header>
  );
};

export default Header;
