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

  const dispatch = useDispatch();
  const userToken = getItem("token");

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken]);

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
