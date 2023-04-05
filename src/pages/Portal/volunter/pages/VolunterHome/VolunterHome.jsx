import React from "react";
import Council from "./components/Council/Council";
import Volunter from "./components/VolunterCouncil/VolunterCouncil";
import News from "./components/News/News";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import "./VolunterHome.scss";

function VolunterHome() {
  return (
    <>
      <div className="volunter-home">
        <Navbar />
        <Header />
      </div>
      <Council />
      <Volunter />
      <News />
    </>
  );
}

export default VolunterHome;
