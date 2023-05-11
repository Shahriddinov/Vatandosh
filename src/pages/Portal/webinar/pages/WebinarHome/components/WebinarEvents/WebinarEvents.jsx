import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { webinar } from "../../../webinar";
import { CalendarIcon } from "../../../../../../../assets/images/expert";
import "./WebinarEvents.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMeetingAll } from "../../../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { Spinner } from "../../../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

function WebinarEvents() {
  const { t } = useTranslation();
  const meetingsData = useSelector((store) => store.meetingSlice.meetingsData);
  const meetingsloading = useSelector(
    (store) => store.meetingSlice.meetingsloading
  );
  const meetingError = useSelector((store) => store.meetingSlice.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingAll());
  }, []);

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
            <Link
              to={"/portal-category/webinar/webinar-events/webinars"}
              className="webinar-top"
            >
              Vebinarlar
            </Link>
            <Link
              to="/portal-category/webinar/webinar-events/conferences"
              className="webinar-tops"
            >
              Konferensiyalar
            </Link>
          </div>
        </div>
        <div className="webinar-page">
          {meetingsData.meetings?.map((webinar) => (
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
