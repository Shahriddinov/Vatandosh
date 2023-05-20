import React from "react";
import { Outlet } from "react-router-dom";

import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";
import Header from "./components/Header/Header";

const LibraryLayout = () => {
  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/electronic-journal",
  };

  return (
    <div>
      <Header navbarUrl={navbarUrl} />
      <Outlet />
      <OnlineTeachingFooter />
    </div>
  );
};

export default LibraryLayout;
