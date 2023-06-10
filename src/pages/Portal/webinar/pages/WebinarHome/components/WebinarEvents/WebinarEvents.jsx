import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { webinar } from "../../../webinar";
import { CalendarIcon } from "../../../../../../../assets/images/expert";
import "./WebinarEvents.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMeetingAll } from "../../../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { Spinner } from "../../../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { createSelector } from "@reduxjs/toolkit";

function WebinarEvents() {
  const { t } = useTranslation();
  const [eventType, setEventType] = useState("webinar");
  const [page, setPage] = useState(1);
  const сhangeMeetingsData = createSelector(
    (store) => store.meetingSlice.meetingsData,
    (meetingsData) => {
      const data = [];
      meetingsData.forEach((item) => {
        const dataFindIndex = data.findIndex((el) => el.id === item.id);
        if (dataFindIndex < 0) {
          data.push(item);
        }
      });
      return data;
    }
  );

  const meetingsData = useSelector(сhangeMeetingsData);
  const meetingsloading = useSelector(
    (store) => store.meetingSlice.meetingsloading
  );
  const meetingError = useSelector((store) => store.meetingSlice.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingAll({ page, eventType }));
  }, [eventType, page]);

  const remainingTime = (targetDate, type) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diffTime = target - now;

    if (diffTime > 0) {
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

      switch (type) {
        case "days":
          return days;
          break;
        case "hours":
          return hours;
          break;
        case "minutes":
          return minutes;
          break;

        default:
          return null;
          break;
      }
    }
  };

  if (meetingsloading) {
    return <Spinner />;
  } else if (meetingError) {
    return <p>Error</p>;
  }

  return (
    <div className="webinar">
      <div className="container">
        <div className="webinar-list">
          <h3 className="webinar-name">{t("webinar.nav2")}</h3>
          <div className="webinar-lists">
            <button
              onClick={() => setEventType("webinar")}
              className={
                eventType == "webinar" ? "webinar-top" : "webinar-tops"
              }>
              {t("webinar.webinars")}
            </button>
            <button
              onClick={() => setEventType("conference")}
              className={
                eventType == "conference" ? "webinar-top" : "webinar-tops"
              }>
              {t("webinar.conferences")}
            </button>
          </div>
        </div>
        <div className="webinar-page">
          {meetingsData.map((webinar) => (
            <div className="webinar-box" key={webinar.id}>
              <img
                src={`${PORTAL_IMAGE_URL}${webinar.image}`}
                alt=""
                className="webinar-img"
              />
              <span>
                <img src={CalendarIcon} />
                <p>{webinar.start_date.split(" ")[0]}</p>
              </span>
              <h5 className="webinar-names">{webinar.title}</h5>
              <p className="webinar-text">{webinar.description}</p>
              <div className="webinar-timer">
                <div>
                  <span>{remainingTime(webinar.start_date, "days")}</span>
                  <span>Kun</span>
                </div>
                <div>
                  <span>{remainingTime(webinar.start_date, "hours")}</span>
                  <span>Soat</span>
                </div>
                <div>
                  <span>{remainingTime(webinar.start_date, "minutes")}</span>
                  <span>Daqiqa</span>
                </div>
              </div>
              <div className="webinar-bottom">
                <Link
                  to={`/portal-category/webinar/online-webinar/${webinar.id}`}
                  className="webinar-more">
                  {t("more")}
                </Link>
                <Link
                  to={`/portal-category/webinar/webinar-register/${webinar.id}`}
                  className="webinar-links">
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
