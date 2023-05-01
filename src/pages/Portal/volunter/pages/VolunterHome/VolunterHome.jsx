import React from "react";
import Volunter from "./components/VolunterCouncil/VolunterCouncil";
import "./VolunterHome.scss";
import { useOutletContext } from "react-router-dom";
import Nav from "../../../expert/components/Nav/Nav";
import Navbar from "../../../expert/components/Navbar/Navbar";
import backImg from "../../../../../assets/images/volunter/volunter.png";
import heroImg from "../../../../../assets/images/volunter/image.png";
import Council from "./components/Council/Council";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import News from "../../../expert/pages/ExpertHome/components/News/News";

function VolunterHome() {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const headerData = {
    title: `${t("voluntery.headertitle")}`,
    subTitle: `${t("voluntery.headertext")}`,
    link: "/portal-category/volunteer/register",
  };

  const councilData = {
    title: "“VATANDOSHLAR” jamg‘armasi qoshidagi xalqaro Volontyorlar",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised...",
    image: heroImg,
    pathUrl: "/portal-category/volunteer/council-about",
  };

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
      <Council councilData={councilData} />
      <Volunter />
      <News />
    </>
  );
}

export default VolunterHome;
