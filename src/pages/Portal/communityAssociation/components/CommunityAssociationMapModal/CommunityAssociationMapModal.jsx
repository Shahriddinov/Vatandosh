import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Spinner from "../../../../../component/Spinner/Spinner";
import { baseServerUrl } from "../../../../../services/api/utils";
import "./communityAssociationMapModal.scss";

const CommunityAssociationMapModal = ({ changeActive, countryCode }) => {
  const mapData = useSelector((state) => state.mapSlice.mapData);
  const error = useSelector((state) => state.mapSlice.error);
  const mapLoading = useSelector((state) => state.mapSlice.mapDataLoading);
  const countries = useSelector((state) => state.mapSlice.countries);
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const countryName = {
    name: countries?.find((el) => el.country_flag_code === countryCode)[
      `country_name_${lng}`
    ],
  };

  const handleClick = (e) => {
    if (e.target.matches(".communityAssociationMapModal")) {
      changeActive(false);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="communityAssociationMapModal" onClickCapture={handleClick}>
      {mapLoading ? (
        <div className="communityAssociationMapModal__loading">
          <Spinner />
        </div>
      ) : (
        <div className="communityAssociationMapModal__card">
          {mapData.length === 0 ? (
            <>
              <b className="communityAssociationMapModal__card-error">
                {t("mapErrorText", { countryName })}
              </b>
            </>
          ) : (
            <>
              <div className="communityAssociationMapModal__body">
                <div className="communityAssociationMapModal__body_top">
                  <img
                    className="communityAssociationMapModal__body_img"
                    src={`${baseServerUrl}/${mapData[0]?.country_flag}`}
                    alt={mapData[0][`title_${lng}`]}
                  />
                  <div className="communityAssociationMapModal__body_top--box">
                    <h4 className="communityAssociationMapModal_title">
                      {mapData[0][`title_${lng}`]
                        ? mapData[0][`title_${lng}`]
                        : "Uzbekiston"}
                    </h4>
                  </div>
                </div>

                <div className="communityAssociationMapModal__body_content">
                  <b className="communityAssociationMapModal__body_count">10</b>
                  <p className="communityAssociationMapModal__body_text">
                    Всего общественных организаций
                  </p>
                </div>

                <Link
                  to={`/portal-category/community-association/country/${mapData[0]?.title_en.toLowerCase()}`}
                  className="communityAssociationMapModal__body_link"
                >
                  Barchasini ko‘rish
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CommunityAssociationMapModal;
