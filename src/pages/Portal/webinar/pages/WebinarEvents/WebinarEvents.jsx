import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { webinar } from "../webinar";
import { CalendarIcon } from "../../../../../assets/images/expert";
import "./WebinarEvents.scss";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../../../../component";
import { getMeetingAll } from "../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useTranslation } from "react-i18next";

function WebinarEvents() {
  const { t } = useTranslation();
  const { event } = useParams();
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
          <h3 className="webinar-name">Tadbirlar</h3>
        </div>
        {/* <div className="webinar-page">
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
                <Link className="webinar-more">Batafsil</Link>
                <Link className="webinar-links">Ishtirok etish</Link>
              </div>
            </div>
          ))}
        </div> */}
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
                  to={`/portal-category/webinar/online-webinar/${webinar.id}`}
                  className="webinar-more"
                >
                  {t("webinar.header2")}
                </Link>
                <Link className="webinar-links">{t("webinar.header1")}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebinarEvents;
