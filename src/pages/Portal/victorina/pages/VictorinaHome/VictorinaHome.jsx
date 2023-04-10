import React from "react";
import { useOutletContext } from "react-router-dom";
import heroImg from "../../../../../assets/images/volunter/image.png";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Nav/Nav";

function VictorinaHome() {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();

  const councilData = {
    title: "“VATANDOSHLAR” jamg‘armasi qoshidagi xalqaro Volontyorlar",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised...",
    image: heroImg,
    pathUrl: "/portal-category/victorina/council-about",
  };
  return (
    <div>
      <div className="victorina-home">
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
      </div>
    </div>
  );
}

export default VictorinaHome;
