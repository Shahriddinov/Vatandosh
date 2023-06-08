import "./job.scss";
import { motion } from "framer-motion";
import FormComp from "./components/formComp";
import btnPlusIcon from "../../../../../../../assets/images/choose/btnPlusIcon.svg";
import { useState } from "react";

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
  const [data, setData] = useState([initialData]);
  console.log(data);
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
