import React from "react";
import ExpertHeader from "./components/ExpertHeader/ExpertHeader";
import { Outlet, useLocation } from "react-router-dom";
import ExpertFooter from "./components/ExpertFooter/ExpertFooter";
import { useTranslation } from "react-i18next";
import { getItem } from "../../../helpers/persistanceStorage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";
import { Spinner } from "../../../component";
import { getExpertAssociation } from "../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { getContact } from "../../../reduxToolkit/contactSlice/extraReducer";

const ExpertLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const { pathname } = useLocation();
  const {
    expertAssociationData,
    expertAssociationLoading,
    expertAssociationError,
  } = useSelector((state) => state.expertSlice);

  useEffect(() => {
    dispatch(getExpertAssociation());
  }, [lan, dispatch]);

  useEffect(() => {
    if (!pathname.includes("about-uzbekistan")) dispatch(getContact());
  }, [dispatch, pathname]);

  if (expertAssociationLoading) {
    return <Spinner position="full" />;
  } else if (expertAssociationError) {
    return <p>{expertAssociationError}</p>;
  }

  const navData = [
    { id: 1, url: "/portal-category/expert", label: t("expert.main") },
    {
      id: 2,
      url: "/portal-category/expert/expert-council",
      label: t("expert.expertCouncil"),
      data: expertAssociationData?.data,
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
