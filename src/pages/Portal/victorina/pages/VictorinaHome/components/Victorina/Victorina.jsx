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

function Victorina({ quizData }) {
  console.log(quizData);
  return (
    <div className="victorina">
      <div className="container">
        <h2 className="victorina-name">Viktorinalar</h2>
        <div className="victorina-page">
          {quizData?.map((victorina, index) => (
            <VictorinaCard victorina={victorina} key={index} url="" />
          ))}
        </div>
        <Link className="victorina_link" to="victorina-more">
          <img src={ExcludeIcon} alt="error" />
          Barcha viktorinalar
        </Link>
      </div>
    </div>
  );
}

export default Victorina;
