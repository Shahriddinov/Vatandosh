import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { getItem } from "../../../helpers/persistanceStorage";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";

const LibraryLayout = () => {
  const dispatch = useDispatch();
  const userToken = getItem("token");

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken]);

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
