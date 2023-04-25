import React from "react";
import Navbar from "../../pages/WebinarHome/components/Navbar/Navbar";
import Nav from "../../pages/WebinarHome/components/Nav/Nav";

export default function WebinarHeader({ navData, navbarUrl }) {
  return (
    <header className="expert-header">
      <Navbar navbarUrl={navbarUrl} />
      <Nav navData={navData} />
    </header>
  );
}
