import React from "react";
import "./newNumberCard.scss";

const NewNumberCard = ({ page, text, title, image }) => {
  return (
    <li className="new-number__inner_list">
      <div className="new-number-card">
        <div className="new-number-card__img">
          <img className="img" src={image} alt="" />
        </div>
        <div className="new-number-card__body">
          <b className="new-number-card__page">{page}</b>
          {text ? <p className="new-number-card__title">{text}</p> : null}
          <h4 className="new-number-card__name">{title}</h4>
        </div>
      </div>
    </li>
  );
};

export default NewNumberCard;
