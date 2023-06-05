import React from "react";
import CouncilHero from "../../boardTrustees/components/council-hero/CouncilHero";
import Associations from "../components/associations/Associations";

import "./publicAssociations.scss";
import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { useAssociationFetching } from "../hooks/useAssociationFetching";
import { Spinner } from "../../../component";
import { useTranslation } from "react-i18next";
import { baseServerUrl } from "../../../services/api/utils";
import "../../singlePage/singlePage.scss";

const PublicAssociations = () => {
  const {
    associationData,
    associationCategoryData,
    error,
    associationLoading,
    associationCategoryLoading,
    aboutData,
    aboutLoading,
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
  } else if (associationCategoryLoading || aboutLoading) {
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

  const styles = {
    backgroundImage: `url(${baseServerUrl}/${aboutData[0].backgroundImg})`,
  };

  return (
    <div className="public-associations">
      <div className="single-page__top" style={styles}>
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>

      <Associations data={data} />
    </div>
  );
};

export default PublicAssociations;
