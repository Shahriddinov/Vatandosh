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

const CabinetLeftMenu = () => {
  const { pathname } = useLocation();
  const menuItems = [
    {
      id: 1,
      url: "/portal-category/cabinet/private-information",
      name: "Личная информация",
      logo: UserIcon,
    },
    {
      id: 2,
      url: "/portal-category/cabinet/volunteering",
      name: "Волонтерская деятелность",
      logo: UserIcon,
    },
    {
      id: 3,
      url: "/portal-category/cabinet/expert-activity",
      name: "Экспертная деятелность",
      logo: HandsIcon,
    },
    {
      id: 4,
      url: "/portal-category/cabinet/organizations",
      name: "Участие в общественных организациях",
      logo: UsersIcon,
    },
    {
      id: 5,
      url: "/portal-category/cabinet/quiz",
      name: "Викторины",
      logo: Victorina,
    },
    {
      id: 6,
      url: "/portal-category/cabinet/events",
      name: "Мероприятия",
      logo: CalendarIcon,
    },
    {
      id: 7,
      url: "/portal-category/cabinet/certificates",
      name: "Сертификаты",
      logo: Certificate,
    },
  ];

  const [activePage, setActivePage] = useState(pathname.split("/")[3]);

  return (
    <div className="cabinet-navbar">
      <div className="container">
        <section className="cabinet-navbar__body">
          <Link to="/portal" className="cabinet-navbar__logo">
            <img src={logo} alt="logo" />
            <p>“VATANDOSHLAR” JAMOAT FONDI</p>
          </Link>
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.url}
                  className={`${
                    menu.url.split("/")[3] === activePage ? "active" : ""
                  }`}
                  onClick={() => setActivePage(menu.url.split("/")[3])}
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
  );
};

export default CabinetLeftMenu;
