import React from "react";
import "./councilCard.scss";
import phone from "../../../../assets/images/about/Phone.svg";
import mail from "../../../../assets/images/about/mail.svg";
import { useSelector } from "react-redux";
import { baseServerUrl } from "../../../../services/api/utils";

const CouncilCard = ({ trusts }) => {
  const lan = useSelector((state) => state.language.language);

  return (
    <div className="council-card">
      <div className="council-card__img-box">
        <img
          className="council-card__img"
          src={`${baseServerUrl}/${trusts?.img}`}
          alt={trusts[`position_${lan}`]}
        />
      </div>

      <div className="council-card__body">
        <h3 className="council-card__title">
          <span className="council-card__title--span">
            {trusts[`position_${lan}`]}
          </span>
          <span>{trusts[`name_${lan}`]}</span>
        </h3>

        <ul className="council-card__list">
          <li className="council-card__item">
            <span className="council-card__item--icon">
              <img src={phone} alt="" />
            </span>
            <span>{trusts?.phone}</span>
          </li>

          <li className="council-card__item">
            <span className="council-card__item--icon">
              <img src={mail} alt="email" />
            </span>
            <span>{trusts?.email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CouncilCard;
