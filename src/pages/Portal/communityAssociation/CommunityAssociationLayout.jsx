import React from "react";
import ExpertHeader from "../expert/components/ExpertHeader/ExpertHeader";
import { Outlet, useLocation, useParams } from "react-router-dom";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";
import { useTranslation } from "react-i18next";

const CommunityAssociationLayout = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const editClass = location.pathname.split("/");
  const { communityCountryId } = useParams();

  const navData = [
    {
      id: 1,
      url: "/portal-category/community-association",
      label: t("communityAssociation.navbar.navbar_link1"),
    },
    {
      id: 2,
      url: "/portal-category/community-association/associations",
      label: t("communityAssociation.navbar.navbar_link2"),
    },
    {
      id: 3,
      url: "/portal-category/community-association/events",
      label: t("communityAssociation.navbar.navbar_link3"),
    },
    {
      id: 4,
      url: "/portal-category/community-association/contact",
      label: t("communityAssociation.navbar.navbar_link4"),
    },
  ];

  const navbarUrl = {
    home: "/portal-category/community-association",
    register: "/portal-category/community-association/application#1",
  };
  return (
    <>
      {editClass.length > 3 && editClass[3] && !communityCountryId && (
        <ExpertHeader navData={navData} navbarUrl={navbarUrl} />
      )}
      <Outlet context={{ navData, navbarUrl }} />
      <ExpertFooter navData={navData} />
    </>
  );
};

export default CommunityAssociationLayout;
