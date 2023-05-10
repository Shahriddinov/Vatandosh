import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { getDate } from "../../../../../config/constants";

import "./CommunityCard.scss";

const CommunityCard = (props) => {
  const lan = useSelector((state) => state.language.language);
  const navigate = useNavigate();

  const tags = props[`tag_${lan}`]?.split(",");

  const handleClick = (e) => {
    navigate(`/hashtag/${e.target.innerText}`);
  };

  const text = props.content.replace(/<[^>]+>/g, "");

  return (
    <div
      className="single-card"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="img-container">
        <img src={`${PORTAL_IMAGE_URL}/${props.image}`} alt={props.title} />
      </div>
      <div className="news-information">
        <Link to={`/${props.pathUrl}/${props.id}`}>
          <h5 className="news__card-title">{props[`title_${lan}`]}</h5>
          <p className="news__card-text">
            {text.length > 110 ? text.slice(0, 110) + "..." : text}
          </p>
        </Link>
      </div>
      {["Italiya", "Yosh oila", "Kun fotosi", "Yosh oila"]?.length ? (
        <div className="tags-box">
          <div className="animation-box">
            {["Italiya", "Yosh oila", "Kun fotosi", "Yosh oila"]?.map(
              (tag, id) => {
                if (tag !== null) {
                  return (
                    <div
                      className="tag-item"
                      onClick={(e) => handleClick(e)}
                      key={id}
                    >
                      {tag}
                    </div>
                  );
                }
              }
            )}
          </div>
        </div>
      ) : null}
      <div className="card-footer">
        <div className="news-date">
          <BsFillCalendarEventFill />
          <span>
            <span>
              {getDate(props?.date).getDay().length > 2
                ? getDate(props?.date).getDay()
                : `0${getDate(props?.date).getDay()}`}
            </span>
            .
            <span>
              {getDate(props?.date).getMonth().length > 2
                ? getDate(props?.date).getMonth()
                : `0${getDate(props?.date).getMonth()}`}
            </span>
            .<span>{getDate(props?.date).getFullYear()}</span>
          </span>
        </div>
        <div className="news-views">
          <IoEye />
          <span>{props?.viewers === null ? 0 : props.viewers} 0</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
