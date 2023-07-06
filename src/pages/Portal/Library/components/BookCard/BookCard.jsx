import React from "react";
import "./bookCard.scss";

import FullStar from "../../../../../assets/images/library/fullStar.svg";
import EmptyStar from "../../../../../assets/images/library/emptyStar.svg";
import { Link } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const BookCard = ({ thumbnail, title, author, stars, id, viewers }) => {
  const fullStars = Math.floor(stars / 2);
  const emptyStars = 5 - fullStars;

  const starsImg = [];

  for (let i = 0; i < fullStars; i++) {
    starsImg.push(<img src={FullStar} alt="" key={i} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    starsImg.push(<img src={EmptyStar} alt="" key={i + 6} />);
  }

  return (
    <Link to={`/portal-category/library/about/${id}`}>
      <div className="book__card">
        <div className="book__cover">
          <img src={`${PORTAL_IMAGE_URL}${thumbnail}`} alt="" />
        </div>
        <div className="book__info">
          <h3>{title}</h3>
          <p>{author}</p>
          <div className="book__rating">
            <p>{stars / 2}</p>
            {starsImg}
            <span>({viewers})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
