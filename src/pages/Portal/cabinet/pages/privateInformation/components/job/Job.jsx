import "./job.scss";
import { motion } from "framer-motion";
import FormComp from "./components/formComp";
import btnPlusIcon from "../../../../../../../assets/images/choose/btnPlusIcon.svg";
import { useState } from "react";
import { initialJobData, useJobFetching } from "./hooks/useJobFetching";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import {
  cabinetJobDataDelete,
  cabinetJobDataSubmit,
  handleCabinetJob,
} from "./extra";
import { ToastContainer } from "react-toastify";

const Job = () => {
  const { data, setData, employment, employmentLoading, dispatch } =
    useJobFetching();
  if (employmentLoading) {
    return <Spinner />;
  }

  const handleChange = ({ key, value, comId }) =>
    handleCabinetJob({ key, value, comId, data, setData });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    cabinetJobDataSubmit({ dispatch, data, setData, employment });
  };

  const deleteFunction = (id) => cabinetJobDataDelete(id, dispatch);

  console.log(data);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="jobCont">
        {data.map((el, index) => (
          <FormComp
            key={index}
            el={el}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            deleteFunction={deleteFunction}
          />
        ))}

        {}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setData((prev) => [...prev, { ...initialJobData, id: Date.now() }])
          }
        >
          <img src={btnPlusIcon} alt="plusIcon" />
        </motion.button>
      </div>
      <button className="commonInformation-form-btn" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default Job;
