import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Nav/Nav";
import WebinarHeader from "./components/Header/Header";
import './WebinarHome.scss'

function WebinarHome() {
  const { navData, navbarUrl } = useOutletContext();

  return (
    <div>
      <div className="victorina-home">
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
      </div>
      <WebinarHeader />
    </div>
  );
}

export default WebinarHome;
