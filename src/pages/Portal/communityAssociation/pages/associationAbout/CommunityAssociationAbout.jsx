import React from "react";
import About from "../../../expert/components/About/About";
import { AboutImg } from "../../../../../assets/images/communityAssociation";
import { CouncilImage2 } from "../../../../../assets/images/expert";
import { useTranslation } from "react-i18next";
import { ShareFriends, Spinner } from "../../../../../component";
import { useCommunityHomeFetching } from "../associationHome/hooks/useCommunityHomeFetching";
import CommunityPageTop from "./components/communityPageTop/CommunityPageTop";
import CommunityCouncilStatics from "./components/comunityCouncilStatics/CommunityCouncilStatics";
import DOMPurify from "dompurify";

const CommunityAssociationAbout = () => {
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
    <div className="about">
      <div className="container">
        <CommunityPageTop pageTopData={pageTopData} />
        <div className="about-page">
          <div className="about-left">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(communityHomePageData.body),
              }}
            />
            <ShareFriends />
          </div>
          <CommunityCouncilStatics />
        </div>
      </div>
    </div>
  );
};

export default CommunityAssociationAbout;
