import React from "react";
import { Link } from "react-router-dom";
import winner from "../../../../../assets/images/victorina/win.png";
import polygon from "../../../../../assets/images/victorina/polygon.png";
import "./VictorinaWinner.scss";

function VictorinaWinnerWin() {
  return (
    <div className="winnervictorina">
      <div className="container">
        <div className="winnervictorina-top">
          <h1>EDU BRANDING </h1>
          <ul className="winnervictorina-list">
            <li className="winnervictorina-item">
              <Link to="/" className="winnervictorina-link">
                Asosiy
              </Link>
            </li>
            <li className="winnervictorina-item">
              <img src={polygon} alt="" className="winnervictorina-icon" />
            </li>
            <li className="winnervictorina-item">
              <Link to="/" className="winnervictorina-link">
                Viktorinalar
              </Link>
            </li>
            <li className="winnervictorina-item">
              <img src={polygon} alt="" className="winnervictorina-icon" />
            </li>
            <li className="winnervictorina-item">
              <Link to="/" className="winnervictorina-link">
                EDU BRANDING
              </Link>
            </li>
            <li className="winnervictorina-item">
              <img src={polygon} alt="" className="winnervictorina-icon" />
            </li>
            <li className="winnervictorina-item">
              <p className="winnervictorina-texts">Test</p>
            </li>
          </ul>
        </div>
        <div className="winnervictorina-page">
          <div className="winnervictorina-left">
            <h2 className="winnervictorina-name">
              EDU BRANDING - Eng yaxshi ta’lim brendi tanlovi{" "}
            </h2>
            <p className="winnervictorina-succes">
              Siz tanlovdan muvafaqqiyatli qatnashdingiz
            </p>
            <Link
              to="/portal-category/victorina/victorina-more"
              className="winnervictorina-prev">
              Tanlovga qaytish
            </Link>
            <Link
              to="/portal-category/victorina/victorina-more"
              className="winnervictorina-next">
              Testni qayta ishlash
            </Link>
          </div>
          <div className="winnervictorina-right">
            <img src={winner} className="winnervictorina-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VictorinaWinnerWin;
