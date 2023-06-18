import React from "react";
import StatesFriendshipInfo from "../components/statesFriendshipInfo";
import { MiniSlider, Spinner } from "../../../component";

import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { useTranslation } from "react-i18next";

import { useAssociationFetching } from "../hooks/useAssociationFetching";

import { useParams } from "react-router-dom";
import OfferStatesFriendship from "../components/offerStatesFriendship";
import { baseServerUrl } from "../../../services/api/utils";

import "./statesFriendshipSociety.scss";
import FotoGallery from "../../../component/FotoGallery/FotoGallery";

const StatesFriendshipSociety = () => {
  const {
    associationData,
    associationCategoryData,
    error,
    associationLoading,
    associationCategoryLoading,
    events,
    eventsLoading,
    eventsError,
  } = useAssociationFetching();
  const { categoryId } = useParams();
  const { t } = useTranslation();

  if (associationLoading || eventsLoading || associationCategoryLoading) {
    return <Spinner position={"full"} />;
  } else if (error || eventsError) {
    return <p>{error ? error : eventsError}</p>;
  }

  const categoryData = associationCategoryData.find(
    (category) => category.id === categoryId * 1
  );
  const countryData = associationData.find(
    (country) => country.id === categoryData.country_uz * 1
  );

  return (
    <>
      <div className="state-friendship-society">
        <div
          className="state-friendship-society__head"
          style={{
            backgroundImage: `url(${baseServerUrl}/${countryData.background_flags})`,
          }}
        >
          <WhriteHeader />
        </div>

        <main className="main">
          <StatesFriendshipInfo {...categoryData} />
          <OfferStatesFriendship {...categoryData} />
          <FotoGallery
            images={categoryData.images ? categoryData.images : null}
          />
          <MiniSlider
            title={`${t("events")}`}
            data={events?.data}
            fetchUrl="events"
          />
        </main>
      </div>
    </>
  );
};

export default StatesFriendshipSociety;
