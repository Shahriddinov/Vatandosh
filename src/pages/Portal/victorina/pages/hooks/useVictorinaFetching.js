import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";

export const useVictorinaFetching = () => {
  const language = useSelector((store) => store.language.language);

  const communityNews = useSelector((store) => store.portalNews.news);
  const quizData = useSelector((state) => state.quizSlice.quizData.quizzes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizz());
    dispatch(getPortalNews("quiz"));
  }, [language]);

  return {
    communityNews,
    quizData,
  };
};
