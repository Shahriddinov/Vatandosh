import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExpertFooter from "../../expert/components/ExpertFooter/ExpertFooter";

export default function VictorinaLayout() {
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const { t } = useTranslation();

  const navData = [
    { id: 1, url: "/portal-category/victorina", label: "Asosiy" },
    {
      id: 2,
      url: "/portal-category/victorina/volunter-employe",
      label: "Viktorinalar",
    },
    {
      id: 3,
      url: "/portal-category/victorina/council-about",
      label: "G‘oliblar ro‘yxati",
    },
    {
      id: 4,
      url: "/portal-category/victorina/contact",
      label: "Bog‘lanish",
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/volunteer/register",
  };

  return (
    <>
      <Outlet context={{ navData, navbarUrl }} />
      <ExpertFooter navData={navData} />
    </>
  );
}
