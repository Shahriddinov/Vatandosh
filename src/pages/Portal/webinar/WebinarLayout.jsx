import React from "react";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WebinarHome from "./pages/WebinarHome/WebinarHome";

export default function WebinarLayout() {
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const { t } = useTranslation();

  const navData = [
    { id: 1, url: "/portal-category/volunteer", label: t("expert.main") },
    {
      id: 2,
      url: "/portal-category/volunteer/volunter-employe",
      label: "О ЖУРНАЛЕ",
    },
    {
      id: 3,
      url: "/portal-category/volunteer/council-about",
      label: `НОВЫЙ НОМЕР`,
    },
    {
      id: 4,
      url: "/portal-category/volunteer/arxiv",
      label: `АРХИВ`,
    },
    {
      id: 5,
      url: "/portal-category/volunteer/contact",
      label: `КОНТАКТЫ`,
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/volunteer/register",
  };

  return (
    <>
      {editClass.length > 3 && editClass[3] && (
        <WebinarHome navData={navData} navbarUrl={navbarUrl} />
      )}
      <Outlet context={{ navData, navbarUrl }} />
      <ExpertFooter navData={navData} />
    </>
  );
}