import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

import Logo from "../../../assets/images/Logos.svg";
import Logos from "../../../assets/images/LogoWhrite.svg";
import burger from "../../../assets/images/icons/burger.svg";
import Phone from "../../../assets/images/phone.svg";
import Message from "../../../assets/images/Message.svg";
import Flag from "../../../assets/images/Flag.png";
import Blazon from "../../../assets/images/blazon.png";
import Music from "../../../assets/images/Music.png";
import Eye from "../../../assets/images/EyeGlass.png";
import Search from "../../../assets/images/search.png";
import Globe from "../../../assets/images/Globe.png";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import Menu from "./component/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import { GrayContext } from "../Layout";
import Navbar from "./component/navbar/Navbar";

const Header = () => {
  const [activeSidebar, setactiveSidebar] = useState(false);
  const { pathname } = useLocation();
  const [activeLang, setactiveLang] = useState(false);
  const { grayScale } = useContext(GrayContext);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
  };

  useEffect(() => {
    if (activeSidebar) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  }, [activeSidebar]);

  return (
    <div className="head">
      <div className="header">
        <div className="header_navbar">
          <div className="header_navbar_left">
            <img src={pathname === "/about" ? Logos : Logo} alt="logo" />
          </div>
          <div className="header_navbar_phone">
            <img src={Phone} alt="phone" />
            <div className="header_navbar_phone_number">+998(55)502-22-99</div>
          </div>
          <div className="header_navbar_phone">
            <img src={Message} alt="message" />
            <div className="header_navbar_phone_number">
              info@vatandoshlarfondi.uz
            </div>
          </div>

          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Flag}
            className="header_navbar_flags"
            alt="flag"
          />
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Blazon}
            className="header_navbar_flags"
            alt="blazon"
          />
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Music}
            className="header_navbar_flags"
            alt="music"
          />
          <label className="header_navbar_search">
            <input
              type="text"
              className="header_navbar_search_inputs"
              placeholder="Qidirish"
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
            {/*<img src={Globe} alt="global" />*/}
            <select
              className="header_navbar_language_selects"
              value={language}
              onChange={(e) => handleChangeLng(e.target.value)}
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
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
      {pathname === "/portal" ? "" : <Menu />}
    </div>
  );
};

export default Header;
