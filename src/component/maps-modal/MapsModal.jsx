import React from "react";
import "./maps-modal.scss";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { useTranslation } from "react-i18next";
import { baseServerUrl } from "../../services/api/utils";
import { Link } from "react-router-dom";

const MapsModal = ({ changeActive, countryCode }) => {
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
    if (e.target.matches(".maps_modal")) {
      changeActive(false);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="maps_modal" onClickCapture={handleClick}>
      {mapLoading ? (
        <div className="maps_modal__loading">
          <Spinner />
        </div>
      ) : (
        <div className="maps_modal__card">
          {mapData.length === 0 ? (
            <>
              <b className="maps_modal__card-error">
                {t("mapErrorText", { countryName })}
              </b>
            </>
          ) : (
            <>
              <div className="maps_modal__card-img">
                <img
                  className="maps_modal__img"
                  src={`${baseServerUrl}/${mapData[0]?.photo}`}
                  alt={mapData[0][`title_${lng}`]}
                />
              </div>

              <div className="maps_modal__body">
                <div className="maps_modal__body_top">
                  <img
                    className="maps_modal__body_img"
                    src={`${baseServerUrl}/${mapData[0]?.country_flag}`}
                    alt={mapData[0][`title_${lng}`]}
                  />
                  <div className="maps_modal__body_top--box">
                    <h4 className="maps_modal_title">
                      {mapData[0][`title_${lng}`]
                        ? mapData[0][`title_${lng}`]
                        : "Uzbekiston"}
                    </h4>
                    <b className="maps_modal_time">{mapData[0]?.date_tame}</b>
                  </div>
                </div>

                <ul className="maps_modal__body_list">
                  <li className="maps_modal__body_text">
                    <span className="maps_modal__body_text--span">
                      {t("modalText1")}
                    </span>
                    <span style={{ whiteSpace: "nowrap" }}>: 221</span>
                  </li>
                  <li className="maps_modal__body_text">
                    <span
                      className="maps_modal__body_text--span"
                      style={{ width: "70px" }}
                    >
                      {t("modalText2")}
                    </span>
                    <span style={{ whiteSpace: "nowrap" }}>: 1</span>
                  </li>
                  <li className="maps_modal__body_text">
                    <span
                      className="maps_modal__body_text--span"
                      style={{ width: "70px" }}
                    >
                      {t("modalText3")}
                    </span>
                    <span style={{ whiteSpace: "nowrap" }}>: 2</span>
                  </li>
                </ul>

                <Link
                  to="/information-service/news"
                  className="maps_modal__body_link"
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

export default MapsModal;
