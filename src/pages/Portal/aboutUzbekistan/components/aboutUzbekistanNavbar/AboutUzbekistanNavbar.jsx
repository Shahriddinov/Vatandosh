import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./aboutUzbekistanNavbar.scss";

const AboutUzbekistanNavbar = ({ menu }) => {
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
            {menu.map((menuItem) => (
              <li
                key={menuItem.id}
                className={`about-uzbekistan-navbar__menu-item ${
                  active === menuItem.url ? "active" : ""
                }`}
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
