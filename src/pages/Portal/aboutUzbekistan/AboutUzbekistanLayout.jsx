import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AboutUzbekistanHeader from "./components/aboutUzbekistanHeader/AboutUzbekistanHeader";
import AboutUzbekistanHeaderTransparent from "./components/aboutUzbekistanHeaderTransparent/AboutUzbekistanHeader";
import AboutUzbekistanNavbar from "./components/aboutUzbekistanNavbar/AboutUzbekistanNavbar";
import AboutUzbekistanNavbarTransparent from "./components/aboutUzbekistanNavbarTransparent/AboutUzbekistanNavbar";
import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";
import { Spinner } from "../../../component";
import { useLayoutFetching } from "./hooks/useLayoutFetching";
import { ElectronicJournalFooter } from "../electronicJournal/components";

const AboutUzbekistan = () => {
  const location = useLocation();
  let transparentIsTrue = location.pathname.split("/")[3];
  const { menu, menuLoading, contactData, contactLoading, contactError } =
    useLayoutFetching();

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
