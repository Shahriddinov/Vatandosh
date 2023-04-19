import React from "react";
import { Link } from "react-router-dom";
import { webinar } from "../../../webinar";
import { CalendarIcon } from "../../../../../../../assets/images/expert";
import './WebinarEvents.scss'

function WebinarEvents() {
  return (
    <div className="webinar">
      <div className="container">
        <div className="webinar-list">
          <h3 className="webinar-name">Tadbirlar</h3>
          <div className="webinar-lists">
            <Link to="/" className="webinar-top">
              Vebinarlar
            </Link>
            <Link to="/" className="webinar-tops">
              Konferensiyalar
            </Link>
          </div>
        </div>
        <div className="webinar-page">
          {webinar.map((webinar) => (
            <div className="webinar-box">
              <img src={webinar.image} alt="" className="webinar-img" />
              <span>
                <img src={CalendarIcon} />
                <p>12.02.2023</p>
              </span>
              <h5 className="webinar-names">{webinar.title}</h5>
              <p className="webinar-text">{webinar.text}</p>
              <div className="webinar-bottom">
                <Link className="webinar-more">Batafsil</Link>
                <Link className="webinar-links">Ishtirok etish</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebinarEvents;
