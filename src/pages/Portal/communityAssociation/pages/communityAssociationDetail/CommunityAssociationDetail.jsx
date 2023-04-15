import React from "react";
import { useOutletContext } from "react-router-dom";
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

const CommunityAssociationDetail = () => {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const { loading, events } = useFetchingData();
  const { open, changeOpen } = useModalActive();

  if (loading) {
    return <Spinner position="full" />;
  }

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
        label: "Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati",
        url: null,
        active: true,
      },
    ],

    title: "Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati",
    desc: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish,",
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

      <StatesFriendshipInfo {...CommunityIntroData} />
      <CommunityAssociationCompanyOffer {...CommunityIntroData} />
      <MiniSlider title={`${t("events")}`} data={events} fetchUrl="events" />

      <AddNewsModal open={open} handleClose={changeOpen} />
    </div>
  );
};

export default CommunityAssociationDetail;
