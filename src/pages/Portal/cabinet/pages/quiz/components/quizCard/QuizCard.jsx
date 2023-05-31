import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { htmlElement, timer } from "../../../../../../../helpers/extraFunction";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import {
  CalendarIcon,
  ViewIcon,
} from "../../../../../../../assets/images/expert";

import "./quizCard.scss";
import { getDate } from "../../../../../../../config/constants";

const QuizCard = (props) => {
  const [timeData, setTimeDate] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const { interval } = timer({
      finishedTime: props?.finished_at,
      setTimeDate: setTimeDate,
    });
    return () => {
      clearInterval(interval);
    };
  }, [props?.finished_at]);

  console.log(props);

  const { filteredText } = htmlElement(props?.description);
  const text = filteredText[0].replace(/&nbsp;/g, "").split(" ");
  const date = getDate(props?.started_at);
  console.log(text.length);
  return (
    <li
      key={props?.id}
      className="cabinet-quiz-card"
      onClick={() =>
        navigate(`/portal-category/victorina/image-project/${props?.id}`)
      }
    >
      <img
        src={`${PORTAL_IMAGE_URL}/${props?.image}`}
        alt=""
        className="cabinet-quiz-card-img"
      />
      <div className="cabinet-quiz-card-items-body">
        <h4 className="cabinet-quiz-card-subname">{props?.title}</h4>
        <p>
          {text.length > 5
            ? text.slice(0, 10).join(" ") + "..."
            : text.join(" ")}
        </p>
        {props?.status > 0 ? (
          <div className="cabinet-quiz-card__list">
            <span className="cabinet-quiz-card__item">
              <p>{timeData.days}</p>
              <p>Kun</p>
            </span>
            <span className="cabinet-quiz-card__item">
              <p>{timeData.hours}</p>
              <p>Soat</p>
            </span>
            <span className="cabinet-quiz-card__item">
              <p>{timeData.minutes}</p>
              <p>Daqiqa</p>
            </span>
          </div>
        ) : null}
      </div>
      <div className="cabinet-quiz-card-footer">
        <div className="cabinet-quiz-card-item">
          <img src={CalendarIcon} alt="" className="cabinet-quiz-card-icon" />
          <p>
            <span>
              {date.getDay().length > 2 ? date.getDay() : `0${date.getDay()}`}.
            </span>
            <span>
              {date.getMonth().length > 2
                ? date.getMonth()
                : `0${date.getMonth()}`}
              .
            </span>
            <span>{date.getFullYear()}</span>
          </p>
        </div>
        <div className="cabinet-quiz-card-item">
          <img src={ViewIcon} alt="" className="cabinet-quiz-card-icon" />
          <p>{props?.count}</p>
        </div>
      </div>
    </li>
  );
};

export default QuizCard;
