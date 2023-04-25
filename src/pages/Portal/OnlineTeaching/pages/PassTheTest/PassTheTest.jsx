import { useTranslation } from "react-i18next";
import { ExpertTitle } from "../../../expert/components";
import "./PassTheTest.scss";
import { useState } from "react";
import VideoTutorial from "./components/VideoTutorial/VideoTutorial";
import Presentation from "./components/Presentation/Presentation";

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
        <VideoTutorial activeNav={activeNav} />
        <Presentation activeNav={activeNav} />
      </div>
    </main>
  );
}
