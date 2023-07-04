import { QuizCard } from "../";

import "./quizList.scss";

const QuizList = ({ data, cardType }) => {
  return (
    <ul className="cabinet-quiz-list">
      {/* {data?.map((el) => (
        <QuizCard key={el.id} {...el} cardType={cardType} />
      ))} */}
        <QuizCard  />
        <QuizCard  />
        <QuizCard  />
    </ul>
  );
};

export default QuizList;
