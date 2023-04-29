import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./aboutUzbekistanNavbar.scss";

const AboutUzbekistanNavbar = () => {
  const navbarItems = [
    { id: 1, name: "BOSH SAHIFA", url: "/portal-category/about-uzbekistan" },
    {
      id: 2,
      name: "VIZUAL MA'LUMOT",
      url: "/portal-category/about-uzbekistan/visual-information",
    },
    {
      id: 3,
      name: "3D SAYOHAT",
      url: "/portal-category/about-uzbekistan/virtual-tour",
    },
    {
      id: 4,
      name: "TURISTIK OBYEKTLAR",
      url: "/portal-category/about-uzbekistan/tourist-facilities",
    },
    {
      id: 5,
      name: "BOG'LANISH",
      url: "/portal-category/about-uzbekistan/contact",
    },
  ];

  const { pathname } = useLocation();

  const [active, setActive] = useState(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="about-uzbekistan-navbar">
      <div className="container">
        <div className="about-uzbekistan-navbar__navbar-body">
          <ul className="about-uzbekistan-navbar__menu-items">
            {navbarItems.map((menuItem) => (
              <li
                className={`about-uzbekistan-navbar__menu-item ${
                  active === menuItem.url ? "active" : ""
                }`}
                key={menuItem.id}
              >
                <Link to={menuItem.url}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUzbekistanNavbar;
