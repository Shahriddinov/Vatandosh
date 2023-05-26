import "./PublicAssociations.scss";
import { Link } from "react-router-dom";
import arrowRight from "../../../assets/images/about/arrow-right.svg";

import bodyIcon from "../../../assets/images/portal/cabinetVolunteer/bodyIcon.png";
import flagIcon from "../../../assets/images/portal/cabinetVolunteer/flag.png";
import { motion } from "framer-motion";

const fakeData = [
  {
    id: 1,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 10,
  },
  {
    id: 2,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 5,
  },
  {
    id: 3,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 2,
  },
  {
    id: 4,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 7,
  },
  {
    id: 5,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 56,
  },
];

const PublicAssociations = () => {
  return (
    <div className="choicesPAContainer">
      <div className="choicesPAContainer-header">
        <h1>Jamoat birlashmalari</h1>
        <ul>
          <li>
            <Link to="/">mainPage</Link>
            <img src={arrowRight} alt="breadcrumb line" />
          </li>
          <li aria-current="page">quiz</li>
        </ul>
      </div>
      <div className="choicesPAContainer-body">
        {fakeData.map((el, index) => (
          <div key={index} className="choicesPAContainer-body-card">
            <div className="choicesPAContainer-body-card_cardTop">
              <img src={el.flag} alt="flag" />
              <span>{el.country}</span>
            </div>
            <div className="choicesPAContainer-body-card_hl"></div>
            <p className="choicesPAContainer-body-card_text">
              Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi
            </p>
            <img src={el.channel} alt="channel" />
            <p className="choicesPAContainer-body-card_bottomText">
              Chop etilgan maqolalar: {el.count}
            </p>
            <motion.button whileTap={{ scale: 0.9 }}>Batafsil</motion.button>
          </div>
        ))}
      </div>
      <div className="choicesPAContainer-btnCont">
        <button>
          <img src="" alt="icon" />
          <span>Всё</span>
        </button>
      </div>
    </div>
  );
};

export default PublicAssociations;
