import { QuizCard } from "../";

import "./quizList.scss";

const QuizList = ({ data }) => {
  return (
    <ul className="cabinet-quiz-list">
      {data.map((el) => (
        <QuizCard key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default QuizList;
