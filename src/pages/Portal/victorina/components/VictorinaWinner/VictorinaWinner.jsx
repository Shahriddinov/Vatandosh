import React from "react";
import { Link, useParams } from "react-router-dom";
import winner from "../../../../../assets/images/victorina/win.png";
import polygon from "../../../../../assets/images/victorina/polygon.png";
import "./VictorinaWinner.scss";
import { useTranslation } from "react-i18next";

function VictorinaWinnerWin() {
  const { id } = useParams();
  const { t } = useTranslation();
  return (
    <div className="winnervictorina">
      <div className="container">
        <div className="winnervictorina-top">
          <h1>EDU BRANDING </h1>
          <ul className="winnervictorina-list">
            <li className="winnervictorina-item">
              <Link to="/" className="winnervictorina-link">
                {t("expert.main")}
              </Link>
            </li>
            <li className="winnervictorina-item">
              <img src={polygon} alt="" className="winnervictorina-icon" />
            </li>
            <li className="winnervictorina-item">
              <Link
                to="/portal-category/victorina/victorina-more"
                className="winnervictorina-link"
              >
                {t("choices.quizzes")}
              </Link>
            </li>
            <li className="winnervictorina-item">
              <img src={polygon} alt="" className="winnervictorina-icon" />
            </li>
            <li className="winnervictorina-item">
              <Link
                to={`/portal-category/victorina/image-project/${id}`}
                className="winnervictorina-link"
              >
                EDU BRANDING
              </Link>
            </li>
            <li className="winnervictorina-item">
              <img src={polygon} alt="" className="winnervictorina-icon" />
            </li>
            <li className="winnervictorina-item">
              <p className="winnervictorina-texts">{t("victorina.test")}</p>
            </li>
          </ul>
        </div>
        <div className="winnervictorina-page">
          <div className="winnervictorina-left">
            <h2 className="winnervictorina-name">
              EDU BRANDING - Eng yaxshi ta’lim brendi tanlovi{" "}
            </h2>
            <p className="winnervictorina-succes">{t("victorina.pass_test")}</p>
            <div className="winnervictorina-btnWrapper">
              <Link
                to="/portal-category/victorina/victorina-more"
                className="winnervictorina-prev"
              >
                {t("victorina.back_test")}
              </Link>
              <Link
                to={`/portal-category/victorina/image-project/${id}`}
                className="winnervictorina-next"
              >
                {t("victorina.return_test")}
              </Link>
            </div>
          </div>
          <div className="winnervictorina-right">
            <img src={winner} className="winnervictorina-image" alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VictorinaWinnerWin;
