import React from "react";
import { Outlet } from "react-router-dom";
import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";
import { Header } from "./components";

import "./electronikJournalLayout.scss";
import { useElectronicJournalLayout } from "./hooks/useElectronicJournalLayout";
import { Spinner } from "../../../component";

const ElectronicJournalLayout = () => {
  const { menu, menuLoading, allMagazineLoading, error } =
    useElectronicJournalLayout();

  if (menuLoading || allMagazineLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="electronic-journal">
      <Header navData={menu} />
      <Outlet context={menu} />
      <OnlineTeachingFooter />
    </div>
  );
};

export default ElectronicJournalLayout;
