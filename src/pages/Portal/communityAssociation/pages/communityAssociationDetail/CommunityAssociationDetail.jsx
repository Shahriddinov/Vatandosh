import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CountryFlag } from "../../../../../assets/images/communityAssociation";
import StatesFriendshipInfo from "../../../../compatriots/components/statesFriendshipInfo";
import { MiniSlider, Spinner } from "../../../../../component";
import { Nav, Navbar } from "../../../expert/components";

import {
  AddNewsModal,
  CommunityAssociationCompanyOffer,
  CommunityAssociationHero,
} from "./components";
import { useFetchingData, useModalActive } from "./hooks";
import { CommunityIntroData } from "./data";

//scss files
import "./communityAssociationDetail.scss";
import { useCountryGet } from "../country/hooks/useCountryGet";
import { useSelector } from "react-redux";
import { useAssociationFetching } from "../associations/hooks/useAssociationFetching";

const CommunityAssociationDetail = () => {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const { loading, events } = useFetchingData();
  const { open, changeOpen } = useModalActive();
  const { communityCountryId, communityCountry } = useParams();

  const {
    allRegions,
    allRegionsGetLoading,
    allCommunityGet,
    allCommunityGetLoading,
  } = useAssociationFetching();

  if (loading || allRegionsGetLoading || allCommunityGetLoading) {
    return <Spinner position="full" />;
  }

  const findCountryCategoryData = allRegions.find(
    (el) => el.id === communityCountry * 1
  );
  const findCountry = allCommunityGet.find(
    (el) => el.id === communityCountryId * 1
  );

  return (
    <div className="community-association-detail">
      <div
        className="community-association-detail__top"
        style={{ backgroundImage: `url(${CountryFlag})` }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />

        <CommunityAssociationHero
          data={{ findCountry, findCountryCategoryData }}
          handleOpen={changeOpen}
        />
      </div>

      <StatesFriendshipInfo {...findCountry} />
      <CommunityAssociationCompanyOffer {...findCountry} />
      <MiniSlider title={`${t("events")}`} data={events} fetchUrl="events" />

      <AddNewsModal open={open} handleClose={changeOpen} />
    </div>
  );
};

export default CommunityAssociationDetail;
