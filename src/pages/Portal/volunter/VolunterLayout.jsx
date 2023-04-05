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
      url: "/portal-category/volunteer/Volunteers",
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
  return (
    <>
      {editClass.length > 3 && editClass[3] && (
        <ExpertHeader navData={navData} />
      )}
      <Outlet context={{ navData }} />
      <ExpertFooter navData={navData} />
    </>
  );
}
