import React from "react";
import {
  CalendarIcon,
  ExcludeIcon,
  ViewIcon,
} from "../../../../../../../assets/images/expert";
import "./Victorina.scss";
import { imageUrl } from "../../../../../../../services/api/utils";
import { Link } from "react-router-dom";
import VictorinaCard from "../victorinaCard/VictorinaCard";
import { useTranslation } from "react-i18next";

function Victorina({ quizData }) {
  const { t } = useTranslation();
  return (
    <div className="victorina">
      <div className="container">
        <h2 className="victorina-name">{t("victorinas.victorinas")}</h2>
        <div className="victorina-page">
          {quizData?.map((victorina, index) => (
            <VictorinaCard victorina={victorina} key={index} url="" />
          ))}
        </div>
        <Link className="victorina_link" to="victorina-more">
          <img src={ExcludeIcon} alt="error" />
          {t("choices.allQuizzes")}
        </Link>
      </div>
    </div>
  );
}

export default Victorina;
