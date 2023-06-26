import { useState } from "react";
import BtnComp from "../components/btn/BtnComp";
import "./quiz.scss";
import { useQuizFetching } from "./hooks/useQuizFetching";
import { QuizList } from "./components";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { filteredQuizzes } from "./extra";
import { Spinner } from "../../../../../component";
import { useTranslation } from "react-i18next";

const Quiz = () => {
  const { t } = useTranslation();
  const { quizData, quizDataLoading, error, dispatch } = useQuizFetching();
  const [activeBtn, setActiveBtn] = useState({ id: 1, type: "active" });
  if (quizDataLoading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (quizData?.quizzes.length === 0) {
    return <p>{t("informationNone")}</p>;
  }

  const handleChangeBtn = ({ id, status, type }) => {
    setActiveBtn({ id, type });
    dispatch(getQuizz({ status: status, is_me: 1 }));
  };

  const { quizzes } =
    quizData?.quizzes?.length > 0
      ? filteredQuizzes(quizData?.quizzes, activeBtn?.type)
      : [];

  const dataBtn = [
    { id: 1, label: t("active"), status: 1, type: "active" },
    { id: 2, label: t("register"), status: 1, type: "start" },
    { id: 3, label: t("finishOne"), status: 0, type: "finish" },
  ];

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
