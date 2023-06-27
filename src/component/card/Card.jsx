import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./card.scss";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { baseServerUrl, PORTAL_IMAGE_URL } from "../../services/api/utils";

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
      data-aos-duration="1000"
    >
      <div className="img-container">
        {props.pathUrl === "news" ? (
          <img src={`${PORTAL_IMAGE_URL}/${props.image}`} alt={props.title} />
        ) : props.pathUrl === "events" ? (
          <img
            src={`${PORTAL_IMAGE_URL}/${JSON.parse(props.image)[0]}`}
            alt={props.title}
          />
        ) : props.pathUrl === "volunteer/activity" ? (
          <img
            src={`${PORTAL_IMAGE_URL}/${JSON.parse(props.images)[0]}`}
            alt={props.title}
          />
        ) : (
          <img
            src={`${baseServerUrl}/${props.image}`}
            alt={props[`title_${lan}`]}
          />
        )}
      </div>
      <div className="news-information">
        <Link
          to={
            props.pathUrl === "news"
              ? `/detail/all-news/new/${props.id}`
              : props.pathUrl === "events"
              ? `/detail/community/event/${props.id}`
              : props.pathUrl === "volunteer/activity"
              ? `/portal-category/volunteer/activity/${props.id}`
              : `/detail/${props.pathUrl}/${props.id}`
          }
        >
          {props.pathUrl === "news" ? (
            <h5 className="news__card-title">{props.title}</h5>
          ) : props.pathUrl === "events" ? (
            <h5 className="news__card-title">{props.title}</h5>
          ) : props.pathUrl === "volunteer/activity" ? (
            <h5 className="news__card-title">{props.title}</h5>
          ) : (
            <h5 className="news__card-title">{props[`title_${lan}`]}</h5>
          )}
          {props.pathUrl === "news" ? (
            <p
              className="news__card-text"
              dangerouslySetInnerHTML={{
                __html: props.body,
              }}
            />
          ) : props.pathUrl === "events" ? (
            <p
              className="news__card-text"
              dangerouslySetInnerHTML={{
                __html: props.content,
              }}
            />
          ) : props.pathUrl === "volunteer/activity" ? (
            <p
              className="news__card-text"
              dangerouslySetInnerHTML={{
                __html: props.description,
              }}
            />
          ) : (
            <p
              className="news__card-text"
              dangerouslySetInnerHTML={{
                __html: props[`text_${lan}`],
              }}
            />
          )}
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
              return null;
            })}
          </div>
        </div>
      ) : null}
      <div className="card-footer">
        <div className="news-date">
          <BsFillCalendarEventFill />
          {props.pathUrl === "news" ? (
            <span>{props?.data}</span>
          ) : props.pathUrl === "events" ? (
            <span>{props?.date}</span>
          ) : props.pathUrl === "volunteer/activity" ? (
            <span>{props?.created_at.split("T")[0]}</span>
          ) : (
            <span>{props?.data}</span>
          )}
        </div>
        <div className="news-views">
          <IoEye />
          {props.pathUrl === "news" ? (
            <span>{props.view === null ? 0 : props.view}</span>
          ) : props.pathUrl === "events" ? (
            <span>{props.view === null ? 0 : props.view}</span>
          ) : (
            <span>{props.viewers === null ? 0 : props.viewers}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
