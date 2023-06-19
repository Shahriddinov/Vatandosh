import React from "react";
import { Link } from "react-router-dom";
import {
  Close,
  MobileEye,
  MobileLogo,
} from "../../../../../../../assets/images/communityAssociation";

import "./mobileTop.scss";
import { useContext } from "react";
import { GrayContext } from "../../../../../../../context/GrayContext";
import { useTranslation } from "react-i18next";

const MobileTop = () => {
  const { t } = useTranslation();
  const { grayScale } = useContext(GrayContext);
  return (
    <div className="header-sideBar-top">
      <Link to="/" className="header-sideBar-top__logo">
        <img
          src={MobileLogo}
          alt="Logo"
          className="header-sideBar-top__logo--img"
        />
        <span className="header-sideBar-top__logo--text">
          {t("expert.headtitle")}
        </span>
      </Link>
      <ul className="header-sideBar-top__list">
        <li className="header-sideBar-top__item">
          <button
            className="header-sideBar-top__btn"
            onClick={() => grayScale()}>
            <img
              src={MobileEye}
              alt="eye button"
              className="header-sideBar-top__btn--icon"
            />
          </button>
        </li>

        <li className="header-sideBar-top__item">
          <button className="header-sideBar-top__btn">
            <img
              src={Close}
              alt="Menu close btn"
              className="header-sideBar-top__btn--icon"
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileTop;
