import { useState } from "react";
import BtnComp from "../components/btn/BtnComp";
import "./quiz.scss";
import { useQuizFetching } from "./hooks/useQuizFetching";
import { QuizList } from "./components";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { filteredQuizzes } from "./extra";
import { Spinner } from "../../../../../component";

const dataBtn = [
  { id: 1, label: "Aktiv yani qatnashgan", status: 1, type: "active" },
  { id: 2, label: "Registratsiya qigan", status: 1, type: "start" },
  { id: 3, label: "Arxiv", status: 0, type: "finish" },
];

const Quiz = () => {
  const { quizData, quizDataLoading, error, dispatch } = useQuizFetching();
  const [activeBtn, setActiveBtn] = useState({ id: 1, type: "active" });
  if (quizDataLoading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (quizData?.quizzes.length === 0) {
    return <p>Hozirda bizda malumot mavjud emas</p>;
  }

  const handleChangeBtn = ({ id, status, type }) => {
    setActiveBtn({ id, type });
    dispatch(getQuizz({ status: status, is_me: 1 }));
  };

  const { quizzes } =
    quizData?.quizzes?.length > 0
      ? filteredQuizzes(quizData?.quizzes, activeBtn?.type)
      : [];

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
          {!quizDataLoading ? (
            <QuizList data={quizzes} cardType={activeBtn?.type} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
