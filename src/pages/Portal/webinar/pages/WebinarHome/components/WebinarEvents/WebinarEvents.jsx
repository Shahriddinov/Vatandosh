import React from "react";
import { Link } from "react-router-dom";
import { webinar } from "../../../webinar";
import { CalendarIcon } from "../../../../../../../assets/images/expert";
import "./WebinarEvents.scss";
import { useTranslation } from "react-i18next";

function WebinarEvents() {
  const { t } = useTranslation();
  return (
    <div className="webinar">
      <div className="container">
        <div className="webinar-list">
          <h3 className="webinar-name">{t("webinar.nav2")}</h3>
          <div className="webinar-lists">
            <Link
              to="/portal-category/webinar/webinar-events"
              className="webinar-top"
            >
              Vebinarlar
            </Link>
            <Link
              to="/portal-category/webinar/webinar-events"
              className="webinar-tops"
            >
              Konferensiyalar
            </Link>
          </div>
        </div>
        <div className="webinar-page">
          {webinar?.map((webinar) => (
            <div className="webinar-box">
              <img src={webinar.image} alt="" className="webinar-img" />
              <span>
                <img src={CalendarIcon} />
                <p>12.02.2023</p>
              </span>
              <h5 className="webinar-names">{webinar.title}</h5>
              <p className="webinar-text">{webinar.text}</p>
              <div className="webinar-bottom">
                <Link
                  to="/portal-category/webinar/online-webinar/id"
                  className="webinar-more"
                >
                  {t("webinar.header2")}
                </Link>
                <Link
                  to="/portal-category/webinar/webinar-register"
                  className="webinar-links"
                >
                  {t("webinar.header1")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebinarEvents;
