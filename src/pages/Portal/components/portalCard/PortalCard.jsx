import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./portalCard.scss";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import { getDate } from "../../../../config/constants";
import { isJson } from "../../../../extra";

const PortalCard = (props) => {
  const navigate = useNavigate();

  const tags = props?.tags ? props?.tags?.split(",") : null;

  const handleClick = (e) => {
    navigate(`/hashtag/${e.target.innerText}`);
  };

  const json = isJson(props.image);

  const image = json ? JSON.parse(props.image) : props.image;

  let isData = props?.data ? props?.data : props?.date;
  const date = isData
    ? isData?.slice(0, 10)?.split("-")?.reverse()?.join(".")
    : "";

  return (
    <div
      className="single-card"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="img-container">
        <img
          src={`${PORTAL_IMAGE_URL}${json ? image[0] : image}`}
          alt={props.title}
        />
      </div>
      <div className="news-information">
        <Link to={`/${props.pathUrl}/${props.id}`}>
          <h5 className="news__card-title">{props.title}</h5>
          <p
            className="news__card-text"
            dangerouslySetInnerHTML={{
              __html: props.body ? props.body : props.content,
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
            {date}
            {/* <span>
              {getDate(props?.date).getDay().length > 1
                ? getDate(props?.date).getDay()
                : `0${getDate(props?.date).getDay()}`}
            </span>
            .
            <span>
              {getDate(props?.date).getMonth().length > 1
                ? getDate(props?.date).getMonth()
                : `0${getDate(props?.date).getMonth()}`}
            </span>
            .<span>{getDate(props?.date).getFullYear()}</span> */}
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
