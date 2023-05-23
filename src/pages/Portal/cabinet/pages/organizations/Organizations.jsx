import "./organizations.scss";
import plusIcon from "../../../../../assets/images/portal/cabinetVolunteer/plusIcon.png";
import flagIcon from "../../../../../assets/images/portal/cabinetVolunteer/flag.png";
import bodyIcon from "../../../../../assets/images/portal/cabinetVolunteer/bodyIcon.png";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { btnHandler } from "../../../../../reduxToolkit/orgPageSlice";

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

const Organizations = () => {
  const btnToggle = useSelector((state) => state.orgPageSlice.btnToggle);
  const dispatch = useDispatch();

  const toggleSwitchHandler = () => {
    dispatch(btnHandler());
  };

  return (
    <div className="container-organizations">
      <div className="container-organizations-inner">
        <div className="container-organizations-inner-top">
          <span>Участие в общественных организациях</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleSwitchHandler}
          >
            <motion.img
              animate={{ rotate: btnToggle ? 360 : 0 }}
              src={plusIcon}
              alt="icon"
            />{" "}
            <span>Tadbir</span>
          </motion.button>
        </div>

        <div className="container-organizations-inner-bottom">
          {fakeData.map((el, index) => (
            <div
              key={index}
              className="container-organizations-inner-bottom-card"
            >
              <div className="container-organizations-inner-bottom-card_cardTop">
                <img src={el.flag} alt="flag" />
                <span>{el.country}</span>
              </div>
              <div className="container-organizations-inner-bottom-card_hl"></div>
              <p className="container-organizations-inner-bottom-card_text">
                Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat
                markazi
              </p>
              <img src={el.channel} alt="channel" />
              <p className="container-organizations-inner-bottom-card_bottomText">
                Chop etilgan maqolalar: {el.count}
              </p>
              <motion.button whileTap={{ scale: 0.9 }}>Batafsil</motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizations;
