import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../expert/components/Navbar/Navbar";
import Nav from "../../../expert/components/Nav/Nav";
import Header from "../../../expert/components/Header/Header";
import Council from "../../../expert/pages/ExpertHome/components/Council/Council";
import News from "../../../expert/pages/ExpertHome/components/News/News";
import backImg from "../../../../../assets/images/communityAssociation/communityAssociationHomeBg.png";
import heroImg from "../../../../../assets/images/communityAssociation/hero-img.png";
import MapsHome from "../../../../../component/maps-home/MapsHome";
import { useTranslation } from "react-i18next";

const AssociationHome = () => {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const headerData = {
    title: t("communityAssociation.home_title"),
    subTitle: t("communityAssociation.home_desc"),
    link: "/portal-category/community-association/application#1",
    btnText: t("communityAssociation.application"),
  };
  const councilData = {
    title:
      "Xorijda istiqomat qilayotgan vatandoshlar tomonidan tashkil  etilgan jamoat birlashmalari",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised...",
    image: heroImg,
    pathUrl: "/portal-category/community-association/about",
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
      <Council councilData={councilData} />
      <MapsHome title={t("communityAssociation.navbar.navbar_link2")} />
      <News />
    </>
  );
};

export default AssociationHome;
