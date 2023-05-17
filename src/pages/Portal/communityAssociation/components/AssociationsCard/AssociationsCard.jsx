import React from "react";
import "./associationsCard.scss";
import Flag from "../../../../../assets/images/flagkgz.png";
import { Link } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useTranslation } from "react-i18next";

const AssociationsCard = ({ allRegions, region_id, logo, name, news, id }) => {
  const countryInfo = allRegions.find((el) => el.id === region_id);
  const { t } = useTranslation();
  return (
    <div className="association__card">
      <div className="association__country">
        <img
          src={
            countryInfo?.flag ? `${PORTAL_IMAGE_URL}${countryInfo?.flag}` : Flag
          }
          alt=""
        />
        {countryInfo?.name}
      </div>
      <div className="association__info">
        <p className="association__name">
          {name?.length > 65 ? name?.slice(0, 65) + "..." : name?.slice(0, 65)}
        </p>
        <div className="association__info__image">
          <img src={`${PORTAL_IMAGE_URL}${logo}`} alt={name} />
        </div>
      </div>
      <p>
        {t("communityAssociation.card_articles")}: {news}
      </p>
      <Link
        to={`/portal-category/community-association/country/${countryInfo?.id}/${id}`}
        className="more__button"
      >
        {t("communityAssociation.detail")}
      </Link>
    </div>
  );
};

export default AssociationsCard;
