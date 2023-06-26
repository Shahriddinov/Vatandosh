import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";

function VictorinaHome() {
  const { navData, navbarUrl } = useOutletContext();
  const dispatch = useDispatch();

  const lan = useSelector((state) => state.language.language);
  const victorinaNews = useSelector((store) => store.portalNews.news);
  const communityNewsLoading = useSelector((store) => store.portalNews.loading);
  const { quizData, pageData, quizDataLoading, pageDataLoading, error } =
    useVictorinaFetching();

  useEffect(() => {
    dispatch(getPortalNews({ type: "victorina", per_page: "10", page: 1 }));
  }, [dispatch, lan]);

  if (quizDataLoading || pageDataLoading || communityNewsLoading) {
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
      <VictorinaNews
        communityNews={victorinaNews?.data}
        url={"/portal-category/victorina"}
      />
    </div>
  );
}

export default VictorinaHome;
