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

const Card = ({ data, quiz }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  console.log(data.finished_at);
  console.log(new Date().getTime());

  useEffect(() => {}, []);
  return (
    <div className="card">
      <img src={`${PORTAL_IMAGE_URL}${data.image}`} alt="img" />
      <div className="card-bottomBox">
        <h1>{data.title}</h1>
        <p>{data.description.replace(/(<([^>]+)>+)|(&([a-zA-Z]+);+)/gi, "")}</p>
        {quiz ? (
          <div className="card-bottomBox-quizEnded">
            <p>VIKTORINA YAKUNLANDI!</p>
          </div>
        ) : (
          <div className="card-bottomBox-timerBox">
            <div className="card-bottomBox-timerBox-box">
              <span>{days}</span>
              <span>Kun</span>
            </div>
            <div className="card-bottomBox-timerBox-vl"></div>
            <div className="card-bottomBox-timerBox-box">
              <span>{hours}</span>
              <span>Soat</span>
            </div>
            <div className="card-bottomBox-timerBox-vl"></div>
            <div className="card-bottomBox-timerBox-box">
              <span>{minutes}</span>
              <span>Daqiqa</span>
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
          <motion.button whileTap={{ scale: 0.9 }}>
            Batafsil ma’lumot
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Card;
