import React from "react";
import Council from "./components/Council/Council";
import Volunter from "./components/VolunterCouncil/VolunterCouncil";
import News from "./components/News/News";
import "./VolunterHome.scss";
import { useOutletContext } from "react-router-dom";
import Nav from "../../../expert/components/Nav/Nav";
import Navbar from "../../../expert/components/Navbar/Navbar";
import backImg from "../../../../../assets/images/volunter/volunter.png";
import Header from "../../../expert/components/Header/Header";

function VolunterHome() {
  const headerData = {
    title: "“Vatandoshlar” Volontyorlar",
    subTitle: "Vatandosh volontyorlar elektron platformasi",
    link: "/portal-category/volunteer/register",
  };
  const { navData, navbarUrl } = useOutletContext();
  return (
    <>
      <div
        className="volunter-home"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <Council />
      <Volunter />
      <News />
    </>
  );
}

export default VolunterHome;
