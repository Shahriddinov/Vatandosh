import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { baseServerUrl } from "../../../../../services/api/utils";
import "./communityAssociationMapModal.scss";
import { UzFlag } from "../../../../../assets/images/communityAssociation";
import { useCommunityAssociationModalFetching } from "./hooks/useCommunityAssociationModalFetching ";
import { Spinner } from "../../../../../component";

const CommunityAssociationMapModal = ({ changeActive }) => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    if (e.target.matches(".communityAssociationMapModal")) {
      changeActive(false);
    }
  };
  const country = useSelector((state) => state.community.singleRegion);

  console.log(country);

  return (
    <div className="communityAssociationMapModal" onClickCapture={handleClick}>
      <div className="communityAssociationMapModal__card">
        <div className="communityAssociationMapModal__body">
          <div className="communityAssociationMapModal__body_top">
            <img
              className="communityAssociationMapModal__body_img"
              src={country.flag ? `${baseServerUrl}/${country?.image}` : UzFlag}
              alt={country?.name}
            />
            <div className="communityAssociationMapModal__body_top--box">
              <h4 className="communityAssociationMapModal_title">
                {country?.name}
              </h4>
            </div>
          </div>

          <div className="communityAssociationMapModal__body_content">
            <b className="communityAssociationMapModal__body_count">
              {country.count ? country?.count : 0}
            </b>
            <p className="communityAssociationMapModal__body_text">
              {t("communityAssociation.total_public_organizations")}
            </p>
          </div>

          <Link
            to={`/portal-category/community-association/country/${country?.id}`}
            className="communityAssociationMapModal__body_link"
          >
            {t("communityAssociation.view_all")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityAssociationMapModal;
