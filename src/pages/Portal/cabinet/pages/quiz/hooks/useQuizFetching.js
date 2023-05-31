import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../../../../../reduxToolkit/victorinaQuiz/getquiz";

export const useQuizFetching = () => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);

  const quizData = useSelector((state) => state.quizSlice.data);
  const quizDataLoading = useSelector((state) => state.quizSlice.loading);

  const error = useSelector((state) => state.quizSlice.error);

  useEffect(() => {
    dispatch(getQuizz({ status: "1" }));
  }, [dispatch, lan]);

  return {
    quizData,
    quizDataLoading,
    error,
  };
};
