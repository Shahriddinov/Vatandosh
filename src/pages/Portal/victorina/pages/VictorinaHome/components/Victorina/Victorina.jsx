import React from "react";
import {
  CalendarIcon,
  ViewIcon,
} from "../../../../../../../assets/images/expert";
import "./Victorina.scss";
import { victorine } from "../../../victorina";

function Victorina() {
  return (
    <div className="victorina">
      <div className="container">
        <h2 className="victorina-name">Viktorinalar</h2>
        <div className="victorina-page">
          {victorine.map((victorina, index) => (
            <div key={index} className="victorina-list">
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
                  href="/portal-category/victorina/image-project"
                  className="victorina-link"
                >
                  Batafsil ma'lumot
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Victorina;
