import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./cabinetLeftMenu.scss";

import logo from "../../../../../assets/images/Logo.png";

import UserIcon from "../../../../../assets/images/cabinet/UserIcon";
import UsersIcon from "../../../../../assets/images/cabinet/UsersIcon";
import HandsIcon from "../../../../../assets/images/cabinet/HandsIcon";
import Victorina from "../../../../../assets/images/cabinet/Victorina";
import CalendarIcon from "../../../../../assets/images/cabinet/CalendarIcon";
import Certificate from "../../../../../assets/images/cabinet/Certificate";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../../../reduxToolkit/authSlice/authSlice";

const CabinetLeftMenu = ({ leftMenuToggle, setLeftMenuToggle }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const menuItems = [
    {
      id: 1,
      url: "/portal-category/cabinet/private-information/personal-information",
      name: t("cabinetOne"),
      logo: UserIcon,
    },
    {
      id: 2,
      url: "/portal-category/cabinet/volunteering",
      name: t("cabinetTwo"),
      logo: UserIcon,
    },
    {
      id: 3,
      url: "/portal-category/cabinet/expert-activity",
      name: t("cabinetThree"),
      logo: HandsIcon,
    },
    {
      id: 4,
      url: "/portal-category/cabinet/organizations",
      name: t("cabinetFour"),
      logo: UsersIcon,
    },
    {
      id: 5,
      url: "/portal-category/cabinet/quiz",
      name: t("cabinetFive"),
      logo: Victorina,
    },
    {
      id: 6,
      url: "/portal-category/cabinet/events",
      name: t("cabinetSix"),
      logo: CalendarIcon,
    },
    {
      id: 7,
      url: "/portal-category/cabinet/certificates",
      name: t("cabinetSeven"),
      logo: Certificate,
    },
  ];

  const [activePage, setActivePage] = useState(pathname.split("/")[3]);

  const handleClick = (menu) => {
    setActivePage(menu.url.split("/")[3]);
    
    setLeftMenuToggle(false);

  };
  return (
    <>
      <div className={`cabinet-navbar ${leftMenuToggle ? "active" : ""}`}>
        <div className="container">
          <section className="cabinet-navbar__body">
            <div className="cabinet-navbar__top">
              <Link to="/portal" className="cabinet-navbar__logo">
                <img src={logo} alt="logo" />
                <p>{t("expert.headtitle")}</p>
              </Link>

              <div
                className="cabinet-navbar__logout"
                onClick={() => dispatch(removeToken())}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0H9C11.2091 0 13 1.79086 13 4V9.25L6 9.25C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75L13 10.75V16C13 18.2091 11.2091 20 9 20H4C1.79086 20 0 18.2091 0 16V14V6V4C0 1.79086 1.79086 0 4 0ZM13 10.75H17.1893L15.4697 12.4697C15.1768 12.7626 15.1768 13.2374 15.4697 13.5303C15.7626 13.8232 16.2374 13.8232 16.5303 13.5303L18.8232 11.2374C19.5066 10.554 19.5066 9.44598 18.8232 8.76256L16.5303 6.46967C16.2374 6.17678 15.7626 6.17678 15.4697 6.46967C15.1768 6.76256 15.1768 7.23744 15.4697 7.53033L17.1893 9.25H13V10.75Z"
                    fill="#EB5757"
                  />
                </svg>
              </div>
            </div>
            <ul>
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.url}
                    className={`${
                      menu.url.split("/")[3] === activePage ? "active" : ""
                    }`}
                    onClick={() => handleClick(menu)}
                  >
                    {<menu.logo />}
                    <span>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div
        onClick={() => setLeftMenuToggle(false)}
        className={`cabinet-navbar__overlay ${leftMenuToggle ? "active" : ""}`}
      ></div>
    </>
  );
};

export default CabinetLeftMenu;
