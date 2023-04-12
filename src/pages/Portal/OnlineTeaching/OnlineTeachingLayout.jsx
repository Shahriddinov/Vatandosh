import React from "react";
import { Outlet } from "react-router-dom";

import OnlineTeachingHeader from "./components/OnlineTeachingHeader/OnlineTeachingHeader";
// import OnlineTeachingFooter from "./components/OnlineTeachingFooter/OnlineTeachingFooter";

const OnlineTeachingLayout = () => {
  return (
    <div>
      <OnlineTeachingHeader />
      <Outlet />
      {/*<OnlineTeachingFooter />*/}
    </div>
  );
};

export default OnlineTeachingLayout;
