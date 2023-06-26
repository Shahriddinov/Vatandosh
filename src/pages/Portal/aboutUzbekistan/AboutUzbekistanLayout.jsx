import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AboutUzbekistanHeader from "./components/aboutUzbekistanHeader/AboutUzbekistanHeader";
import AboutUzbekistanHeaderTransparent from "./components/aboutUzbekistanHeaderTransparent/AboutUzbekistanHeader";
import AboutUzbekistanNavbar from "./components/aboutUzbekistanNavbar/AboutUzbekistanNavbar";
import AboutUzbekistanNavbarTransparent from "./components/aboutUzbekistanNavbarTransparent/AboutUzbekistanNavbar";
import { Spinner } from "../../../component";
import { useLayoutFetching } from "./hooks/useLayoutFetching";
import { ElectronicJournalFooter } from "../electronicJournal/components";
import { getItem } from "../../../helpers/persistanceStorage";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";

const AboutUzbekistan = () => {
  const location = useLocation();
  let transparentIsTrue = location.pathname.split("/")[3];
  const { menu, menuLoading, contactData, contactLoading, contactError } =
    useLayoutFetching();

  const dispatch = useDispatch();
  const userToken = getItem("token");

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken, dispatch]);

  if (menuLoading || contactLoading) {
    return <Spinner position="full" />;
  } else if (contactError) {
    return <p>{contactError}</p>;
  }

  return (
    <div>
      {(transparentIsTrue === "virtual-tour") |
      (transparentIsTrue === "city") ? (
        <AboutUzbekistanHeaderTransparent />
      ) : (
        <AboutUzbekistanHeader />
      )}
      {(transparentIsTrue === "virtual-tour") |
      (transparentIsTrue === "city") ? (
        <AboutUzbekistanNavbarTransparent menu={menu} />
      ) : (
        <AboutUzbekistanNavbar menu={menu} />
      )}
      <Outlet context={{ menu }} />
      {transparentIsTrue !== "virtual-tour" && (
        <ElectronicJournalFooter contactData={contactData} />
      )}
    </div>
  );
};

export default AboutUzbekistan;
