import React from "react";
import ExpertHeader from "../expert/components/ExpertHeader/ExpertHeader";
import { Outlet } from "react-router-dom";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";

const communityAssociationLayout = () => {
  return (
    <>
      <ExpertHeader />
      <Outlet />
      <ExpertFooter />
    </>
  );
};

export default communityAssociationLayout;
