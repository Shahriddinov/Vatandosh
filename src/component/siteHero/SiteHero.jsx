import React from "react";
import arrowRight from "../../assets/images/about/arrow-right.svg";

import "./siteHero.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SiteHero = ({ data }) => {
  const lan = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  return (
    <div className="site-hero">
      <div className="site-hero__container container">
        <div className="site-hero__inner">
          <div className="site-hero__inner_content">
            <nav className="site-hero__breadcrumb_nav" aria-label="breadcrumb">
              <ul className="site-hero__breadcrumb">
                {
                  <li className="site-hero__breadcrumb_item">
                    <Link className="site-hero__breadcrumb_link" to="/">
                      {t("mainPage")}
                    </Link>
                    <img src={arrowRight} alt="breadcrumb line" />
                  </li>
                }

                <li
                  className="site-hero__breadcrumb_item breadcrumb_item_active"
                  aria-current="page">
                  {data[`menu_${lan}`]}
                </li>
              </ul>
            </nav>

            <h2 className="site-hero__title">{data[`menu_${lan}`]}</h2>

            <p className="site-hero__desc">{data[`info_${lan}`]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteHero;
