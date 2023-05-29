import React from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Nav/Nav";
import HeaderTime from "./components/HeaderTime/HeaderTime";
import VictorinaCouncil from "./components/VictorinaStatics/VictorinaCouncil";
import Victorina from "./components/Victorina/Victorina";
import ListWinners from "../../components/ListWinners/ListWinners";
import { useVictorinaFetching } from "../hooks/useVictorinaFetching";
import VictorinaNews from "./components/News/News";
import { Spinner } from "../../../../../component";

function VictorinaHome() {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();

  const {
    communityNews,
    quizData,
    pageData,
    quizDataLoading,
    pageDataLoading,
    error,
  } = useVictorinaFetching();
  // if (communityNews || quizData || pageData || quizDataWinner) {
  //   return <Spinner position="full" />;
  // } else if (error) {
  //   return <p>{error}</p>;
  // }

  if (quizDataLoading || pageDataLoading) {
    return <Spinner position="full" />;
  }

  console.log(quizData);
  return (
    <div>
      <div className="victorina-home">
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
      </div>
      <HeaderTime quizData={quizData.quizzes} />
      <VictorinaCouncil pageData={pageData} />
      <Victorina quizData={quizData.quizzes} />
      <ListWinners quizDataWinner={quizData.participants} />
      <VictorinaNews communityNews={communityNews} />
    </div>
  );
}

export default VictorinaHome;
