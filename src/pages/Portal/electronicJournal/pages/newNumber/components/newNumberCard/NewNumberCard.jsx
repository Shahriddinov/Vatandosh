import React from "react";
import "./newNumberCard.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

const NewNumberCard = (props) => {
  console.log(props);
  const image = props?.images && JSON.parse(props?.images)[0];
  return (
    <li className="new-number__inner_list">
      <div className="new-number-card">
        <div className="new-number-card__img">
          <img className="img" src={`${PORTAL_IMAGE_URL}${image}`} alt="" />
        </div>
        <div className="new-number-card__body">
          <b className="new-number-card__page">{props?.pages}</b>
          {props?.short_title ? (
            <p className="new-number-card__title">{props?.short_title}</p>
          ) : null}
          <h4 className="new-number-card__name">{props?.title}</h4>
        </div>
      </div>
    </li>
  );
};

export default NewNumberCard;
