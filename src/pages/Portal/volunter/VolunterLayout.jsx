import React from "react";
import ExpertHeader from "../expert/components/ExpertHeader/ExpertHeader";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getItem } from "../../../helpers/persistanceStorage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";
import ExpertFooter from "../expert/components/ExpertFooter/ExpertFooter";

export default function VolunterLayout() {
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const userToken = getItem("token");

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken, dispatch]);

  const navData = [
    { id: 1, url: "/portal-category/volunteer", label: t("expert.main") },
    {
      id: 2,
      url: "/portal-category/volunteer/volunter-employe",
      label: `${t("voluntery.nav1")}`,
    },
    {
      id: 3,
      url: "/portal-category/volunteer/activity",
      label: `${t("voluntery.nav2")}`,
    },
    {
      id: 4,
      url: "/portal-category/volunteer/contact",
      label: `${t("voluntery.nav3")}`,
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/volunteer/register",
  };

  return (
    <>
      {editClass.length > 3 && editClass[3] && (
        <ExpertHeader navData={navData} navbarUrl={navbarUrl} />
      )}
      <Outlet context={{ navData, navbarUrl, category: "volunteer" }} />
      <ExpertFooter navData={navData} />
    </>
  );
}
