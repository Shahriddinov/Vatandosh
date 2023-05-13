import React from "react";
import { useTranslation } from "react-i18next";
import { ShareFriends, Spinner } from "../../../../../component";
import { useCommunityHomeFetching } from "../associationHome/hooks/useCommunityHomeFetching";
import CommunityPageTop from "./components/communityPageTop/CommunityPageTop";
import CommunityCouncilStatics from "./components/comunityCouncilStatics/CommunityCouncilStatics";
import DOMPurify from "dompurify";

import "./communityAbout.scss";
const CommunityAssociationAbout = () => {
  const { t } = useTranslation();
  const {
    communityHomePageData,
    communityHomePageLoading,
    communityHomePageError,
    allRegions,
    allRegionsGetLoading,
    allCommunityGet,
    allCommunityGetLoading,
  } = useCommunityHomeFetching();

  if (
    communityHomePageLoading ||
    allRegionsGetLoading ||
    allCommunityGetLoading
  ) {
    return <Spinner />;
  } else if (communityHomePageError) {
    return <p className="">{communityHomePageError}</p>;
  }

  const pageTopData = {
    title: t("communityAssociation.community_association_about_title"),
    pathUrl: [
      {
        id: 1,
        pathUrl: "/portal-category/community-association",
        label: t("communityAssociation.navbar.navbar_link1"),
        active: false,
      },
      {
        id: 2,
        pathUrl: null,
        label: t("communityAssociation.detail"),
        active: true,
      },
    ],
  };

  return (
    <div className="community_about">
      <div className="community_about__container container">
        <CommunityPageTop pageTopData={pageTopData} />
        <div className="community_about-page">
          <div className="community_about-left">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(communityHomePageData.body),
              }}
              className="community_about-left-body"
            />
            <ShareFriends />
          </div>
          <CommunityCouncilStatics
            allCommunityGet={allCommunityGet}
            allRegions={allRegions}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityAssociationAbout;
