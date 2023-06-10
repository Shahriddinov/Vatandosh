import { useEffect } from "react";
import {
  getExpertEducation,
  getExpertSpecialization,
} from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const initialValue = {
  id: Date.now(),
  institution: "",
  faculty: "",
  specialization_id: 1,
};
export const useEducationFetching = () => {
  const [data, setData] = useState([initialValue]);
  const { education, specialization, educationLoading } = useSelector(
    (state) => state.expertRegisterSlice
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpertEducation());
    dispatch(getExpertSpecialization());
  }, [dispatch]);

  return {
    data,
    setData,
    education,
    specialization,
    educationLoading,
    initialValue,
  };
};
