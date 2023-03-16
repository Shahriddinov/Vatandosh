import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import { GrayContext } from "../../../component/Layout/Layout";

import "./header.scss";

import Logo from "../../../assets/images/Logo.png";
import burger from "../../../assets/images/icons/burger.svg";
import Flag from "../../../assets/images/Flag.png";
import Blazon from "../../../assets/images/blazon.png";
import Music from "../../../assets/images/Music.png";
import { CiGlobe } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderPortal = () => {
  const [activeLangBar, setactiveLangBar] = useState(false);
  const scrollRef = useRef(0);
  const [isFixed, setFixed] = useState(false);
  const [activeSidebar, setactiveSidebar] = useState(false);
  const { pathname } = useLocation();

  const { grayScale } = useContext(GrayContext);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
  };

  useEffect(() => {
    scrollRef.current = window.pageYOffset;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollRef.current = window.pageYOffset;

      if (scrollRef.current > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, [scrollRef.current]);

  useEffect(() => {
    if (activeSidebar) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  }, [activeSidebar]);

  return (
    <div className={`portal-head ${isFixed ? "portal-fixed" : ""}`}>
      <div className="header container">
        <div className="header_navbar">
          <div className="header_navbar_left">
            <img src={Logo} alt="logo" />
            <span>VATANDOSHLAR JAMOAT FONDI</span>
          </div>
          <div className="header_navbar_phone">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.09084 2.81558C6.5252 0.771877 4.48882 -0.490419 2.47366 0.181733C1.16075 0.619627 0.36153 1.43658 0.096587 2.52624C-0.149676 3.53907 0.107001 4.63206 0.505639 5.59797C1.30841 7.54311 2.89725 9.47021 3.79683 10.3705C4.67567 11.25 6.59999 12.8457 8.54879 13.6558C9.51638 14.058 10.6135 14.3192 11.6309 14.0735C12.726 13.8091 13.547 13.0058 13.9874 11.6836C14.6585 9.66858 13.3985 7.63063 11.3552 7.06426L11.3552 7.06426C9.95859 6.67714 8.49392 7.04627 7.49436 7.9434C7.25974 7.76171 7.03409 7.56326 6.81889 7.3479C6.60264 7.13149 6.40344 6.90448 6.22114 6.66838C7.11124 5.66847 7.47627 4.20821 7.09084 2.81559L7.09084 2.81558Z"
                fill="#fff"
              />
            </svg>
            <a
              href="tel: +998(55)502-22-99"
              className="header_navbar_phone_number"
            >
              +998(55)502-22-99
            </a>
          </div>
          <div className="header_navbar_email">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.44428 0.333344C1.91016 0.333344 0.666504 1.61253 0.666504 3.19049V10.8095C0.666504 12.3875 1.91016 13.6667 3.44428 13.6667H14.5554C16.0895 13.6667 17.3332 12.3875 17.3332 10.8095V3.19049C17.3332 1.61253 16.0895 0.333344 14.5554 0.333344H3.44428ZM5.35375 3.84929C4.99436 3.56178 4.46995 3.62005 4.18245 3.97943C3.89494 4.33882 3.95321 4.86323 4.31259 5.15073L8.47926 8.48407L8.99984 8.90053L9.52042 8.48407L13.6871 5.15073C14.0465 4.86323 14.1047 4.33882 13.8172 3.97943C13.5297 3.62005 13.0053 3.56178 12.6459 3.84929L8.99984 6.76616L5.35375 3.84929Z"
                fill="#fff"
              />
            </svg>
            <a
              href="mailto: info@vatandoshlarfondi.uz"
              className="header_navbar_phone_number"
            >
              info@vatandoshlarfondi.uz
            </a>
          </div>

          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Flag}
            className="header_navbar_flags first-flag"
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11.5" cy="11.5" r="7.5" stroke="#F0F0F0" />
              <path
                d="M21.5 21.5L17 17"
                stroke="#F0F0F0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
          <motion.button
            whileTap={{ scale: 0.6 }}
            className="header_navbar_eye"
            onClick={() => grayScale()}
          >
            <svg
              width="20"
              height="6"
              viewBox="0 0 20 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.105718 1.10183C0.247265 1.23227 0.95382 1.62416 1.09478 2.01605C1.23632 2.4074 1.51942 4.91266 2.36752 5.56599C3.24216 6.23843 6.54139 5.9879 7.17304 5.69698C8.58674 5.04474 8.76014 2.93792 9.0102 2.01551C9.15116 1.49317 9.99926 1.49317 9.99926 1.49317C9.99926 1.49317 10.8474 1.49317 10.9889 2.01496C11.239 2.93792 11.4136 5.05075 12.8261 5.7019C13.4583 5.9939 16.7575 6.24443 17.6334 5.57199C18.4803 4.91866 18.7628 2.40685 18.9043 2.01496C19.0447 1.62362 19.7524 1.23173 19.8934 1.10128C20.0355 0.970832 20.0355 0.448493 19.8934 0.317499C19.6109 0.0566031 16.2757 -0.175911 12.6845 0.187051C11.9679 0.259644 11.6955 0.447947 9.99867 0.447947C8.30306 0.447947 8.0294 0.259098 7.31341 0.187051C3.7246 -0.175366 0.388812 0.0571486 0.105718 0.318045C-0.0352393 0.448493 -0.0352393 0.971377 0.105718 1.10183Z"
                fill="white"
              />
            </svg>
          </motion.button>
          <div className="portal-header-lang">
            <div
              className="portal-header-lang-wrapper"
              onClick={() => setactiveLangBar((el) => !el)}
            >
              <CiGlobe className="portal-header-lang-icon" />
              <span>
                {language.split("")[0].toUpperCase() + language.split("")[1]}
              </span>
              <IoMdArrowDropdown className="portal-header-lang-iconArrow" />
            </div>
            <div
              className="portal-header-lang-bar"
              style={activeLangBar ? { display: "flex" } : null}
            >
              <p
                onClick={(e) => {
                  handleChangeLng(e.target.innerText.toLowerCase());
                  setactiveLangBar((el) => !el);
                }}
              >
                Uz
              </p>
              <p
                onClick={(e) => {
                  handleChangeLng(e.target.innerText.toLowerCase());
                  setactiveLangBar((el) => !el);
                }}
              >
                Ru
              </p>
              <p
                onClick={(e) => {
                  handleChangeLng(e.target.innerText.toLowerCase());
                  setactiveLangBar((el) => !el);
                }}
              >
                En
              </p>
            </div>
          </div>
          <button
            className="header_navbar_eye burger"
            onClick={() => setactiveSidebar(!activeSidebar)}
          >
            {activeSidebar ? (
              <CgClose className="burger-closeIcon" />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

        <Navbar
          activeSidebar={activeSidebar}
          setactiveSidebar={setactiveSidebar}
        />

        <div
          className={activeSidebar ? "overlay overlayActive" : "overlay"}
          onClick={() => setactiveSidebar(!activeSidebar)}
        ></div>
      </div>
      <div className="mobile-phone-and-email container">
        <div className="header_navbar_phone">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.09084 2.81558C6.5252 0.771877 4.48882 -0.490419 2.47366 0.181733C1.16075 0.619627 0.36153 1.43658 0.096587 2.52624C-0.149676 3.53907 0.107001 4.63206 0.505639 5.59797C1.30841 7.54311 2.89725 9.47021 3.79683 10.3705C4.67567 11.25 6.59999 12.8457 8.54879 13.6558C9.51638 14.058 10.6135 14.3192 11.6309 14.0735C12.726 13.8091 13.547 13.0058 13.9874 11.6836C14.6585 9.66858 13.3985 7.63063 11.3552 7.06426L11.3552 7.06426C9.95859 6.67714 8.49392 7.04627 7.49436 7.9434C7.25974 7.76171 7.03409 7.56326 6.81889 7.3479C6.60264 7.13149 6.40344 6.90448 6.22114 6.66838C7.11124 5.66847 7.47627 4.20821 7.09084 2.81559L7.09084 2.81558Z"
              fill="#fff"
            />
          </svg>
          <a
            href="tel: +998(55)502-22-99"
            className="header_navbar_phone_number"
          >
            +998(55)502-22-99
          </a>
        </div>
        <div className="header_navbar_email">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.44428 0.333344C1.91016 0.333344 0.666504 1.61253 0.666504 3.19049V10.8095C0.666504 12.3875 1.91016 13.6667 3.44428 13.6667H14.5554C16.0895 13.6667 17.3332 12.3875 17.3332 10.8095V3.19049C17.3332 1.61253 16.0895 0.333344 14.5554 0.333344H3.44428ZM5.35375 3.84929C4.99436 3.56178 4.46995 3.62005 4.18245 3.97943C3.89494 4.33882 3.95321 4.86323 4.31259 5.15073L8.47926 8.48407L8.99984 8.90053L9.52042 8.48407L13.6871 5.15073C14.0465 4.86323 14.1047 4.33882 13.8172 3.97943C13.5297 3.62005 13.0053 3.56178 12.6459 3.84929L8.99984 6.76616L5.35375 3.84929Z"
              fill="#fff"
            />
          </svg>
          <a
            href="mailto: info@vatandoshlarfondi.uz"
            className="header_navbar_phone_number"
          >
            info@vatandoshlarfondi.uz
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderPortal;
