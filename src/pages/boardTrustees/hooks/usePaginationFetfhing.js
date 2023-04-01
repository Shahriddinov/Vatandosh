import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getPaginationTrusts } from "../../../reduxToolkit/trusteesSlice/trusteesAsyncThunk";
import { useEffect } from "react";

export const usePaginationFetching = () => {
  const trusts = useSelector((state) => state.trustees.moreTrusts);
  const trustsLoading = useSelector(
    (state) => state.trustees.moreTrustsLoading
  );
  const { search } = useLocation();

  const [searchCount, setSearchCount] = useState({
    id: search ? search?.split("=")[1].split("&")[1] * 1 : 1,
    login: Date.now().toString(10).split("").reverse().join(""),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaginationTrusts(searchCount.id));
  }, []);

  const handleFetching = () => {
    dispatch(getPaginationTrusts(searchCount.id * 1 + 1));
    setSearchCount((prev) => ({
      id: prev.id + 1,
      login: Date.now().toString(10).split("").reverse().join(""),
    }));
  };

  return { trusts, searchCount, setSearchCount, handleFetching, trustsLoading };
};
