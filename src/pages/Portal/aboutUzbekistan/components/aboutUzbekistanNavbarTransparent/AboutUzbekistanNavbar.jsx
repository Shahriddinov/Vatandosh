import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./aboutUzbekistanNavbar.scss";

const AboutUzbekistanNavbar = ({ menu }) => {
  const [active, setActive] = useState(3);

  return (
    <div className="about-uzbekistan-navbar-transparent">
      <div className="container">
        <div className="about-uzbekistan-navbar-transparent__navbar-body">
          <ul className="about-uzbekistan-navbar-transparent__menu-items">
            {menu.map((menuItem) => (
              <li
                className={`about-uzbekistan-navbar-transparent__menu-item ${
                  active === menuItem.id ? "active" : ""
                }`}
                key={menuItem.id}
                onClick={() => setActive(menuItem.id)}
              >
                {menuItem.id === 3 ? (
                  <a href={menuItem.url} target="blank">
                    {menuItem.name}
                  </a>
                ) : (
                  <Link to={menuItem.url}>{menuItem.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUzbekistanNavbar;
