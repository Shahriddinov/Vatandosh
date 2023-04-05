import React from "react";
import ExpertHeader from "../expert/components/ExpertHeader/ExpertHeader";
import { Outlet, useLocation } from "react-router-dom";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";

const CommunityAssociationLayout = () => {
  const location = useLocation();
  const editClass = location.pathname.split("/");

  const navData = [
    { id: 1, url: "/portal-category/community-association", label: "Asosiy" },
    {
      id: 2,
      url: "/portal-category/community-association/about",
      label: "Jamoat birlashmalari",
    },
    {
      id: 3,
      url: "/portal-category/community-association/events",
      label: "Tadbirlar",
    },
    {
      id: 4,
      url: "/portal-category/community-association/contact",
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
};

export default CommunityAssociationLayout;
