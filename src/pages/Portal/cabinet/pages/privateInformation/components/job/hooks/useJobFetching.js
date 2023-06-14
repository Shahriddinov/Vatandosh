import { useEffect, useState } from "react";
import { getLocation } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { getExpertEmployment } from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const initialJobData = {
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

const options = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const useJobFetching = () => {
  const [data, setData] = useState([initialJobData]);
  const {
    employment,
    employmentLoading,
    employmentCreateSuccess,
    employmentDeleteStatus,
  } = useSelector((state) => state.expertRegisterSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getExpertEmployment());
  }, [dispatch]);

  useEffect(() => {
    if (employment.length) {
      setData(employment);
    } else if (employment.length === 0) {
      setData([initialJobData]);
    }
  }, [employment]);

  useEffect(() => {
    if (employmentDeleteStatus === "success") {
      toast.success("Delete successfully!", options);
      setTimeout(() => dispatch(getExpertEmployment()), 1500);
    } else if (employmentCreateSuccess === "success") {
      toast.success("sending successfully!", options);
      setTimeout(() => dispatch(getExpertEmployment()), 1500);
    } else if (
      employmentCreateSuccess === "error" ||
      employmentDeleteStatus === "error"
    ) {
      toast.error("error sending !", options);
    }
  }, [employmentCreateSuccess, employmentDeleteStatus, dispatch]);

  return {
    data,
    setData,
    employment,
    employmentLoading,
    dispatch,
  };
};
