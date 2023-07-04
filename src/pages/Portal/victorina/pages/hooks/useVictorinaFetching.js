import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";

export const useVictorinaFetching = () => {
  const language = useSelector((store) => store.language.language);
  const communityNews = useSelector((store) => store.portalNews.news);
  const quizData = useSelector((state) => state.quizSlice.data);
  // const quizDataWinner = useSelector(
  //   (state) => state.quizSlice.quizData?.participants
  // );

  const quizDataLoading = useSelector((state) => state.quizSlice.loading);

  const pageData = useSelector((state) => state.pageSlice.pageData);
  const pageDataLoading = useSelector((state) => state.pageSlice.loading);

  const error = useSelector((store) => store.community.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizz({ status: "1" }));
    dispatch(getQuizPage());
    dispatch(getPortalNews({ type: "quiz", per_page: "3", page: 1 }));
  }, [dispatch, language]);
  return {
    communityNews,
    quizData,
    pageData,
    error,
    quizDataLoading,
    pageDataLoading,
  };
};
