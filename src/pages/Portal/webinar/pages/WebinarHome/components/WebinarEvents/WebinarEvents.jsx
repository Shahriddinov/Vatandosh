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
              }
            >
              {t("webinar.webinars")}
            </button>
            <button
              onClick={() => setEventType("conference")}
              className={
                eventType == "conference" ? "webinar-top" : "webinar-tops"
              }
            >
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
                <p>{webinar.start_date}</p>
              </span>
              <h5 className="webinar-names">{webinar.title}</h5>
              <p className="webinar-text">{webinar.description}</p>
              <div className="webinar-bottom">
                <Link
                  to={`/portal-category/webinar/online-webinar/${webinar.id}`}
                  className="webinar-more"
                >
                  {t("more")}
                </Link>
                <Link
                  to={`/portal-category/webinar/webinar-register/${webinar.id}`}
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
