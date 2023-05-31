import React from "react";
import { useOutletContext } from "react-router-dom";
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

  const {
    communityNews,
    quizData,
    pageData,
    quizDataLoading,
    pageDataLoading,
    error,
  } = useVictorinaFetching();

  if (quizDataLoading || pageDataLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

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
