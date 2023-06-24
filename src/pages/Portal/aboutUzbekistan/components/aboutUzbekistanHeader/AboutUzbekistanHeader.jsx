import React, { useContext, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { languageList } from "../../../../../component/Layout/data";
import { GrayContext } from "../../../../../context/GrayContext";
import { getSearchResults } from "../../../../../reduxToolkit/searchSlice/extraReducer";

import Logo from "../../../../../assets/images/Logos.svg";
import burger from "../../../../../assets/images/icons/burger.svg";
import Phone from "../../../../../assets/images/phone.svg";
import Message from "../../../../../assets/images/Message.svg";
import Flag from "../../../../../assets/images/Flag.svg";
import Blazon from "../../../../../assets/images/blazon.svg";
import Music from "../../../../../assets/images/Music.svg";
import Search from "../../../../../assets/images/search.png";
import Eye from "../../../../../assets/images/EyeGlass.png";
import { CgClose } from "react-icons/cg";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

import "./aboutUzbekistanHeader.scss";
import PortalSide from "../../../components/PortalSideBar/PortalSideBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeSidebar, setactiveSidebar] = useState(false);
  const [activeLang, setactiveLang] = useState(false);
  const { grayScale } = useContext(GrayContext);
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const searchRef = useRef("");

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };
  const contactData = useSelector((state) => state.contactSlice.contactData);

  const handleSearch = () => {
    const search = searchRef.current.value;
    if (search !== "") {
      dispatch(getSearchResults({ search, page: 1 }));
      navigate(`/search/${search}`);
    }
  };

  const sidebarData = [
    { id: 1, title: "BOSH SAHIFA", url: "/portal-category/about-uzbekistan" },
    {
      id: 2,
      title: "VIZUAL MA'LUMOT",
      url: "/portal-category/about-uzbekistan/visual-information",
    },
    {
      id: 3,
      title: "3D SAYOHAT",
      url: "https://uzbekistan360.uz/",
    },
    {
      id: 4,
      title: "TURISTIK OBYEKTLAR",
      url: "/portal-category/about-uzbekistan/tourist-facilities",
    },
    {
      id: 5,
      title: "BOG'LANISH",
      url: "/portal-category/about-uzbekistan/contact",
    },
  ];

  useEffect(() => {
    if (activeSidebar) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "inherit";
  }, [activeSidebar]);

  return (
    <header className="about-uzbekistan-header">
      <div className="header">
        <div className="header_navbar">
          <Link to="/portal" className="header_navbar_left">
            <img src={Logo} alt="logo" />
          </Link>
          <a
            href={`tel: ${contactData?.phone}`}
            className="header_navbar_phone"
          >
            <img src={Phone} alt="phone" />
            <div className="header_navbar_phone_number">
              {contactData?.phone}
            </div>
          </a>
          <a
            href={`mailto: ${contactData?.email}`}
            className="header_navbar_phone"
          >
            <img src={Message} alt="message" />
            <div className="header_navbar_phone_number">
              {contactData?.email}
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
              ref={searchRef}
              type="text"
              className="header_navbar_search_inputs"
              placeholder={t("search")}
            />
            <img
              onClick={handleSearch}
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
                {languageList.find((lan) => lan.type === language)?.label}
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
        <div className="header-mobile-navbar">
          <Link to="/portal" className="header_navbar_left">
            <img src={Logo} alt="logo" />
          </Link>
          <PortalSide data={sidebarData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
