import "./CardComp.scss";
import { motion } from "framer-motion";

const CardComp = ({ el, index, fakeBodyData, calendarSvg, eyeSvg }) => {
  return (
    <div key={index} className="singleCard">
      <div className="singleCard-imgCont">
        <img src={el.img} alt="img" />
        {/* <span>{el.status}</span> */}
      </div>
      <div className="singleCard-bodyCont">
        <h1>{el.headText}</h1>
        <p>{el.bodyText}</p>
        <div className="singleCard-bodyCont-btnCont">
          {fakeBodyData[index].selectType.map((text, index) => (
            <motion.button
              animate={{ x: [250, -250] }}
              transition={{ duration: 30, repeat: Infinity }}
              whileHover={{ cursor: "pointer" }}
              key={index}
            >
              {text}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="singleCard-hrl"></div>
      <div className="singleCard-dateAndViewCont">
        <div>
          <img src={calendarSvg} alt="cal" />
          <span>{el.date}</span>
        </div>
        <div>
          <img src={eyeSvg} alt="eye" />
          <span>{el.views}</span>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
