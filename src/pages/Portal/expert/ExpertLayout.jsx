import React from "react";
import ExpertHeader from "./components/ExpertHeader/ExpertHeader";
import { Outlet, useLocation } from "react-router-dom";
import ExpertFooter from "./components/ExpertFooter/ExpertFooter";
import { useTranslation } from "react-i18next";
import { getItem } from "../../../helpers/persistanceStorage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";

const ExpertLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const editClass = location.pathname.split("/");

  const dispatch = useDispatch();
  const userToken = getItem("token");

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken, dispatch]);

  const navData = [
    { id: 1, url: "/portal-category/expert", label: t("expert.main") },
    {
      id: 2,
      url: "/portal-category/expert/expert-council",
      label: t("expert.expertCouncil"),
    },
    {
      id: 3,
      url: "/portal-category/expert/offers",
      label: t("expert.offers"),
    },
    {
      id: 4,
      url: "/portal-category/expert/contact",
      label: t("contactPage.contactUs"),
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
      <Outlet context={{ navData, navbarUrl, category: "expert" }} />
      <ExpertFooter navData={navData} />
    </>
  );
};

export default ExpertLayout;
