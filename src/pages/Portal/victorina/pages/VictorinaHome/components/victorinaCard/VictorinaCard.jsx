import React from "react";
import {
  CalendarIcon,
  ViewIcon,
} from "../../../../../../../assets/images/expert";
import {
  PORTAL_IMAGE_URL,
  imageUrl,
} from "../../../../../../../services/api/utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { timer } from "../../../../../../../helpers/extraFunction";

import "./victorinaCard.scss";
import { useTranslation } from "react-i18next";
const VictorinaCard = ({ victorina, url }) => {
  const { t } = useTranslation();
  const [timeData, setTimeDate] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const { interval } = timer({
      finishedTime: victorina?.finished_at,
      setTimeDate: setTimeDate,
    });
    return () => {
      clearInterval(interval);
    };
  }, [victorina?.finished_at]);

  return (
    <div key={victorina.id} className="victorina-item">
      <img
        src={`${imageUrl}/${JSON?.parse(victorina?.image)[0]}`}
        alt=""
        className="victorina-item-img"
      />
      <div className="victorina-item-items">
        <h4 className="victorina-item-subname">{victorina.title}</h4>
        <div className="victorina-item-lists">
          <div className="victorina-item-item">
            <img src={CalendarIcon} alt="" className="victorina-item-icon" />
            <p>{victorina.started_at}</p>
          </div>
          <div className="victorina-item-item">
            <img src={ViewIcon} alt="" className="victorina-item-icon" />
            <p>{victorina.count}</p>
          </div>
        </div>
        <p
          className="victorina-item-texts"
          dangerouslySetInnerHTML={{ __html: victorina.description }}
        />
        {victorina.status === 1 ? (
          <div className="victorina-item__list">
            <span className="victorina-item__item">
              <p>{timeData.days}</p>
              <p>{t("choices.day")}</p>
            </span>
            <span className="victorina-item__item">
              <p>{timeData.hours}</p>
              <p>{t("choices.hour")}</p>
            </span>
            <span className="victorina-item__item">
              <p>{timeData.minutes}</p>
              <p>{t("choices.minute")}</p>
            </span>
          </div>
        ) : (
          <button className="victorina-item-button">
            {t("choices.quizIsOver")}
          </button>
        )}
        <Link
          to={`/portal-category/victorina${
            url ? `/${url}` : ""
          }/image-project/${victorina.id}`}
          className="victorina-item-link">
          {t("moreAbout")}
        </Link>
      </div>
    </div>
  );
};

export default VictorinaCard;
