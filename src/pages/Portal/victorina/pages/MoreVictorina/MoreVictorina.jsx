import React from "react";
import {
  CalendarIcon,
  ExcludeIcon,
  ViewIcon,
} from "../../../../../assets/images/expert";
import { victorine } from "../victorina";
import "./MoreVictorina.scss";

function MoreVictorina() {
  return (
    <div className="morevictorina">
      <div className="container">
        <h2 className="victorina-name">Viktorinalar</h2>
        <div className="victorina-page">
          {victorine.map((victorina) => (
            <div className="victorina-list">
              <img src={victorina.image} alt="" className="victorina-img" />
              <div className="victorina-items">
                <h4 className="victorina-subname">{victorina.title}</h4>
                <div className="victorina-lists">
                  <div className="victorina-item">
                    <img src={CalendarIcon} alt="" className="victorina-icon" />
                    <p>12.02.2023</p>
                  </div>
                  <div className="victorina-item">
                    <img src={ViewIcon} alt="" className="victorina-icon" />
                    <p>100 K</p>
                  </div>
                </div>
                <p className="victorina-text">{victorina.description}</p>
                <button className="victorina-button">
                  Loyiha tez orada ishga tushadi
                </button>
                <a
                  href="/portal-category/victorina/youtube-project"
                  className="victorina-link"
                >
                  Batafsil ma'lumot
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="morevictorina-finish">
          <img src={ExcludeIcon} alt="" className="victorinafinish-cion" />
          Barcha viktorinalar
        </a>
      </div>
    </div>
  );
}

export default MoreVictorina;
