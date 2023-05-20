import React, { useState } from "react";
import { MobileNavbar, Navbar } from "../../../electronicJournal/components";

const Header = ({ navbarUrl }) => {
  const [active, setActive] = useState(false);
  return (
    <header className="electronic-journal">
      <Navbar navbarUrl={navbarUrl} setActive={setActive} />
      <MobileNavbar active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
