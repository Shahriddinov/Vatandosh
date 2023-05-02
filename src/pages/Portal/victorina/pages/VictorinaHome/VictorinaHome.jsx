import React from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Nav/Nav";
import HeaderTime from "./components/HeaderTime/HeaderTime";
import VictorinaCouncil from "./components/VictorinaStatics/VictorinaCouncil";
import { NotebookImage } from "../../../../../assets/images/victorina";
import Victorina from "./components/Victorina/Victorina";
import VictorinaNews from "./components/News/News";
import ListWinners from "../../components/ListWinners/ListWinners";
import { useDispatch, useSelector } from "react-redux";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";
import { useEffect } from "react";

function VictorinaHome() {
  const dispatch = useDispatch();
  const { navData, navbarUrl } = useOutletContext();
  const pageData = useSelector((state) => state.pageSlice.pageData);
  const { t } = useTranslation();

  const councilData = {
    title: "“VATANDOSHLAR”  Viktorinalari",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised...",
    image: NotebookImage,
    pathUrl: "/portal-category/victorina/about",
  };

  useEffect(() => {
    dispatch(getQuizPage());
  }, []);

  return (
    <div>
      <div className="victorina-home">
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
      </div>
      <HeaderTime />
      <VictorinaCouncil pageData={pageData} />
      <Victorina />
      <ListWinners />
      <VictorinaNews />
    </div>
  );
}

export default VictorinaHome;
