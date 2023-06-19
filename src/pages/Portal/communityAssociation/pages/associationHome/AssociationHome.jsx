import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../expert/components/Navbar/Navbar";
import Nav from "../../../expert/components/Nav/Nav";
import Header from "../../../expert/components/Header/Header";
import News from "../../../expert/pages/ExpertHome/components/News/News";
import { useTranslation } from "react-i18next";
import { CommunityMaps } from "../../components";
import { useCommunityHomeFetching } from "./hooks/useCommunityHomeFetching";
import { Spinner } from "../../../../../component";
import { CommunityHomeCouncil } from "./components";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { extraFun } from "./components/homeCouncil/extra";

import "./associationHome.scss";

const AssociationHome = () => {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const {
    communityHomePageData,
    communityHomePageLoading,
    communityHomePageError,
    communityNews,
    communityNewsLoading,
    allCommunityGet,
    allCommunityGetLoading,
    allRegions,
    allRegionsGetLoading,
  } = useCommunityHomeFetching();

  if (
    communityHomePageLoading ||
    communityNewsLoading ||
    allCommunityGetLoading ||
    allRegionsGetLoading
  ) {
    return <Spinner />;
  } else if (communityHomePageError) {
    return <p className="">{communityHomePageError}</p>;
  }
  const { filteredText } = extraFun(communityHomePageData?.body);

  const headerData = {
    title: communityHomePageData?.title,
    subTitle: filteredText[1].split(" ").slice(0, 5).join(" ") + "...",
    link: "/portal-category/community-association/application#1",
    btnText: t("communityAssociation.application"),
  };

  const councilData = {
    body: communityHomePageData?.body,
    pathUrl: "/portal-category/community-association/about",
  };

  return (
    <>
      <div
        className="community-home-hero"
        style={{
          backgroundImage: `url(${PORTAL_IMAGE_URL}${communityHomePageData?.image})`,
        }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <CommunityHomeCouncil
        councilData={councilData}
        allCommunityGet={allCommunityGet}
        allRegions={allRegions}
      />
      <CommunityMaps
        allRegions={allRegions}
        title={t("communityAssociation.navbar.navbar_link2")}
      />
      <News
        communityNews={communityNews?.data}
        url="/portal-category/community-association"
      />
    </>
  );
};

export default AssociationHome;
