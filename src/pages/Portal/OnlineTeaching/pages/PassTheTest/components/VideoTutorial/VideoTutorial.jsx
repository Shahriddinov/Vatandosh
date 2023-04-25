import "./VideoTutorial.scss";
import { useState } from "react";
import img from "../../../../../../../assets/images/portal/4.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

export default function VideoTutorial({ activeNav }) {
  const [activeAccardion, setActiveAccardion] = useState(0);
  const [activeAccardionItem, setactiveAccardionItem] = useState(0);
  return (
    <div
      className={
        activeNav === 0
          ? "VideoTutorial-wrapper passTheTest-scaleActive"
          : "VideoTutorial-wrapper  passTheTest-scaleHidden"
      }
    >
      <div className="VideoTutorial-menuList">
        <div className="VideoTutorial-menuList-title">
          <p>Все уроки</p>
        </div>
        {[
          "01. Введение",
          "02. Знай концовку",
          "03. Следуйте инстинкту",
          "04. Closing",
        ].map((el, index) => (
          <Accordion
            key={index}
            disabled={activeAccardion === index ? false : true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={
                activeAccardion === index ? { background: "#F8FAFF" } : null
              }
              onFocus={() => setActiveAccardion(index)}
            >
              <div className="VideoTutorial-menuList-item-title">
                <MdLock
                  style={activeAccardion === index ? { display: "none" } : null}
                />
                <span
                  style={
                    activeAccardion === index ? { color: "#065EA9" } : null
                  }
                >
                  {el}
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="VideoTutorial-menuList-item-ul">
                {["Welcome to our journey", "Structuring Language"].map(
                  (el, index) => (
                    <li
                      key={index}
                      onClick={() => setactiveAccardionItem(index)}
                    >
                      <AiFillPlayCircle />
                      <span
                        style={
                          activeAccardionItem === index
                            ? { color: "#065EA9" }
                            : null
                        }
                      >
                        {el}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className="VideoTutorial-video">
        <div className="VideoTutorial-video-playBtn">
          <BsFillPlayFill />
        </div>
        <img src={img} alt="error" />
      </div>
    </div>
  );
}
