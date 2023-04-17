import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./lazySpinner.scss";

const LazySpinner = ({ height = "350px" }) => {
  return (
    <div className="lazy-loading" style={{ height: height }}>
      <CircularProgress disableShrink />
    </div>
  );
};

export default LazySpinner;
