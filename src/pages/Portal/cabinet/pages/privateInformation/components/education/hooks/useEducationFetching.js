import { useEffect } from "react";
import {
  getExpertEducation,
  getExpertSpecialization,
} from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast } from "react-toastify";

export const initialCabinetEducationData = {
  id: Date.now(),
  institution: "",
  faculty: "",
  specialization_id: "all",
  type: "1",
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
export const useEducationFetching = () => {
  const [data, setData] = useState([initialCabinetEducationData]);
  const {
    education,
    specialization,
    educationLoading,
    educationDeleteStatus,
    educationCreateStatus,
    educationUpdateStatus,
  } = useSelector((state) => state.expertRegisterSlice);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpertEducation());
    dispatch(getExpertSpecialization());
  }, [dispatch]);

  useEffect(() => {
    if (education.length === 0) {
      setData([initialCabinetEducationData]);
    } else {
      setData(
        education.map((el) => ({
          ...el,
          specialization_id: el?.specialization?.id,
        }))
      );
    }
  }, [education]);

  useEffect(() => {
    if (educationDeleteStatus === "success") {
      toast.success("Delete successfully!", options);
      setTimeout(() => dispatch(getExpertEducation()), 1500);
    } else if (educationCreateStatus === "success") {
      toast.success("sending successfully!", options);
      setTimeout(() => dispatch(getExpertEducation()), 1500);
    } else if (educationUpdateStatus === "success") {
      toast.success("update successfully!", options);
      setTimeout(() => dispatch(getExpertEducation()), 1500);
    } else if (
      educationCreateStatus === "error" ||
      educationDeleteStatus === "error"
    ) {
      toast.error("error sending !", options);
    }
  }, [
    educationCreateStatus,
    educationDeleteStatus,
    educationUpdateStatus,
    dispatch,
  ]);

  return {
    data,
    setData,
    education,
    specialization,
    educationLoading,
    dispatch,
  };
};
