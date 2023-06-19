import React from "react";
import "./MoreVictorina.scss";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { useEffect } from "react";
import VictorinaCard from "../VictorinaHome/components/victorinaCard/VictorinaCard";
import { useTranslation } from "react-i18next";

function MoreVictorina() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizSlice.data.quizzes);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getQuizz({ status: 1 }));
  }, [lan, dispatch]);
  return (
    <div className="morevictorina">
      <div className="container">
        <h2 className="victorina-name">{t("victorinas.victorinas")}</h2>
        <div className="victorina-page">
          {quizData?.map((victorina, index) => (
            <VictorinaCard victorina={victorina} key={index} url="" />
          ))}
        </div>
        {/* <a href="#" className="morevictorina-finish">
          <img src={ExcludeIcon} alt="" className="victorinafinish-cion" />
          Barcha viktorinalar
        </a> */}
      </div>
    </div>
  );
}

export default MoreVictorina;
