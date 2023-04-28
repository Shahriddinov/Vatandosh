import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AboutUzbekistanHeader from "./components/aboutUzbekistanHeader/AboutUzbekistanHeader";
import AboutUzbekistanHeaderTransparent from "./components/aboutUzbekistanHeaderTransparent/AboutUzbekistanHeader";
import AboutUzbekistanNavbar from "./components/aboutUzbekistanNavbar/AboutUzbekistanNavbar";
import AboutUzbekistanNavbarTransparent from "./components/aboutUzbekistanNavbarTransparent/AboutUzbekistanNavbar";
import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";

const AboutUzbekistan = () => {
  const location = useLocation();
  let transparentIsTrue = location.pathname.split("/")[3];

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
        <AboutUzbekistanNavbarTransparent />
      ) : (
        <AboutUzbekistanNavbar />
      )}
      <Outlet />
      {transparentIsTrue !== "virtual-tour" && <OnlineTeachingFooter />}
    </div>
  );
};

export default AboutUzbekistan;
