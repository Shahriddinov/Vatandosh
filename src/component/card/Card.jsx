import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./card.scss";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { baseServerUrl } from "../../services/api/utils";
import { getTagSearch } from "../../reduxToolkit/tagSearchSlice/extraReducer";

const Card = (props) => {
  const lan = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tags = props?.tags?.split(",");

  const handleClick = (e) => {
    dispatch(getTagSearch(e.target.innerText));
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
        <img
          src={`${baseServerUrl}/${props.image}`}
          alt={props[`title_${lan}`]}
        />
      </div>
      <div className="news-information">
        <Link to={`/${props.pathUrl}/${props.id}`}>
          <h5 className="news__card-title">{props[`title_${lan}`]}</h5>
          <p
            className="news__card-text"
            dangerouslySetInnerHTML={{
              __html: props[`text_${lan}`],
            }}
          />
        </Link>
      </div>
      <div className="tags-box">
        <div className="animation-box">
          {tags?.map((tag, id) => (
            <div className="tag-item" onClick={(e) => handleClick(e)} key={id}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <div className="news-date">
          <BsFillCalendarEventFill />
          <span>{props.data}</span>
        </div>
        <div className="news-views">
          <IoEye />
          <span>{props.viewers === null ? 0 : props.viewers}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
