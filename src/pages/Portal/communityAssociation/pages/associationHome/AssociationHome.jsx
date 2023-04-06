import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../expert/components/Navbar/Navbar";
import Nav from "../../../expert/components/Nav/Nav";
import Header from "../../../expert/components/Header/Header";
import Council from "../../../expert/pages/ExpertHome/components/Council/Council";
import Volunter from "../../../volunter/pages/VolunterHome/components/VolunterCouncil/VolunterCouncil";
import News from "../../../expert/pages/ExpertHome/components/News/News";
import backImg from "../../../../../assets/images/communityAssociation/communityAssociationHomeBg.png";

const AssociationHome = () => {
  const { navData, navbarUrl } = useOutletContext();
  const headerData = {
    title: "“Vatandoshlar” Jamoat birlashmalari",
    subTitle: "Vatandosh jamoat birlashmalaring elektron platformasi",
    link: "/portal-category/community-association/register",
  };
  return (
    <>
      <div
        className="expert-council"
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
};

export default AssociationHome;
