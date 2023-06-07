import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getInf,
  getPagination,
} from "../../../reduxToolkit/informationServicesSlice/extraReducer";
import { useEffect } from "react";
import { getCountriesNewsData } from "../../../reduxToolkit/mapSlice/mapAsyncThunk";

export const useMapsNewsFetching = () => {
  //   const [page, setPage] = useState(1);
  const { countryId } = useParams();

  const { t } = useTranslation();
  const error = useSelector((state) => state.mapSlice.error);

  const countryNewsData = useSelector(
    (state) => state.mapSlice.countryNewsData
  );
  const countryNewsDataLoading = useSelector(
    (state) => state.mapSlice.countryNewsDataLoading
  );

  const lan = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  //   const paginationCount = Math.ceil(paginationData?.total / 6);

  //   const paginationFetching = (count) => {
  //     setPage(count);
  //     dispatch(
  //       getPagination({
  //         reqUrlName: countryId,
  //         page: count,
  //       })
  //     );
  //   };

  useEffect(() => {
    dispatch(getCountriesNewsData(countryId));
  }, [dispatch, countryId, lan]);

  return {
    countryNewsData,
    countryNewsDataLoading,
    error,
    // page,
    // paginationCount,
    // data,
    t,
  };
};
