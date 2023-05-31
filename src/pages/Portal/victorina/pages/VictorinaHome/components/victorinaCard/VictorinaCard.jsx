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
const VictorinaCard = ({ victorina, url }) => {
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

  //   console.log(victorina);

  return (
    <div key={victorina.id} className="victorina-item">
      <img
        src={`${imageUrl}/${victorina?.image}`}
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
        <p dangerouslySetInnerHTML={{ __html: victorina.description }} />
        {victorina.status === 1 ? (
          <div className="victorina-item__list">
            <span className="victorina-item__item">
              <p>{timeData.days}</p>
              <p>Kun</p>
            </span>
            <span className="victorina-item__item">
              <p>{timeData.hours}</p>
              <p>Soat</p>
            </span>
            <span className="victorina-item__item">
              <p>{timeData.minutes}</p>
              <p>Daqiqa</p>
            </span>
          </div>
        ) : (
          <button className="victorina-item-button">
            VIKTORINA YAKUNLANDI!
          </button>
        )}
        <Link
          to={`/portal-category/victorina${
            url ? `/${url}` : ""
          }/image-project/${victorina.id}`}
          className="victorina-item-link"
        >
          Batafsil ma'lumot
        </Link>
      </div>
    </div>
  );
};

export default VictorinaCard;
