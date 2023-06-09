import React from "react";
import "./header.scss";
import { Navbar, Nav, MobileNav, MobileNavbar } from "../";
import { useState } from "react";

const Header = ({ navData }) => {
  const [active, setActive] = useState(false);
  return (
    <header className="electronic-journal">
      <Navbar setActive={setActive} />
      <MobileNavbar active={active} setActive={setActive} />
      <Nav navData={navData} />
      <MobileNav navData={navData} />
    </header>
  );
};

export default Header;
