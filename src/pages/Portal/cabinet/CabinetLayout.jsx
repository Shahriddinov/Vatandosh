import React from "react";
import { Outlet } from "react-router-dom";

import CabinetHeader from "./components/cabinetHeader/CabinetHeader";
import CabinetLeftMenu from "./components/cabinetLeftMenu/CabinetLeftMenu";

import "./cabinetLayout.scss";

const CabinetLayout = () => {
  return (
    <div className="cabinet-layout">
      <div className="cabinet-layout__left">
        <CabinetLeftMenu />
      </div>
      <div className="cabinet-layout__right">
        <CabinetHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default CabinetLayout;
