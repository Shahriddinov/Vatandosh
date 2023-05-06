import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../expert/components/Navbar/Navbar";
import Nav from "../../../expert/components/Nav/Nav";
import Header from "../../../expert/components/Header/Header";
import Council from "../../../expert/pages/ExpertHome/components/Council/Council";
import News from "../../../expert/pages/ExpertHome/components/News/News";
import backImg from "../../../../../assets/images/communityAssociation/communityAssociationHomeBg.png";
import heroImg from "../../../../../assets/images/communityAssociation/hero-img.png";
import { useTranslation } from "react-i18next";
import { CommunityMaps } from "../../components";
import { useCommunityHomeFetching } from "./hooks/useCommunityHomeFetching";
import { Spinner } from "../../../../../component";
import { CommunityHomeCouncil } from "./components";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const AssociationHome = () => {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const {
    communityHomePageData,
    communityHomePageLoading,
    communityHomePageError,
  } = useCommunityHomeFetching();

  if (communityHomePageLoading) {
    return <Spinner />;
  } else if (communityHomePageError) {
    return <p className="">{communityHomePageError}</p>;
  }

  const headerData = {
    title: communityHomePageData?.title,
    subTitle: communityHomePageData?.excerpt,
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
        className="expert-council"
        style={{
          backgroundImage: `url(${PORTAL_IMAGE_URL}${communityHomePageData?.image})`,
        }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <CommunityHomeCouncil councilData={councilData} />
      <CommunityMaps title={t("communityAssociation.navbar.navbar_link2")} />
      <News />
    </>
  );
};

export default AssociationHome;
