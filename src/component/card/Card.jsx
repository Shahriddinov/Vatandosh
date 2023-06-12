import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./card.scss";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { PORTAL_IMAGE_URL, baseServerUrl } from "../../services/api/utils";

const Card = (props) => {
  const lan = useSelector((state) => state.language.language);
  const navigate = useNavigate();

  const tags = props[`tag_${lan}`]?.split(",");

  const handleClick = (e) => {
    navigate(`/hashtag/${e.target.innerText}`);
  };

  return (
    <div
      className="single-card"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000">
      <div className="img-container">
        <img src={`${PORTAL_IMAGE_URL}/${props.image}`} alt={props.title} />
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
                    key={id}>
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
          <span>{props.created_at.slice(0, 10)}</span>
        </div>
        <div className="news-views">
          <IoEye />
          <span>{props.view === null ? 0 : props.view}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
