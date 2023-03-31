import React from "react";
import OfferStatesFriendship from "../components/offerStatesFriendship";
import SiteHero from "../../../component/siteHero/SiteHero";
import StatesFriendshipInfo from "../components/statesFriendshipInfo";
import bgImg from "../../../assets/images/compatriots/chehiya.png";

import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { MiniSlider } from "../../../component/miniSlider/MiniSlider";
import { useTranslation } from "react-i18next";

import { useAssociationFetching } from "../hooks/useAssociationFetching";

import "./statesFriendshipSociety.scss";
import { Spinner } from "../../../component";
import { useParams } from "react-router-dom";
import data from "../../Projects/data";
import { useSelector } from "react-redux";

const StatesFriendshipSociety = () => {
  const {
    associationData,
    associationCategoryData,
    error,
    associationLoading,
    associationCategoryLoading,
  } = useAssociationFetching();
  const lng = useSelector((state) => state.language.language);
  const { categoryId } = useParams();
  const { t } = useTranslation();

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

  const categoryData = associationCategoryData.find(
    (category) => category.id === categoryId * 1
  );
  const countryData = associationData.find(
    (country) => country.id === categoryData.country_uz * 1
  );

  const dataHero = {
    title: categoryData[`title_${lng}`],
    description: countryData[`info_${lng}`],
    pagePath: [
      { id: 1, label: "Asosiy sahifa", path: "/" },
      {
        id: 1,
        label: t("citizin_items.item3"),
        path: "/compatriots/public-associations",
      },
      { id: 1, label: categoryData[`title_${lng}`], path: null },
    ],
  };

  return (
    <>
      <div className="state-friendship-society">
        <div
          className="state-friendship-society__head"
          style={{
            backgroundImage: `url(https://vatanparvarbackend.napaautomotive.uz/storage/${countryData.background_flags})`,
          }}
        >
          <WhriteHeader />
          <SiteHero {...dataHero} />
        </div>

        <main className="main">
          <StatesFriendshipInfo {...categoryData} />
          <OfferStatesFriendship {...categoryData} />
          <MiniSlider title={`${t("event")}`} />
        </main>
      </div>
    </>
  );
};

export default StatesFriendshipSociety;
