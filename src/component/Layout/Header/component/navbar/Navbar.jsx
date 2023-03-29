import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import phone from "../../../../../assets/images/icons/Phone.svg";
import Flag from "../../../../../assets/images/Flag.svg";
import Blazon from "../../../../../assets/images/blazon.svg";
import Music from "../../../../../assets/images/Music.svg";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import { NavBarLinks } from "../../../../NavBarLinks";
import {languageList} from '../../../data.js'

const activeLanguage = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "uz";

const Navbar = ({ activeSidebar }) => {
  const [activeLinkBar, setactiveLinkBar] = useState(-1);
  const [activeLng, setActiveLng] = useState(activeLanguage);
  const dispatch = useDispatch();



  const contactData = useSelector(
    (state) => state.contactSlice.contactData.data
  );

  const changeLanguage = (lng) => {
    dispatch(languageChange(lng));
    i18next.changeLanguage(lng);
    setActiveLng(lng);
  };

  return (
    <div
      className={
        activeSidebar ? "header-sideBar activeSideBar" : "header-sideBar"
      }
    >
      <div className="header-sideBar-wrapper">
        <form action="" className="header-sideBar-form">
          <input type="text" placeholder="Qidirish" />
          <CiSearch className="header-sideBar-form-searchIcon" />
        </form>
        <div className="header-sideBar-navlinks">
          <ul className="header-sideBar-navlist">
            {NavBarLinks()?.map((el, index) => {
              return el.links ? (
                <li
                  key={index}
                  className="header-sideBar-navlist-item"
                  style={activeLinkBar === index ? { height: "auto" } : null}
                >
                  <p
                    className="header-sideBar-navlist-item-title"
                    onClick={() =>
                      setactiveLinkBar((el) => (el === index ? -1 : index))
                    }
                  >
                    {el.title}{" "}
                    <IoIosArrowDown
                      className="header-sideBar-navlist-item-arrowIcon"
                      style={
                        activeLinkBar === index
                          ? { transform: "rotate(180deg)" }
                          : null
                      }
                    />
                  </p>
                  <div className="header-sideBar-navlist-item-links">
                    {el.links?.map((link, index) => {
                      return (
                        <NavLink
                          key={index}
                          className="header-sideBar-navlist-item-link"
                          to={link.url}
                        >
                          {link.title}
                        </NavLink>
                      );
                    })}
                  </div>
                </li>
              ) : (
                <li className="header-sideBar-navlist-item" key={index}>
                  <Link
                    className="header-sideBar-navlist-item-title"
                    to={el?.url}
                  >
                    {el.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="header-sideBar-connection">
            <a
              href={`tel: ${contactData?.phone}`}
              className="header-sideBar-connection-item"
            >
              <img src={phone} alt="phone" />
              <span>0800-120-55 55</span>
            </a>
            <a
              href={`mailto: ${contactData?.email}`}
              className="header-sideBar-connection-item"
            >
              <HiOutlineMail className="header-sideBar-connection-item-icon" />
              <span>info@Vatandoshlar</span>
            </a>
            <div className="header-sideBar-connection-action">
              <Link to="/flag">
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={Flag}
                  className="header-sideBar-connection-action-img"
                  alt="flag"
                />
              </Link>
              <Link to="/coat">
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={Blazon}
                  className="header-sideBar-connection-action-img"
                  alt="blazon"
                />
              </Link>
              <Link to="/anthem">
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={Music}
                  className="header-sideBar-connection-action-img"
                  alt="music"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="header-sideBar-bottom">
          <ul className="header-sideBar-bottom-lang">
            {languageList.map((el, index) => (
              <li
                className={`header-sideBar-bottom-lang-item ${
                  activeLng === el.type ? "langActive" : ""
                }`}
                key={index}
                onClick={() => changeLanguage(el.type)}
              >
                {el.label}
              </li>
            ))}
          </ul>

          <div className="header-sideBar-bottom-socialMedia">
            <a
              href="https://ru-ru.facebook.com"
              className="header-sideBar-bottom-socialMedia-item"
            >
              <FaFacebookF className="header-sideBar-bottom-socialMedia-item-icon" />
            </a>
            <a
              href="https://twitter.com/?lang=en"
              className="header-sideBar-bottom-socialMedia-item"
            >
              <FaTwitter className="header-sideBar-bottom-socialMedia-item-icon" />
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              className="header-sideBar-bottom-socialMedia-item"
            >
              <AiFillInstagram className="header-sideBar-bottom-socialMedia-item-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
