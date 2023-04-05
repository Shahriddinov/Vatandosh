import React from "react";
import Council from "./components/Council/Council";
import Volunter from "./components/VolunterCouncil/VolunterCouncil";
import News from "./components/News/News";
import Header from "../../components/Header/Header";
import "./VolunterHome.scss";
import { useOutletContext } from "react-router-dom";
import Nav from "../../../expert/components/Nav/Nav";
import Navbar from "../../../expert/components/Navbar/Navbar";

function VolunterHome() {
  const { navData } = useOutletContext();
  return (
    <>
      <div className="volunter-home">
        <Navbar />
        <Nav navData={navData} />
        <Header />
      </div>
      <Council />
      <Volunter />
      <News />
    </>
  );
}

export default VolunterHome;
