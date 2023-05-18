import React, { useEffect } from "react";
import "./style.scss";
import WhriteHeader from "../../../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../../../boardTrustees/components/council-hero/CouncilHero";
import { useTranslation } from "react-i18next";
import { getDirection } from "../../../../reduxToolkit/Direction/Direction";
import { useSelector, useDispatch } from "react-redux";
import { baseServerUrl } from "../../../../services/api/utils";

function BasicDirection(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const directionsData = useSelector(
    (state) => state.directionSlice.directionData
  );
  const lan = useSelector((state) => state.language.language);
  const error = useSelector((state) => state.directionSlice.error);
  const errorDirection = useSelector((state) => state.directionSlice.error);
  const heroData = {
    title: `Fond faoliyatining asosiy yo‘nalishlari`,
    pagePath: `Yo'nalishlar`,
  };

  useEffect(() => {
    dispatch(getDirection());
  }, [dispatch]);

  if (error || errorDirection) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <div className="about_direction_cards container">
        {directionsData?.map((item, index) => (
          <div key={item.id} className="about_direction_cards_boxs">
            <img src={`${baseServerUrl}/${item.img}`} alt="partner" />
            <div className="about_direction_cards_boxs_describtion">
              {item[`name_${lan}`]}
            </div>
            <img
              className="about_direction_cards_boxs_img"
              src={`${baseServerUrl}/${item.bgimg}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default BasicDirection;
