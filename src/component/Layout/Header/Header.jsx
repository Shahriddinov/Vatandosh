import React, {useContext, useEffect, useState} from "react";


import Logo from "../../../assets/images/Logos.svg";
import burger from "../../../assets/images/icons/burger.svg";
import Logos from "../../../assets/images/LogoWhrite.svg";
import Phone from "../../../assets/images/phone.svg";
import Message from "../../../assets/images/Message.svg";
import Flag from "../../../assets/images/Flag.png";
import Blazon from "../../../assets/images/blazon.png";
import Music from "../../../assets/images/Music.png";
import Search from "../../../assets/images/search.png";
import Eye from "../../../assets/images/EyeGlass.png";
import EyeWhrite from "../../../assets/images/EyeWhrite.png";
import {CgClose} from "react-icons/cg";
import {motion} from "framer-motion";
import Menu from "./component/Menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {languageChange} from "../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import {GrayContext} from "../Layout";
import Navbar from "./component/navbar/Navbar";
import {useLocation} from "react-router-dom";
import {CiGlobe} from "react-icons/ci";
import {IoMdArrowDropdown} from "react-icons/io";

const Header = () => {
  const [activeSidebar, setactiveSidebar] = useState(false);
  const {pathname} = useLocation();
  const [activeLang, setactiveLang] = useState(false);
  const {grayScale} = useContext(GrayContext);
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
              <img src={pathname === "/about" ? Logos : pathname === "/about/council-trustees" ? Logos : Logo}
                   alt="logo"/>
            </div>
            <div className="header_navbar_phone">
              <img src={Phone} alt="phone"/>
              <div
                  className={pathname === "/about" ? "header_navbar_phone_number colors" : pathname === "/about/council-trustees" ? "header_navbar_phone_number colors" : "header_navbar_phone_number"}>+998(55)502-22-99
              </div>
            </div>
            <div className="header_navbar_phone">
              <img src={Message} alt="message"/>
              <div  className={pathname === "/about" ? "header_navbar_phone_number colors" : pathname === "/about/council-trustees" ? "header_navbar_phone_number colors" : "header_navbar_phone_number"}>
                info@vatandoshlarfondi.uz
              </div>
            </div>

            <motion.img
                whileTap={{scale: 0.6}}
                src={Flag}
                className="header_navbar_flags"
                alt="flag"
            />
            <motion.img
                whileTap={{scale: 0.6}}
                src={Blazon}
                className="header_navbar_flags"
                alt="blazon"
            />
            <motion.img
                whileTap={{scale: 0.6}}
                src={Music}
                className="header_navbar_flags"
                alt="music"
            />
            <label className={pathname === "/about/council-trustees" ? "header_navbar_search searches" : pathname === "/about" ? "header_navbar_search searches" : "header_navbar_search" }>
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
            <button
                className={pathname=== "/about" ?"header_navbar_eye searches" : pathname === "/about/council-trustees" ? "header_navbar_eye searches" : "header_navbar_eye"} onClick={() => grayScale()}>
              <motion.img whileTap={{scale: 0.6}} src={pathname=== "/about" ? EyeWhrite : pathname === "/about/council-trustees" ? EyeWhrite : Eye} alt="eye"/>
            </button>

            <div className="header_navbar_language">
              <div className={pathname=== "/about" ?"header_navbar_language-wrapper searches" : pathname === "/about/council-trustees" ? "header_navbar_language-wrapper searches" : "header_navbar_language-wrapper"}  onClick={() => setactiveLang((el) => !el)}>
                <CiGlobe className="header_navbar_language-icon" />
                <span style={{color:"white"}}>{language.split("")[0].toUpperCase() + language.split("")[1]}</span>
                <IoMdArrowDropdown className="header_navbar_language-iconArrow" />
              </div>
              <div className={pathname=== "/about" ?"header_navbar_language-bar searches" : pathname === "/about/council-trustees" ? "header_navbar_language-bar searches" : "header_navbar_language-bar"} style={activeLang ? { display: "flex" } : null}>
                <p onClick={(e) => handleChangeLng(e.target.innerText.toLowerCase())}>Uz</p>
                <p onClick={(e) => handleChangeLng(e.target.innerText.toLowerCase())}>Ru</p>
                <p onClick={(e) => handleChangeLng(e.target.innerText.toLowerCase())}>En</p>
              </div>
            </div>
            <button
                className="header_navbar_eye burger"
                onClick={() => setactiveSidebar(!activeSidebar)}
            >
              {activeSidebar ? (
                  <CgClose className="burger-closeIcon"/>
              ) : (
                  <img src={burger} alt="error"/>
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
        {pathname === "/portal" ? "" : <Menu/>}
      </div>
  );
};

export default Header;