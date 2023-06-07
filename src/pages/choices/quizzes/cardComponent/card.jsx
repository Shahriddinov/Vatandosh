// import eventImg from "../../../../assets/images/portal/cabinetVolunteer/event.png";
import { motion } from "framer-motion";
// import calImg from "../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import "./card.scss";
import calendarSvg from "../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import eyeSvg from "../../../../assets/images/portal/cabinetVolunteer/eye.svg";
// import { useState } from "react";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import { useState } from "react";
import { useEffect } from "react";
import { timer } from "../../../../helpers/extraFunction";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Card = ({ data, quiz }) => {
  const [timeData, setTimeDate] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    const { interval } = timer({
      finishedTime: data?.finished_at,
      setTimeDate: setTimeDate,
    });
    return () => {
      clearInterval(interval);
    };
  }, [data?.finished_at]);

  return (
    <div className="card">
      <img
        src={`${PORTAL_IMAGE_URL}${data.image && data?.image[0]}`}
        alt="img"
      />
      <div className="card-bottomBox">
        <h1>{data?.title}</h1>
        <p>
          {data?.description?.replace(/(<([^>]+)>+)|(&([a-zA-Z]+);+)/gi, "")}
        </p>
        {quiz ? (
          <div className="card-bottomBox-quizEnded">
            <p>{t("choices.quizIsOver")}</p>
          </div>
        ) : (
          <div className="card-bottomBox-timerBox">
            <div className="card-bottomBox-timerBox-box">
              <span>{timeData.days}</span>
              <span>{t("choices.day")}</span>
            </div>
            <div className="card-bottomBox-timerBox-vl"></div>
            <div className="card-bottomBox-timerBox-box">
              <span>{timeData.hours}</span>
              <span>{t("choices.hour")}</span>
            </div>
            <div className="card-bottomBox-timerBox-vl"></div>
            <div className="card-bottomBox-timerBox-box">
              <span>{timeData.minutes}</span>
              <span>{t("choices.minute")}</span>
            </div>
          </div>
        )}
        <div className="card-bottomBox-hl"></div>
        <div className="card-bottomBox-dateAndViewCont">
          <div>
            <img src={calendarSvg} alt="cal" />
            <span>12.02.2023</span>
          </div>
          <div>
            <img src={eyeSvg} alt="eye" />
            <span>100 k</span>
          </div>
        </div>

        <div className="card-bottomBox-btnBox">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(`/choices/quiz/more-detail/${data.id}`)}>
            {t("choices.moreDetail")}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Card;
