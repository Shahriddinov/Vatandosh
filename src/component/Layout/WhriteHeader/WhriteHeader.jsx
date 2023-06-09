import React, { useContext, useEffect, useState, useRef } from "react";

import burger from "../../../assets/images/icons/burger.svg";
import Logos from "../../../assets/images/LogoWhrite.svg";
import Phone from "../../../assets/images/whritePhone.png";
import Message from "../../../assets/images/MessageWhrite.svg";
import Flag from "../../../assets/images/Flag.svg";
import Blazon from "../../../assets/images/blazon.svg";
import Music from "../../../assets/images/WhriteMusic.svg";
import Search from "../../../assets/images/SearchWhrite.svg";
import EyeWhrite from "../../../assets/images/EyeWhrite.png";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Menun from "./component/Menun/Menun";
import { languageList } from "../data";

import Spinner from "../../Spinner/Spinner";
import Navbar from "../Header/component/navbar/Navbar";
import { GrayContext } from "../../../context/GrayContext";
import { getSearchResults } from "../../../reduxToolkit/searchSlice/extraReducer";

const WhriteHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { grayScale } = useContext(GrayContext);
  const searchRef = useRef("");

  const projectsMenuLoading = useSelector(
    (store) => store.singleSlice.projectsLoading
  );
  const associationMenuLoading = useSelector(
    (store) => store.singleSlice.projectsLoading
  );
  const [activeSidebar, setactiveSidebar] = useState(false);
  const { pathname } = useLocation();
  const [activeLang, setactiveLang] = useState(false);
  const language = useSelector((state) => state.language.language);

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

  useEffect(() => {
    if (activeSidebar) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "inherit";
  }, [activeSidebar]);

  if (projectsMenuLoading || associationMenuLoading) {
    return <Spinner />;
  }

  return (
    <header className="head">
      <div className="header">
        <div className="header_navbar">
          <Link to="/" className="header_navbar_left">
            <img className="header_navbar_left_logos" src={Logos} alt="logo" />
          </Link>
          <a
            href={`tel: ${contactData?.phone}`}
            className="header_navbar_phone"
          >
            <img src={Phone} alt="phone" />
            <div className="header_navbar_phone_number colors">
              {contactData?.phone}
            </div>
          </a>
          <a
            href={`mailto: ${contactData?.email}`}
            className="header_navbar_phone"
          >
            <img src={Message} alt="message" />
            <div className="header_navbar_phone_number colors">
              {contactData?.email}
            </div>
          </a>

          <Link to="/flag">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Flag}
              className="header_navbar_flags"
              alt="flag"
            />
          </Link>
          <Link to="/coat">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Blazon}
              className="header_navbar_flags"
              alt="blazon"
            />
          </Link>
          <Link to="/anthem">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Music}
              className="header_navbar_flags"
              alt="music"
            />
          </Link>
          <label className="header_navbar_search searches">
            <input
              ref={searchRef}
              type="text"
              className="header_navbar_search_inputs"
              placeholder="Qidirish"
            />
            <img
              src={Search}
              className="header_navbar_search_icon"
              alt="search"
              onClick={handleSearch}
            />
          </label>
          <button
            className="header_navbar_eye searches"
            onClick={() => grayScale()}
          >
            <motion.img whileTap={{ scale: 0.6 }} src={EyeWhrite} alt="eye" />
          </button>

          <div className="header_navbar_language">
            <div
              className="header_navbar_language-wrapper searches"
              onClick={() => setactiveLang((el) => !el)}
            >
              <CiGlobe className="header_navbar_language-icon" />
              <span style={{ color: "white" }}>
                {languageList.find((lan) => lan.type === language).label}
              </span>
              <IoMdArrowDropdown className="header_navbar_language-iconArrow" />
            </div>
            <div
              className="header_navbar_language-bar searches"
              style={activeLang ? { display: "flex" } : null}
            >
              {languageList.map((el, index) => (
                <p key={index} onClick={() => handleChangeLng(el.type)}>
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

        <Navbar
          activeSidebar={activeSidebar}
          setactiveSidebar={setactiveSidebar}
        />

        <div
          className={activeSidebar ? "overlay overlayActive" : "overlay"}
          onClick={() => setactiveSidebar(!activeSidebar)}
        ></div>
      </div>
      {pathname.split("/")[1].includes("portal") ? "" : <Menun />}
    </header>
  );
};

export default WhriteHeader;
