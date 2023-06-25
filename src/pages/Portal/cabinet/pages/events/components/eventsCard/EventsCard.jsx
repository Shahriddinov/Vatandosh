import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { CalendarIcon } from "../../../../../../../assets/images/expert";
import { timer } from "../../../../../../../helpers/extraFunction";
import { useTranslation } from "react-i18next";

import "./eventsCard.scss";

const EventsCard = ({ webinar }) => {
  const [timeData, setTimeDate] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  const { t } = useTranslation();

  useEffect(() => {
    const { interval } = timer({
      finishedTime: webinar?.start_date,
      setTimeDate: setTimeDate,
    });
    return () => {
      clearInterval(interval);
    };
  }, [webinar?.start_date]);

  return (
    <div className="cabinet-events-box" key={webinar?.id}>
      <img
        src={`${PORTAL_IMAGE_URL}${webinar?.image}`}
        alt=""
        className="cabinet-events-img"
      />
      <div className="cabinet-events-box__body">
        <span className="cabinet-events-box__calendar">
          <img src={CalendarIcon} alt="clear icon" />
          <p>
            {webinar?.start_date?.slice(0, 10).split("-")?.reverse()?.join(".")}
          </p>
        </span>
        <h5 className="cabinet-events-names">
          {webinar.title.split(" ").length > 6
            ? webinar?.title?.split(" ").slice(0, 6).join(" ") + "..."
            : webinar?.title}
        </h5>
        <p className="cabinet-events-text">
          {webinar?.description?.split(" ").length > 10
            ? webinar?.description?.split(" ").slice(0, 14).join(" ") + "..."
            : webinar?.description}
        </p>
        <ul className="cabinet-events-timer">
          <li className="cabinet-events-timer__item">
            <span>{timeData.days}</span>
            <span>{t("day")}</span>
          </li>
          <li className="cabinet-events-timer__item">
            <span>{timeData.hours}</span>
            <span>{t("hour")}</span>
          </li>
          <li className="cabinet-events-timer__item">
            <span>{timeData.minutes}</span>
            <span>{t("minute")}</span>
          </li>
        </ul>
        <div className="cabinet-events-box__footer">
          <Link
            to={`/portal-category/webinar/online-webinar/${webinar?.id}`}
            className="cabinet-events-more">
            {t("more")}
          </Link>
          <Link
            to={`/portal-category/webinar/webinar-register/${webinar?.id}`}
            className="cabinet-events-links">
            {t("webinar.header1")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
