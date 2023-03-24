import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./card.scss";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";

const Card = (props) => {
  const lan = useSelector((state) => state.language.language);
  return (
    <div className="single-card">
      <div className="img-container">
        <img
          src={`https://vatanparvarbackend.napaautomotive.uz/storage/${props.img}`}
          alt={props[`title_${lan}`]}
        />
      </div>
      <div className="news-information">
        <Link to={`/news-detail/${props.id}`}>
          <h5 className="news__card-title">{props[`title_${lan}`]}</h5>
          <p
            className="news__card-text"
            dangerouslySetInnerHTML={{
              __html: props[`text_${lan}`],
            }}
          />
        </Link>
      </div>
      <div className="card-footer">
        <div className="news-date">
          <BsFillCalendarEventFill />
          <span>{props.date}</span>
        </div>
        <div className="news-views">
          <IoEye />
          <span>{props.viewers}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
