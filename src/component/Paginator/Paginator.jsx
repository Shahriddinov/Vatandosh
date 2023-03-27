import React, { useState } from "react";
import "./Paginator.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Paginator = () => {
  const [page, setPage] = useState(1);

  const handleChange = (_, value) => {
    setPage(value);
  };
  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination
          onChange={handleChange}
          size="large"
          count={50}
          color="primary"
        />
      </Stack>
    </div>
  );
};
