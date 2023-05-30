import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import arrowRight from "../../../../assets/images/about/arrow-right.svg";

import "./councilHero.scss";

const CouncilHero = ({ title, description, pagePath }) => {
  const { t } = useTranslation();
  return (
    <section className="council-hero">
      <div className="council-hero__container container">
        <div className="council-hero__inner">
          <nav
            className="council-hero__breadcrumb_nav council-hero__breadcrumb_md"
            aria-label="breadcrumb"
          >
            <ul className="council-hero__breadcrumb">
              <li className="council-hero__breadcrumb_item">
                <Link className="council-hero__breadcrumb_link" to="/">
                  {t("mainPage")}
                </Link>
                <img src={arrowRight} alt="breadcrumb line" />
              </li>

              <li
                className="council-hero__breadcrumb_item breadcrumb_item_active"
                aria-current="page"
              >
                {pagePath}
              </li>
            </ul>
          </nav>
          <nav
            className="council-hero__breadcrumb_nav council-hero__breadcrumb_sm"
            aria-label="breadcrumb"
          >
            <ul className="council-hero__breadcrumb">
              <li className="council-hero__breadcrumb_item">
                <Link className="council-hero__breadcrumb_link" to="/">
                  {t("mainPage")}
                </Link>
                <img src={arrowRight} alt="breadcrumb line" />
              </li>

              <li
                className="council-hero__breadcrumb_item breadcrumb_item_active"
                aria-current="page"
              >
                {pagePath}
              </li>
            </ul>
          </nav>
          <h2 className="council-hero__title">{title}</h2>
          <p className="council-hero__desc">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default CouncilHero;
