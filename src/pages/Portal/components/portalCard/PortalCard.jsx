import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./portalCard.scss";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import { getDate } from "../../../../config/constants";

const PortalCard = (props) => {
  const navigate = useNavigate();

  const tags = props?.tags
    ? props?.tags?.split(",")
    : ["Kun fotosi", "Yosh oila"];

  const handleClick = (e) => {
    navigate(`/hashtag/${e.target.innerText}`);
  };

  return (
    <div
      className="single-card"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="img-container">
        <img src={`${PORTAL_IMAGE_URL}${props.image}`} alt={props.title} />
      </div>
      <div className="news-information">
        <Link to={`/${props.pathUrl}/${props.id}`}>
          <h5 className="news__card-title">{props.title}</h5>
          <p
            className="news__card-text"
            dangerouslySetInnerHTML={{
              __html: props.body,
            }}
          />
        </Link>
      </div>
      {tags?.length ? (
        <div className="tags-box">
          <div className="animation-box">
            {tags?.map((tag, id) => {
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
            })}
          </div>
        </div>
      ) : null}
      <div className="card-footer">
        <div className="news-date">
          <BsFillCalendarEventFill />
          <span>
            <span>
              {getDate(props?.created_at).getDay().length > 2
                ? getDate(props?.created_at).getDay()
                : `0${getDate(props?.created_at).getDay()}`}
            </span>
            .
            <span>
              {getDate(props?.created_at).getMonth().length > 2
                ? getDate(props?.created_at).getMonth()
                : `0${getDate(props?.created_at).getMonth()}`}
            </span>
            .<span>{getDate(props?.created_at).getFullYear()}</span>
          </span>
        </div>
        <div className="news-views">
          <IoEye />
          <span>
            {props?.view?.toString().length >= 4
              ? props?.view % 1000 > 1
                ? (props?.view / 1000).toFixed(1) + "K"
                : (props?.view / 1000).toFixed()
              : props?.view}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortalCard;
