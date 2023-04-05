import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../expert/components/Navbar/Navbar";
import Nav from "../../../expert/components/Nav/Nav";
import Header from "../../../expert/components/Header/Header";
import Council from "../../../expert/pages/ExpertHome/components/Council/Council";
import Volunter from "../../../volunter/pages/VolunterHome/components/VolunterCouncil/VolunterCouncil";
import News from "../../../expert/pages/ExpertHome/components/News/News";

const AssociationHome = () => {
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
};

export default AssociationHome;
