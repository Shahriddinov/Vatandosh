import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizData } from "../../../../reduxToolkit/choicesPageSlice/extraReducer";

export const usePublicAssData = (postsPerPage) => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const quizTotalData = useSelector((state) => state.choiceQuizSlice);

  useEffect(() => {
    dispatch(getAllQuizData({ status: 0, paginate: 1000000000000 }));
  }, [dispatch, lan, postsPerPage]);

  return {
    quizTotalData,
  };
};
