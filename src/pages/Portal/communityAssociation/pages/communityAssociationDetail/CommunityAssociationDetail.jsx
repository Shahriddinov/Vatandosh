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

const CommunityAssociationDetail = () => {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const { loading, events } = useFetchingData();
  const { open, changeOpen } = useModalActive();
  const { communityCountryId } = useParams();
  const {
    associationData,
    associationCategoryData,
    associationLoading,
    associationCategoryLoading,
  } = useCountryGet();
  const lng = useSelector((state) => state.language.language);

  if (loading || associationLoading || associationCategoryLoading) {
    return <Spinner position="full" />;
  }

  const findCountryCategoryData = associationCategoryData.find(
    (el) => el.id === communityCountryId * 1
  );
  const findCountry = associationData.find(
    (el) => el.id === findCountryCategoryData.country_uz * 1
  );

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
        url: "/portal-category/community-association/country/russia",
        active: false,
      },
      {
        id: 3,
        label: findCountry[`country_${lng}`],
        url: null,
        active: true,
      },
    ],

    title: findCountry[`country_${lng}`],
    desc: findCountry[`info_${lng}`],
  };

  return (
    <div className="community-association-detail">
      <div
        className="community-association-detail__top"
        style={{ backgroundImage: `url(${CountryFlag})` }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />

        <CommunityAssociationHero
          data={communityAssociationHeroData}
          handleOpen={changeOpen}
        />
      </div>

      <StatesFriendshipInfo {...findCountryCategoryData} />
      <CommunityAssociationCompanyOffer {...findCountryCategoryData} />
      {/* <MiniSlider title={`${t("events")}`} data={events} fetchUrl="events" /> */}

      <AddNewsModal open={open} handleClose={changeOpen} />
    </div>
  );
};

export default CommunityAssociationDetail;
