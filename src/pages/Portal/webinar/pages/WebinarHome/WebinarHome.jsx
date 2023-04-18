import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Nav/Nav";

function WebinarHome() {
  const { navData, navbarUrl } = useOutletContext();

  return (
    <div>
      <div className="victorina-home">
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
      </div>
    </div>
  );
}

export default WebinarHome;
