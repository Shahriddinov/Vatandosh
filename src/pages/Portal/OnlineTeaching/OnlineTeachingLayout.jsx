import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import OnlineTeachingHeader from "./components/OnlineTeachingHeader/OnlineTeachingHeader";
import OnlineTeachingFooter from "./components/OnlineTeachingFooter/OnlineTeachingFooter";
import { getItem } from "../../../helpers/persistanceStorage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";

const OnlineTeachingLayout = () => {
  const dispatch = useDispatch();
  const userToken = getItem("token");

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken]);
  return (
    <div>
      <OnlineTeachingHeader />
      <Outlet />
      <OnlineTeachingFooter />
    </div>
  );
};

export default OnlineTeachingLayout;
