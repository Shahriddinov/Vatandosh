import { useState } from "react";
import { dataBtn } from "../components/fakedata";
import BtnComp from "../components/btn/BtnComp";

import "./quiz.scss";
import { useQuizFetching } from "./hooks/useQuizFetching";
import { QuizList } from "./components";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";

const Quiz = () => {
  const { quizData, quizDataLoading, error, dispatch } = useQuizFetching();
  const [activeBtn, setActiveBtn] = useState(1);

  if (quizDataLoading) {
    return null;
  } else if (error) {
    return <p>{error}</p>;
  }

  const handleChangeBtn = ({ id, status }) => {
    setActiveBtn(id);
    dispatch(getQuizz({ status: status }));
  };

  return (
    <div className="container-quiz">
      <div className="container-quiz-inner">
        <div className="container-quiz-inner_btnContainer">
          {dataBtn.map((el) => (
            <BtnComp
              key={el.id}
              el={el}
              activeBtn={activeBtn}
              handleBtn={handleChangeBtn}
            />
          ))}
        </div>
        <div className="container-quiz-inner_cardContainer">
          <QuizList data={quizData?.quizzes} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
