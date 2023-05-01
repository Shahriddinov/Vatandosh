import React from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Nav/Nav";
import HeaderTime from "./components/HeaderTime/HeaderTime";
import VictorinaCouncil from "./components/VictorinaStatics/VictorinaCouncil";
import { NotebookImage } from "../../../../../assets/images/victorina";
import Victorina from "./components/Victorina/Victorina";
import ListWinners from "../../components/ListWinners/ListWinners";
import News from "../../../expert/pages/ExpertHome/components/News/News";

function VictorinaHome() {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();

  const councilData = {
    title: "“VATANDOSHLAR”  Viktorinalari",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised...",
    image: NotebookImage,
    pathUrl: "/portal-category/victorina/about",
  };
  return (
    <div>
      <div className="victorina-home">
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
      </div>
      <HeaderTime />
      <VictorinaCouncil councilData={councilData} />
      <Victorina />
      <ListWinners />
      <News />
    </div>
  );
}

export default VictorinaHome;
