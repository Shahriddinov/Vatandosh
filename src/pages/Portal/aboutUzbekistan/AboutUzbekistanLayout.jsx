import React from "react";
import { Outlet } from "react-router-dom";

import AboutUzbekistanHeader from "./components/aboutUzbekistanHeader/AboutUzbekistanHeader";
import AboutUzbekistanNavbar from "./components/aboutUzbekistanNavbar/AboutUzbekistanNavbar";
import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";

const AboutUzbekistan = () => {
  return (
    <div>
      <AboutUzbekistanHeader />
      <AboutUzbekistanNavbar />
      <Outlet />
      <OnlineTeachingFooter />
    </div>
  );
};

export default AboutUzbekistan;
