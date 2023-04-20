import React from "react";

import "./archiveCard.scss";
import { Link } from "react-router-dom";
const ArchiveCard = ({ image, date, title, text, desc }) => {
  return (
    <li className="archive-intro__item">
      <div className="archive-card">
        <div className="archive-card__img">
          <img className="img" src={image} alt={title} />
        </div>

        <div className="archive-card__body">
          <b className="archive-card__date">{date}</b>
          <h4 className="archive-card__title">{title}</h4>
          <b className="archive-card__sub_title">{text}</b>
          <p className="archive-card__desc">
            {desc.length > 254 ? desc.slice(0, 254) + "..." : desc}
          </p>

          <Link
            to="/portal-category/electronic-journal/archive"
            className="archive-card__btn"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArchiveCard;
