import React from "react";
import OfferStatesFriendship from "../components/offerStatesFriendship";
import SiteHero from "../../../component/siteHero/SiteHero";
import StatesFriendshipInfo from "../components/statesFriendshipInfo";

import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { MiniSlider } from "../../../component/miniSlider/MiniSlider";
import { useTranslation } from "react-i18next";

import { useAssociationFetching } from "../hooks/useAssociationFetching";

import "./statesFriendshipSociety.scss";
import { Spinner } from "../../../component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StatesFriendshipSociety = () => {
  const lan = useSelector((state) => state.language.language);

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
    return <Spinner position={"full"} />;
  } else if (associationCategoryLoading) {
    return <Spinner position={"full"} />;
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
    [`menu_${lan}`]: categoryData[`title_${lng}`],
    [`info_${lan}`]: countryData[`info_${lng}`],
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
          <SiteHero data={dataHero} />
        </div>

        <main className="main">
          <StatesFriendshipInfo {...categoryData} />
          <OfferStatesFriendship {...categoryData} />
          <MiniSlider title={`${t("event")}`} pathUrl="events" />
        </main>
      </div>
    </>
  );
};

export default StatesFriendshipSociety;
