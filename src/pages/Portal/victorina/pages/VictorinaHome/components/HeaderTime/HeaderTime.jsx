import React from "react";
import { RightIcon } from "../../../../../../../assets/images/victorina";
import "./HeaderTime.scss";

function HeaderTime() {
  return (
    <div className="headertime">
      <div className="container">
        <div className="headertime-list">
          <h3 className="headertime-title">Eng yaxshi rasmlari loyihasi</h3>
          <div className="headertime-page">
            <div className="headertime-box">
              <span>12</span>
              <p>Kun</p>
            </div>
            <div className="headertime-box">
              <span>25 </span>
              <p>SOAT</p>
            </div>
            <div className="headertime-box">
              <span>45</span>
              <p>DAQIQA</p>
            </div>
          </div>
          <div className="headertime-item">
            <button className="headertime-button">Batafsil ma’lumot</button>
            <div className="headertime-lists">
              <button className="headertime-left">
                <img src={RightIcon} alt="" className="headertime-icon" />
              </button>
              <button className="headertime-left">
                <img
                  style={{ transform: "rotate(180deg)" }}
                  src={RightIcon}
                  alt=""
                  className="headertime-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTime;
