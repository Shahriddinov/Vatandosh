import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ElectronicJournalFooter, Header } from "./components";

import "./electronicJournalLayout.scss";
import { useElectronicJournalLayout } from "./hooks/useElectronicJournalLayout";
import { Spinner } from "../../../component";
import { getItem } from "../../../helpers/persistanceStorage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";

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

  const menuData =
    menu.length > 0 ? menu.filter((el) => el.id !== undefined) : [];
  return (
    <div className="electronic-journal">
      <Header navData={menuData} />
      <Outlet context={menuData} />
      <ElectronicJournalFooter contactData={contactData} />
    </div>
  );
};

export default ElectronicJournalLayout;
