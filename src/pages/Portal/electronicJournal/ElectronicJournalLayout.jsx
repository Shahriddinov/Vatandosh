import React from "react";
import { Outlet } from "react-router-dom";
import { ElectronicJournalFooter, Header } from "./components";

import "./electronicJournalLayout.scss";
import { useElectronicJournalLayout } from "./hooks/useElectronicJournalLayout";
import { Spinner } from "../../../component";

const ElectronicJournalLayout = () => {
  const {
    menu,
    menuLoading,
    lastMagazineLoading,
    error,
    contactData,
    contactLoading,
    contactError,
  } = useElectronicJournalLayout();

  if (menuLoading || lastMagazineLoading || contactLoading) {
    return <Spinner position="full" />;
  } else if (error || contactError) {
    return <p>{error ? error : contactError}</p>;
  }

  return (
    <div className="electronic-journal">
      <Header navData={menu} />
      <Outlet context={menu} />
      <ElectronicJournalFooter contactData={contactData} />
    </div>
  );
};

export default ElectronicJournalLayout;
