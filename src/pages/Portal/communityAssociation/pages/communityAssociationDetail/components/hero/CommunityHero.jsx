import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../../../../../../assets/images/about/arrow-right.svg";

import "./communityHero.scss";
import { t } from "i18next";

const CommunityAssociationHero = ({ data, handleOpen }) => {
  const communityAssociationHeroData = {
    breadcrumbs: [
      {
        id: 1,
        label: t("communityAssociation.navbar.navbar_link1"),
        url: "/portal-category/community-association",
        active: false,
      },
      {
        id: 2,
        label: t("communityAssociation.navbar.navbar_link2"),
        url: "portal-category/community-association/associations",
        active: false,
      },
      {
        id: 3,
        label: data.findCountryCategoryData.name,
        url: null,
        active: true,
      },
    ],

    title: data.findCountry.name,
    desc: data.findCountry.description,
  };
  return (
    <section className="community-association-hero">
      <div className="community-association-hero__container container">
        <div className="community-association-hero__inner">
          <div className="community-association-hero__inner_content">
            <nav
              className="community-association-hero__breadcrumb_nav"
              aria-label="breadcrumb"
            >
              <ul className="community-association-hero__breadcrumb">
                {communityAssociationHeroData.breadcrumbs.map((item) =>
                  !item.active ? (
                    <li
                      className="community-association-hero__breadcrumb_item"
                      key={item.id}
                    >
                      <Link
                        className="community-association-hero__breadcrumb_link"
                        to={item.url}
                      >
                        {item.label}
                      </Link>
                      <img src={arrowRight} alt="breadcrumb line" />
                    </li>
                  ) : (
                    <li
                      className="community-association-hero__breadcrumb_item breadcrumb_item_active"
                      aria-current="page"
                      key={item.id}
                    >
                      {item.label}
                    </li>
                  )
                )}
              </ul>
            </nav>

            <h2 className="community-association-hero__title">
              Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati
            </h2>

            <p className="community-association-hero__desc">
              Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani
              atrofida yanada jipslashtirish, ularning qalbi va ongida yurt
              bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab
              qolish,
            </p>
            <button
              onClick={handleOpen}
              type="button"
              className="community-association-hero__btn"
            >
              {t("communityAssociation.add_news")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityAssociationHero;
