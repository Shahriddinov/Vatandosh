import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Flag from "../../../../assets/images/Flag.png";
import Blazon from "../../../../assets/images/blazon.png";
import Music from "../../../../assets/images/Music.png";
import { useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { languageChange } from "../../../../reduxToolkit/languageSlice";

const activeLanguage = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "uz";

const Navbar = ({ activeSidebar, setactiveSidebar }) => {
  const [activeLng, setActiveLng] = useState(activeLanguage);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const languageList = [
    { id: 1, label: "O‘zbekcha", type: "uz" },
    { id: 2, label: "Ўзбекча", type: "kr" },
    { id: 3, label: "Русский", type: "ru" },
    { id: 4, label: "English", type: "en" },
  ];

  const navbarList = [
    { id: 1, label: t("uzLearning"), url: "/portal-category/online-teaching" },
    { id: 2, label: t("expertCouncil"), url: "/portal-category/expert" },
    { id: 3, label: t("eventBase"), url: "/portal-category/webinar" },
    { id: 4, label: t("electronLibrary"), url: "/portal-category/library" },
    {
      id: 5,
      label: t("electronBook"),
      url: "/portal-category/electronic-journal",
    },
    {
      id: 6,
      label: t("aboutUzbekistan"),
      url: "/portal-category/about-uzbekistan",
    },
    {
      id: 7,
      label: t("participationProject"),
      url: "/portal-category/victorina",
    },
    {
      id: 8,
      label: t("electronCommunity"),
      url: "/portal-category/community-association",
    },
    {
      id: 9,
      label: t("compatriotsValunteer"),
      url: "/portal-category/volunteer",
    },
  ];

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
        <div className="header-sideBar-top">
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
          <form action="" className="header-sideBar-form">
            <input type="text" placeholder={t("search")} />
            <CiSearch className="header-sideBar-form-searchIcon" />
          </form>
        </div>
        <div className="header-sideBar-navlinks">
          <ul className="header-sideBar-navlist">
            {navbarList.map((navbar) => {
              return (
                <li
                  key={navbar.id}
                  className="header-sideBar-navlist-item"
                  style={{ height: "auto" }}
                  onClick={() => setactiveSidebar(false)}
                >
                  <Link to={navbar.url}>{navbar.label}</Link>
                </li>
              );
            })}
          </ul>
          <div className="header-sideBar-connection">
            <div className="header-sideBar-connection-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_320_3118)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.64757 2.35243C5.9385 1.0615 8.07351 1.21323 9.16889 2.67375L10.9872 5.09811C11.8829 6.29247 11.7642 7.96376 10.7085 9.01943L9.36792 10.36C9.49784 10.6982 9.92552 11.4402 11.2279 12.7426C12.5303 14.045 13.2724 14.4727 13.6106 14.6026L14.9511 13.2621C16.0068 12.2064 17.6781 12.0876 18.8724 12.9834L21.2968 14.8017C22.7573 15.8971 22.9091 18.0321 21.6181 19.323C21.1984 19.7427 21.1274 19.8137 20.427 20.5141C19.7132 21.2279 18.1976 21.8951 16.663 21.9618C14.2617 22.0662 11 21 6.98528 16.9853C2.97061 12.9706 1.90434 9.70884 2.00875 7.30751C2.06683 5.97171 2.49152 4.50458 3.46205 3.54912C4.15685 2.84315 4.24721 2.75279 4.64757 2.35243ZM4.00686 7.39439C3.93449 9.05893 4.636 11.8076 8.3995 15.5711C12.163 19.3346 14.9116 20.0361 16.5762 19.9637C18.13 19.8961 18.9636 19.1453 19.0128 19.0999L20.2039 17.9088C20.6342 17.4785 20.5837 16.7668 20.0968 16.4017L17.6724 14.5834C17.2743 14.2848 16.7172 14.3244 16.3653 14.6763C15.8352 15.2065 15.4732 15.5737 14.7648 16.2795C13.2932 17.7456 10.7741 15.1172 9.81371 14.1569C8.93113 13.2743 6.24147 10.6752 7.68961 9.20989C7.69248 9.20701 8.08253 8.81696 9.29427 7.60522C9.64616 7.25333 9.68576 6.69623 9.38717 6.29811L7.56889 3.87375C7.20376 3.38691 6.49209 3.33633 6.06179 3.76664C5.66573 4.16269 5.21751 4.61091 4.87188 4.95894C4.16051 5.67523 4.04493 6.51879 4.00686 7.39439Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_320_3118">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <a href="tel: 0800-120-55 55">0800-120-55 55</a>
            </div>
            <div className="header-sideBar-connection-item">
              <HiOutlineMail className="header-sideBar-connection-item-icon" />
              <a href="mailto: info@Vatandoshlar">info@Vatandoshlar</a>
            </div>
          </div>
        </div>
        <div className="header-sideBar-bottom">
          <ul className="header-sideBar-bottom-lang">
            {languageList.map((el) => (
              <li
                className={`header-sideBar-bottom-lang-item ${
                  activeLng === el.type ? "langActive" : ""
                }`}
                key={el.id}
                onClick={() => changeLanguage(el.type)}
              >
                {el.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
