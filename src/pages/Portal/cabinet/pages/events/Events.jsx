import "./events.scss";
import eventImg from "../../../../../assets/images/portal/cabinetVolunteer/event.png";
import calImg from "../../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
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

const Events = () => {
  return (
    <div className="container-events">
      <div className="container-events-inner">
        <h1>Мероприятия</h1>
        <div className="container-events-inner-box">
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
        </div>
      </div>
    </div>
  );
};

export default Events;
