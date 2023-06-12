import "./job.scss";
import { motion } from "framer-motion";
import FormComp from "./components/formComp";
import btnPlusIcon from "../../../../../../../assets/images/choose/btnPlusIcon.svg";
import { useState } from "react";
import { useJobFetching } from "./hooks/useJobFetching";
import Spinner from "../../../../../../../component/Spinner/Spinner";

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
const Job = () => {
  // const [data, setData] = useState([initialData]);
  const { data, setData, locationData, employment, employmentLoading } =
    useJobFetching();
  if (employmentLoading) {
    return <Spinner />;
  }
  console.log(data);
  console.log(locationData);
  console.log(employment);
  return (
    <div className="jobCont">
      {data.map((el, index) => (
        <FormComp key={index} el={el} />
      ))}

      {}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          setData((prev) => [...prev, { ...initialData, id: Date.now() }])
        }
      >
        <img src={btnPlusIcon} alt="plusIcon" />
      </motion.button>
    </div>
  );
};

export default Job;
