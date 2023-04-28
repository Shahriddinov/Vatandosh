import React from "react";
import { Link } from "react-router-dom";

import "./view3d.scss";

const View3D = () => {
  return (
    <div className="facilities_3d">
      <div className="facilities_3d_circle">
        <div className="facilities_3d_circle_inner">
          <Link
            to="/portal-category/about-uzbekistan/virtual-tour"
            className="facilities_3d_circle_inner_inner"
          >
            Start 3D tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View3D;
