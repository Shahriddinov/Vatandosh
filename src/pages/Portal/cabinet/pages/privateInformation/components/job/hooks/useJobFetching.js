import { useEffect, useState } from "react";
import { getLocation } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { getExpertEmployment } from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

const initialData = {
  company: "",
  position: "",
  location_id: "",
  status: false,
  city: "",
  start_date: "",
  finish_date: "",
  specialization: "",
  id: Date.now(),
};

const locationDataChange = createSelector(
  (store) => store.community.locationGet,
  (location) => {
    return location.map((el) => ({
      ...el,
      label: el.name ? el.name : "Uzbekistan",
    }));
  }
);
export const useJobFetching = () => {
  const [data, setData] = useState([initialData]);
  const locationData = useSelector(locationDataChange);
  const { employment, employmentLoading } = useSelector(
    (state) => state.expertRegisterSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getExpertEmployment());
  }, [dispatch]);

  useEffect(() => {
    if (employment.length) {
      setData(() => []);
      employment.forEach((el) => {
        setData((prev) => [...prev, el]);
      });
    }
  }, [employment]);

  return {
    data,
    setData,
    locationData,
    employment,
    employmentLoading,
  };
};
