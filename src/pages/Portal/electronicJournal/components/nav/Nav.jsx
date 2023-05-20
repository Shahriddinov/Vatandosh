import React, { useState } from "react";
import "./nav.scss";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ navData }) => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname.split("/")[3]);

  return (
    <nav className="community-nav">
      <div className="container">
        <div
          className="community-nav__inner"
          style={{
            borderBottomColor: "transparent",
          }}
        >
          <ul>
            {navData?.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  to={navItem.url}
                  className={`community-nav--link`}
                  onClick={() => setActiveLink(navItem.url.split("/")[3])}
                  style={{
                    color:
                      activeLink === navItem.url.split("/")[3]
                        ? "#065EA9"
                        : null,
                  }}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
