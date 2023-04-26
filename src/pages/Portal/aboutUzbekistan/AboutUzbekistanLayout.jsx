import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";

const AboutUzbekistan = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <OnlineTeachingFooter />
    </div>
  );
};

export default AboutUzbekistan;
