import React from "react";
import { useLocation } from "react-router-dom";
import CouncilHero from "../../boardTrustees/components/council-hero/CouncilHero";
import Associations from "../components/associations/Associations";

import "./publicAssociations.scss";
import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { useAssociationFetching } from "../hooks/useAssociationFetching";
import { Spinner } from "../../../component";
import { useTranslation } from "react-i18next";

const PublicAssociations = () => {
  const {
    associationData,
    associationCategoryData,
    error,
    associationLoading,
    associationCategoryLoading,
  } = useAssociationFetching();
  const { t } = useTranslation();
  const heroData = {
    title: `${t("citizin_items.item1")}`,
    description: `${t("aboutPage.section1.ptext1")}`,
    pagePath: `${t("citizin_items.item1")}`,
  };

  if (associationLoading) {
    return (
      <div className="spinner_box">
        <Spinner />
      </div>
    );
  } else if (associationCategoryLoading) {
    return (
      <div className="spinner_box">
        <Spinner />
      </div>
    );
  } else if (error) {
    return <p>{error}</p>;
  }
  const data = associationData.map((el, index) => {
    const categories = [];

    for (let i = 0; i < associationCategoryData?.length; i++) {
      if (el?.id === associationCategoryData[i]?.country_uz * 1) {
        categories.push(associationCategoryData[i]);
      }
    }

    return {
      ...el,
      panel: `panel${index}`,
      categories,
    };
  });

  return (
    <div className="public-associations">
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>

      <Associations data={data} />
    </div>
  );
};

export default PublicAssociations;
