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
import { useDispatch, useSelector } from "react-redux";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";
import { useEffect } from "react";
import { useVictorinaFetching } from "../hooks/useVictorinaFetching";
import VictorinaNews from "./components/News/News";

function VictorinaHome() {
  const dispatch = useDispatch();
  const { navData, navbarUrl } = useOutletContext();
  const pageData = useSelector((state) => state.pageSlice.pageData);
  const { t } = useTranslation();

  const { communityNews,quizData } = useVictorinaFetching();

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
      <Victorina quizData={quizData} />
      <ListWinners />
      <VictorinaNews expertNews={communityNews} />
    </div>
  );
}

export default VictorinaHome;
