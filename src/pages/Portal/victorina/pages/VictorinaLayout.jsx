import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExpertFooter from "../../expert/components/ExpertFooter/ExpertFooter";
import VictorinaHeader from "../components/VictorinaHeader/VictorinaHeader";

export default function VictorinaLayout() {
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const { t } = useTranslation();

  const navData = [
    { id: 1, url: "/portal-category/victorina", label: t("expert.main") },
    {
      id: 2,
      url: "/portal-category/victorina/victorina-more",
      label: t("victorina.victorinas"),
    },
    {
      id: 3,
      url: "/portal-category/victorina/victorina-finish",
      label: t("victorina.end"),
    },
    {
      id: 4,
      url: "/portal-category/victorina/contact",
      label: t("communityAssociation.navbar.navbar_link4"),
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/volunteer/register",
  };

  return (
    <>
      {editClass.length > 3 && editClass[3] && (
        <VictorinaHeader navData={navData} navbarUrl={navbarUrl} />
      )}
      <Outlet context={{ navData, navbarUrl }} />
      <ExpertFooter navData={navData} />
    </>
  );
}
