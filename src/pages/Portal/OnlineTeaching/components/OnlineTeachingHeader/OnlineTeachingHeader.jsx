import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import i18next from "i18next";

import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../../../../reduxToolkit/contactSlice/extraReducer";
import { GrayContext } from "../../../../../context/GrayContext";
import { languageList } from "../../../../../component/Layout/data";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";

import Logo from "../../../../../assets/images/Logo.png";
import Flag from "../../../../../assets/images/Flag.png";
import Blazon from "../../../../../assets/images/blazon.png";
import Music from "../../../../../assets/images/Music.png";
import { CiGlobe } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

import "./onlineTeachingHeader.scss";

function OnlineTeachingHeader(props) {
  const dispatch = useDispatch();

  const [activeSidebar, setActiveSidebar] = useState(false);
  const [activeLangBar, setActiveLangBar] = useState(false);
  const { grayScale } = useContext(GrayContext);

  const contactData = useSelector((state) => state.contactSlice.contactData);
  const language = useSelector((state) => state.language.language);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
  };

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <div className="online-teaching-header">
      <div className="container">
        <div className="online-teaching-header__navbar">
          <div className="online-teaching-header__navbar-left">
            <Link to="/">
              <img src={Logo} alt="logo" />
              <span>VATANDOSHLAR JAMOAT FONDI</span>
            </Link>
          </div>
          <div className="online-teaching-header__navbar-phone">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.09084 2.81558C6.5252 0.771877 4.48882 -0.490419 2.47366 0.181733C1.16075 0.619627 0.36153 1.43658 0.096587 2.52624C-0.149676 3.53907 0.107001 4.63206 0.505639 5.59797C1.30841 7.54311 2.89725 9.47021 3.79683 10.3705C4.67567 11.25 6.59999 12.8457 8.54879 13.6558C9.51638 14.058 10.6135 14.3192 11.6309 14.0735C12.726 13.8091 13.547 13.0058 13.9874 11.6836C14.6585 9.66858 13.3985 7.63063 11.3552 7.06426L11.3552 7.06426C9.95859 6.67714 8.49392 7.04627 7.49436 7.9434C7.25974 7.76171 7.03409 7.56326 6.81889 7.3479C6.60264 7.13149 6.40344 6.90448 6.22114 6.66838C7.11124 5.66847 7.47627 4.20821 7.09084 2.81559L7.09084 2.81558Z"
                fill="#5D6B8A"
              />
            </svg>
            <a
              href={`tel: ${contactData?.phone}`}
              className="online-teaching-header__navbar-phone_number"
            >
              {contactData?.phone}
            </a>
          </div>
          <div className="online-teaching-header__navbar-email">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.44428 0.333344C1.91016 0.333344 0.666504 1.61253 0.666504 3.19049V10.8095C0.666504 12.3875 1.91016 13.6667 3.44428 13.6667H14.5554C16.0895 13.6667 17.3332 12.3875 17.3332 10.8095V3.19049C17.3332 1.61253 16.0895 0.333344 14.5554 0.333344H3.44428ZM5.35375 3.84929C4.99436 3.56178 4.46995 3.62005 4.18245 3.97943C3.89494 4.33882 3.95321 4.86323 4.31259 5.15073L8.47926 8.48407L8.99984 8.90053L9.52042 8.48407L13.6871 5.15073C14.0465 4.86323 14.1047 4.33882 13.8172 3.97943C13.5297 3.62005 13.0053 3.56178 12.6459 3.84929L8.99984 6.76616L5.35375 3.84929Z"
                fill="#5D6B8A"
              />
            </svg>
            <a
              href={`mailto: ${contactData?.email}`}
              className="online-teaching-header__navbar-email_number"
            >
              {contactData?.email}
            </a>
          </div>

          <Link to="/flag" className="first-flag">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Flag}
              className="online-teaching-header__navbar-flags"
              alt="flag"
            />
          </Link>
          <Link to="/coat">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Blazon}
              className="online-teaching-header__navbar-flags"
              alt="blazon"
            />
          </Link>
          <Link to="/anthem">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Music}
              className="online-teaching-header__navbar-flags"
              alt="music"
            />
          </Link>
          <motion.button
            whileTap={{ scale: 0.6 }}
            className="online-teaching-header__navbar-eye"
            onClick={() => grayScale()}
          >
            <svg width="20" height="6" viewBox="0 0 20 6" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.105718 1.10183C0.247265 1.23227 0.95382 1.62416 1.09478 2.01605C1.23632 2.4074 1.51942 4.91266 2.36752 5.56599C3.24216 6.23843 6.54139 5.9879 7.17304 5.69698C8.58674 5.04474 8.76014 2.93792 9.0102 2.01551C9.15116 1.49317 9.99926 1.49317 9.99926 1.49317C9.99926 1.49317 10.8474 1.49317 10.9889 2.01496C11.239 2.93792 11.4136 5.05075 12.8261 5.7019C13.4583 5.9939 16.7575 6.24443 17.6334 5.57199C18.4803 4.91866 18.7628 2.40685 18.9043 2.01496C19.0447 1.62362 19.7524 1.23173 19.8934 1.10128C20.0355 0.970832 20.0355 0.448493 19.8934 0.317499C19.6109 0.0566031 16.2757 -0.175911 12.6845 0.187051C11.9679 0.259644 11.6955 0.447947 9.99867 0.447947C8.30306 0.447947 8.0294 0.259098 7.31341 0.187051C3.7246 -0.175366 0.388812 0.0571486 0.105718 0.318045C-0.0352393 0.448493 -0.0352393 0.971377 0.105718 1.10183Z"
                fill="#5D6B8A"
              />
            </svg>
          </motion.button>
          <div className="online-teaching-header__lang">
            <div
              className="online-teaching-header__lang-wrapper"
              onClick={() => setActiveLangBar((el) => !el)}
            >
              <CiGlobe className="online-teaching-header__lang-icon" />
              <span>
                {languageList.find((lan) => lan.type === language).label}
              </span>
              <IoMdArrowDropdown className="online-teaching-header__lang-iconArrow" />
            </div>
            <div
              className="online-teaching-header__lang-bar"
              style={activeLangBar ? { display: "flex" } : null}
            >
              {languageList.map((el, index) => (
                <p
                  key={index}
                  onClick={() => {
                    handleChangeLng(el.type);
                    setActiveLangBar((el) => !el);
                  }}
                >
                  {el.label}
                </p>
              ))}
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.6 }}
            className="online-teaching-header__navbar-cabinet"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.66666C7.69882 1.66666 5.83334 3.53214 5.83334 5.83332C5.83334 8.13451 7.69882 9.99999 10 9.99999C12.3012 9.99999 14.1667 8.13451 14.1667 5.83332C14.1667 3.53214 12.3012 1.66666 10 1.66666Z"
                fill="#5D6B8A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.50001 10.8333C6.11439 10.8333 4.78187 11.4654 4.00097 12.417C3.60464 12.9 3.32602 13.4976 3.30176 14.16C3.27699 14.8363 3.52114 15.4965 4.02466 16.0726C5.2518 17.4764 7.21107 18.3333 10 18.3333C12.789 18.3333 14.7482 17.4764 15.9754 16.0726C16.4789 15.4965 16.723 14.8363 16.6983 14.16C16.674 13.4976 16.3954 12.9 15.9991 12.417C15.2182 11.4654 13.8856 10.8333 12.5 10.8333H7.50001Z"
                fill="#5D6B8A"
              />
            </svg>
            <span>Кабинет</span>
          </motion.button>
          <button
            className="online-teaching-header__navbar-eye burger"
            onClick={() => setActiveSidebar(!activeSidebar)}
          >
            {activeSidebar ? (
              <CgClose className="burger-closeIcon" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 0C1.79086 0 0 1.79086 0 4V5C0 7.20914 1.79086 9 4 9H5C7.20914 9 9 7.20914 9 5V4C9 1.79086 7.20914 0 5 0H4ZM15 0C12.7909 0 11 1.79086 11 4V5C11 7.20914 12.7909 9 15 9H16C18.2091 9 20 7.20914 20 5V4C20 1.79086 18.2091 0 16 0H15ZM4 11C1.79086 11 0 12.7909 0 15V16C0 18.2091 1.79086 20 4 20H5C7.20914 20 9 18.2091 9 16V15C9 12.7909 7.20914 11 5 11H4ZM15 11C12.7909 11 11 12.7909 11 15V16C11 18.2091 12.7909 20 15 20H16C18.2091 20 20 18.2091 20 16V15C20 12.7909 18.2091 11 16 11H15Z"
                  fill="#fff"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineTeachingHeader;
