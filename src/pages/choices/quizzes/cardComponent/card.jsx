import eventImg from "../../../../assets/images/portal/cabinetVolunteer/event.png";
import { motion } from "framer-motion";
import calImg from "../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import "./card.scss";
import calendarSvg from "../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import eyeSvg from "../../../../assets/images/portal/cabinetVolunteer/eye.svg";
import { useState } from "react";

const Card = ({ fakeDatas, postsPerPage, quiz }) => {
  return (
    <>
      {fakeDatas.slice(0, postsPerPage).map((el, index) => (
        <div key={index} className="card">
          <img src={el.img} alt="img" />
          <div className="card-bottomBox">
            <h1>{el.header}</h1>
            <p>{el.body}</p>
            {quiz ? (
              <div className="card-bottomBox-quizEnded">
                <p>VIKTORINA YAKUNLANDI!</p>
              </div>
            ) : (
              <div className="card-bottomBox-timerBox">
                <div className="card-bottomBox-timerBox-box">
                  <span>{el.timer[0]}</span>
                  <span>Kun</span>
                </div>
                <div className="card-bottomBox-timerBox-vl"></div>
                <div className="card-bottomBox-timerBox-box">
                  <span>{el.timer[1]}</span>
                  <span>Soat</span>
                </div>
                <div className="card-bottomBox-timerBox-vl"></div>
                <div className="card-bottomBox-timerBox-box">
                  <span>{el.timer[2]}</span>
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
                Ishritok etish
              </motion.button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
