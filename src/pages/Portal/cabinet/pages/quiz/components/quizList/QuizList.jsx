import { QuizCard } from "../";

import "./quizList.scss";

const QuizList = ({ data, cardType }) => {
  return (
    <ul className="cabinet-quiz-list">
      {data?.map((el) => (
        <QuizCard key={el.id} {...el} cardType={cardType} />
      ))}
    </ul>
  );
};

export default QuizList;
