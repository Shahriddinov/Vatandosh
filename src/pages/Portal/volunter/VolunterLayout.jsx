import React from "react";
import ExpertHeader from "../expert/components/ExpertHeader/ExpertHeader";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function VolunterLayout() {
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const { t } = useTranslation();

  const navData = [
    { id: 1, url: "/portal-category/volunteer", label: "Asosiy" },
    {
      id: 2,
      url: "/portal-category/volunteer/volunter-employe",
      label: `${t("volunter.nav1")}`,
    },
    {
      id: 3,
      url: "/portal-category/volunteer/council-about",
      label: `${t("volunter.nav2")}`,
    },
    {
      id: 4,
      url: "/portal-category/volunteer/contact",
      label: `${t("volunter.nav3")}`,
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/volunteer/register",
  };

  return (
    <>
      {editClass.length > 3 && editClass[3] && (
        <ExpertHeader navData={navData} navbarUrl={navbarUrl} />
      )}
      <Outlet context={{ navData, navbarUrl }} />
      <ExpertFooter navData={navData} />
    </>
  );
}
