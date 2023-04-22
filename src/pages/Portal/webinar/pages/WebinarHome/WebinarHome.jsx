import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Nav/Nav";
import WebinarHeader from "./components/Header/Header";
import "./WebinarHome.scss";
import { useTranslation } from "react-i18next";
// import Webinar from "../../../../../assets/images/webinar/Vebinarlar.png";
// import WebinarCouncil from "./components/WebinarCouncil/WebinarCouncil";
import { CouncilImage } from "../../../../../assets/images/webinar";
// import WebinarEvents from "./components/WebinarEvents/WebinarEvents";
import WebinarNews from "./components/WebinarNews/WebinarNews";
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
      {/*<WebinarCouncil councilData={councilData} />*/}
      {/*<WebinarEvents />*/}
      <WebinarNews />
    </div>
  );
}

export default WebinarHome;
