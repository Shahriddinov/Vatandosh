import React from "react";
import "./header.scss";
import { Navbar, Nav } from "../";

const Header = ({ navData, navbarUrl }) => {
  return (
    <header className="electronic-journal">
      <Navbar navbarUrl={navbarUrl} />
      <Nav navData={navData} />
    </header>
  );
};

export default Header;
