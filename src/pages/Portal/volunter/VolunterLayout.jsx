import React from "react";
import ExpertHeader from "../expert/components/ExpertHeader/ExpertHeader";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";
import { Outlet } from "react-router-dom";

export default function VolunterLayout() {
  const navData = [
    { id: 1, url: "/portal-category/volunter", label: "Asosiy" },
    {
      id: 2,
      url: "/portal-category/volunter/Volunteers",
      label: "Volontyorlar",
    },
    {
      id: 3,
      url: "/portal-category/volunter/activities-volunteers",
      label: "Volontyorlarni faoliyati",
    },
    {
      id: 4,
      url: "/portal-category/volunter/contact",
      label: "Bog‘lanish",
    },
  ];
  return (
    <>
      <ExpertHeader navData={navData} />
      <Outlet />
      <ExpertFooter navData={navData} />
    </>
  );
}
