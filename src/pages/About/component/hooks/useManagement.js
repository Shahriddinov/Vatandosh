import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getManagement } from "../../../../reduxToolkit/ManagementSlice/ManagementSlice";
import { useEffect } from "react";

export const usePaginationFetching = () => {
  const management = useSelector(
    (state) => state.managementSlice.moreManagement
  );
  const managementLoading = useSelector(
    (state) => state.managementSlice.loadingManagement
  );
  const { search } = useLocation();

  const [searchCount, setSearchCount] = useState({
    id: search ? search?.split("=")[1].split("&")[1] * 1 : 1,
    login: Date.now().toString(10).split("").reverse().join(""),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagement(searchCount.id));
  }, [dispatch, searchCount]);

  const handleFetching = () => {
    dispatch(getManagement(searchCount.id * 1 + 1));
    setSearchCount((prev) => ({
      id: prev.id + 1,
      login: Date.now().toString(10).split("").reverse().join(""),
    }));
  };

  return {
    management,
    searchCount,
    setSearchCount,
    handleFetching,
    managementLoading,
  };
};
