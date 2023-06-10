import "./job.scss";
import { motion } from "framer-motion";
import FormComp from "./components/formComp";
import btnPlusIcon from "../../../../../../../assets/images/choose/btnPlusIcon.svg";
import { useState } from "react";

const initialData = {
  jobLocatedCountry: "",
  jobLocatedCity: "",
  specialization: "",
  workPlace: "",
  currentlyWorking: false,
  startDate: "",
  finishDate: "",
  id: Date.now(),
};
const Job = () => {
  const [data, setData] = useState([{ ...initialData }]);
  console.log(data);
  const inputHandler = (e, formId) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setData((prev) => {
      const updatedData = prev.map((each) => {
        if (each.id === formId) {
          return { ...each, [name]: value };
        }
        return each;
      });

      return updatedData;
    });
  };
  return (
    <div className="jobCont">
      {data.map((el, index) => (
        <FormComp key={index} el={el} data={data} inputHandler={inputHandler} />
      ))}

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
