import React from "react";
import ExpertHeader from "./components/ExpertHeader/ExpertHeader";
import { Outlet, useLocation } from "react-router-dom";
import ExpertFooter from "./components/ExpertFooter/ExpertFooter";

const ExpertLayout = () => {
  const location = useLocation();
  const editClass = location.pathname.split("/");

  const navData = [
    { id: 1, url: "/portal-category/expert", label: "Asosiy" },
    {
      id: 2,
      url: "/portal-category/expert/council-about",
      label: "Ekspertlar kengashi",
    },
    {
      id: 3,
      url: "/portal-category/expert/offers",
      label: "Takliflar",
    },
    {
      id: 4,
      url: "/portal-category/expert/contact",
      label: "Bog‘lanish",
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/expert/register",
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
};

export default ExpertLayout;
