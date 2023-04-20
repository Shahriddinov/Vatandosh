import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = ({ navData }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div
          className="nav__inner"
          style={{
            borderBottomColor: "transparent",
          }}
        >
          <ul>
            {navData?.map((navItem) => (
              <li key={navItem.id}>
                <Link to={navItem.url} className={`nav--link`}>
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
