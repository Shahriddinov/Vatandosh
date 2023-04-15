import React from "react";
import "./associationsCard.scss";
import Flag from "../../../../../assets/images/flagkgz.png";
import Logo from "../../../../../assets/images/associationLogo.png";
import { Link } from "react-router-dom";

const AssociationsCard = () => {
  return (
    <div className="association__card">
      <div className="association__country">
        <img src={Flag} alt="" />
        Qirg'iziston
      </div>
      <div className="association__info">
        <p className="association__name">
          Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi
        </p>
        <img src={Logo} alt="" />
      </div>
      <p>Chop etilgan maqolalar soni: 10</p>
      <Link
        to={`/portal-category/community-association/country/Ukraine/1`}
        className="more__button"
      >
        Batafsil
      </Link>
    </div>
  );
};

export default AssociationsCard;
