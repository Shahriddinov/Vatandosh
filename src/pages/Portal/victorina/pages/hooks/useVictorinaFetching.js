import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";

export const useVictorinaFetching = () => {
  const language = useSelector((store) => store.language.language);
  const communityNews = useSelector((store) => store.portalNews.news);
  const quizData = useSelector((state) => state.quizSlice.quizData.quizzes);
  const quizDataWinner = useSelector(
    (state) => state.quizSlice.quizData.participants
  );
  const pageData = useSelector((state) => state.pageSlice.pageData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizz());
    dispatch(getQuizPage());
    dispatch(getPortalNews({ type: "quiz", per_page: "10", page: 1 }));
  }, [dispatch, language]);
  return {
    communityNews,
    quizData,
    pageData,
    quizDataWinner,
  };
};
