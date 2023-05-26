import "./quizzes.scss";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../../assets/images/communityAssociation";
import { useState } from "react";
import eventImg from "../../../assets/images/portal/cabinetVolunteer/event.png";
import calImg from "../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import { motion } from "framer-motion";

const fakeData = [
  {
    id: 1,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
  {
    id: 2,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [5, 10, 12],
  },
  {
    id: 3,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [12, 7, 58],
  },
  {
    id: 4,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
];

const btnArr = [
  {
    id: 1,
    name: "Viktorinalar",
  },
  {
    id: 2,
    name: "Viktorina yakunlanganlar",
  },
];

const Quizzes = () => {
  const [activeBtn, setActiveBtn] = useState(btnArr[0]);
  return (
    <div className="choices-quiz-Container">
      <div className="choices-quiz-Container-header">
        <h1>Viktorina yakunlanganlar</h1>
        <ul>
          <li>
            <Link to="/">mainPage</Link>
            <img src={ArrowRight} alt="breadcrumb line" />
          </li>
          <li aria-current="page">quiz</li>
        </ul>
      </div>
      <div className="choices-quiz-Container-btnCont">
        {btnArr.map((el, index) => (
          <button
            onClick={() => setActiveBtn(el)}
            className={el.id === activeBtn.id && "active"}
            key={index}
          >
            {el.name}
          </button>
        ))}
      </div>
      {activeBtn.id === 1 ? (
        <div className="choices-quiz-Container-bodyCont">
          {fakeData.map((el, index) => (
            <div key={index} className="container-events-inner-box-each">
              <img src={el.img} alt="img" />
              <div className="container-events-inner-box-each_bottomBox">
                <div className="container-events-inner-box-each_bottomBox-dateBox">
                  <img src={calImg} alt="calIcon" />
                  <span>{el.data}</span>
                </div>
                <h1>{el.header}</h1>
                <p>{el.body}</p>
                <div className="container-events-inner-box-each_bottomBox-timerBox">
                  <div className="container-events-inner-box-each_bottomBox-timerBox-box">
                    <span>{el.timer[0]}</span>
                    <span>Kun</span>
                  </div>
                  <div className="container-events-inner-box-each_bottomBox-timerBox-vl"></div>
                  <div className="container-events-inner-box-each_bottomBox-timerBox-box">
                    <span>{el.timer[1]}</span>
                    <span>Soat</span>
                  </div>
                  <div className="container-events-inner-box-each_bottomBox-timerBox-vl"></div>
                  <div className="container-events-inner-box-each_bottomBox-timerBox-box">
                    <span>{el.timer[2]}</span>
                    <span>Daqiqa</span>
                  </div>
                </div>

                <div className="container-events-inner-box-each_bottomBox-btnBox">
                  <motion.button whileTap={{ scale: 0.9 }}>
                    Batafsil
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.9 }}>
                    Ishritok etish
                  </motion.button>
                </div>
              </div>
            </div>
          ))}

          <div className="choices-quiz-Container-bodyCont-bottomBtn">
            <button>
              <img src="" alt="icon" />
              <span>
                {activeBtn.id === 1
                  ? "Barcha Viktorina yakunlanganlar"
                  : "Barcha viktorinalar"}
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="choices-quiz-Container-bodyCont">
          <div className="choices-quiz-Container-bodyCont-bottomBtn">
            {fakeData.map((el, index) => (
              <div key={index} className="container-events-inner-box-each">
                <img src={el.img} alt="img" />
                <div className="container-events-inner-box-each_bottomBox">
                  <div className="container-events-inner-box-each_bottomBox-dateBox">
                    <img src={calImg} alt="calIcon" />
                    <span>{el.data}</span>
                  </div>
                  <h1>{el.header}</h1>
                  <p>{el.body}</p>
                  <div className="container-events-inner-box-each_bottomBox-timerBox">
                    <div className="container-events-inner-box-each_bottomBox-timerBox-box">
                      <span>{el.timer[0]}</span>
                      <span>Kun</span>
                    </div>
                    <div className="container-events-inner-box-each_bottomBox-timerBox-vl"></div>
                    <div className="container-events-inner-box-each_bottomBox-timerBox-box">
                      <span>{el.timer[1]}</span>
                      <span>Soat</span>
                    </div>
                    <div className="container-events-inner-box-each_bottomBox-timerBox-vl"></div>
                    <div className="container-events-inner-box-each_bottomBox-timerBox-box">
                      <span>{el.timer[2]}</span>
                      <span>Daqiqa</span>
                    </div>
                  </div>

                  <div className="container-events-inner-box-each_bottomBox-btnBox">
                    <motion.button whileTap={{ scale: 0.9 }}>
                      Batafsil
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.9 }}>
                      Ishritok etish
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}

            <button>
              <img src="" alt="icon" />
              <span>
                {activeBtn.id === 1
                  ? "Barcha Viktorina yakunlanganlar"
                  : "Barcha viktorinalar"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
