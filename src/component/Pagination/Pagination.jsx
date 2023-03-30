import React, { useRef, useState } from "react";
import "./Pagination.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Paginator = ({ count, paginationFetching, page }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleChange = (event, value) => {
    paginationFetching(value);
  };

  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination
          size={
            windowWidth <= 400
              ? "small"
              : windowWidth <= 500
              ? "medium"
              : "large"
          }
          page={page}
          count={count}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};
