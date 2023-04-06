import React from "react";
import ExpertHeader from "../expert/components/ExpertHeader/ExpertHeader";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";
import { Outlet, useLocation } from "react-router-dom";

export default function VolunterLayout() {
  const location = useLocation();
  const editClass = location.pathname.split("/");

  const navData = [
    { id: 1, url: "/portal-category/volunteer", label: "Asosiy" },
    {
      id: 2,
      url: "/portal-category/volunteer/volunteers",
      label: "Volontyorlar",
    },
    {
      id: 3,
      url: "/portal-category/volunteer/activities-volunteers",
      label: "Volontyorlarni faoliyati",
    },
    {
      id: 4,
      url: "/portal-category/volunteer/contact",
      label: "Bog‘lanish",
    },
  ];

  const navbarUrl = {
    home: "/portal-category/volunteer",
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
