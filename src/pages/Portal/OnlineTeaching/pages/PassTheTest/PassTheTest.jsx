import { useTranslation } from "react-i18next";
import { ExpertTitle } from "../../../expert/components";
import "./PassTheTest.scss";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiFillPlayCircle } from "react-icons/ai";

export default function PassTheTest() {
  const [activeNav, setActiveNav] = useState(0);
  const { t } = useTranslation();

  const url = [
    { title: t("expert.main"), url: "" },
    { title: t("news"), url: "" },
    { title: t("more"), url: "" },
  ];

  return (
    <main className="passTheTest">
      <div className="container">
        <ExpertTitle title={""} url={url} />
        <div className="passTheTest-navList">
          {[
            "Видео уроки",
            "Презентация",
            "Материалы",
            "Пройти тест",
            "Сертификат",
          ].map((el, index) => (
            <button
              key={index}
              className={
                index === activeNav
                  ? "passTheTest-navList-item passTheTest-navList-item-active"
                  : "passTheTest-navList-item"
              }
              onClick={() => setActiveNav(index)}
            >
              {el}
            </button>
          ))}
        </div>
        <div className="passTheTest-wrapper">
          <div className="passTheTest-menuList">
            <div className="passTheTest-menuList-title">
              <p>Все уроки</p>
            </div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>01. Введение</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul className="passTheTest-menuList-item-ul">
                    <li>
                      <AiFillPlayCircle />
                      <span>Welcome to our journey</span>
                    </li>
                    <li>
                      <AiFillPlayCircle />
                      <span>Structuring Language</span>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Disabled Accordion</Typography>
              </AccordionSummary>
            </Accordion>
          </div>
          <div className="passTheTest-video"></div>
        </div>
      </div>
    </main>
  );
}
