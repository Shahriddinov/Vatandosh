import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Nav/Nav";
import WebinarHeader from "./components/Header/Header";
import "./WebinarHome.scss";
import { useTranslation } from "react-i18next";
import Webinar from "../../../../../assets/images/webinar/Vebinarlar.png";
import WebinarCouncil from "./components/WebinarCouncil/WebinarCouncil";
import { CouncilImage } from "../../../../../assets/images/webinar";
import WebinarEvents from "./components/WebinarEvents/WebinarEvents";
import WebinarNews from "./components/WebinarNews/WebinarNews";

function WebinarHome() {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();

  const headerData = {
    title: `“Vatandoshlar” Vebinari `,
    subTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy `,
    link: "/portal-category/volunteer/register",
  };

  const councilData = {
    title: t("expert.counciltitle"),
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: CouncilImage,
    pathUrl: "/portal-category/expert/council-about",
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${Webinar})` }}
        className="webinar-home">
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <WebinarHeader headerData={headerData} />
      </div>
      <WebinarCouncil councilData={councilData} />
      <WebinarEvents />
      <WebinarNews />
    </div>
  );
}

export default WebinarHome;