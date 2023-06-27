import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import winner from "../../../../../assets/images/victorina/win.png";
import polygon from "../../../../../assets/images/victorina/polygon.png";
import "./VictorinaWinner.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getByIdQuizz } from "../../../../../reduxToolkit/victorinaQuiz/quizbyid/quizid";
import { Spinner } from "../../../../../component";

function VictorinaWinnerWin() {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const quizData = useSelector((state) => state.quizByIdSlice.quizByIdData);
  const quizDataLoading = useSelector((state) => state.quizByIdSlice.loading);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  useEffect(() => {
    dispatch(getByIdQuizz({ id }));
  }, [dispatch, id, lan]);

  if (quizDataLoading) {
    return <Spinner position="full" />;
  }

  const title = quizData?.title?.split(" ");
  return (
    <div className="winnervictorina">
      <div className="container">
        <div className="winnervictorina-top">
          <h1 className="winnervictorina__title">{quizData?.title}</h1>
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
                {title?.slice(0, 3) + title.length > 3 ? "..." : ""}
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
            <h2 className="winnervictorina-name">{quizData?.title}</h2>
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
