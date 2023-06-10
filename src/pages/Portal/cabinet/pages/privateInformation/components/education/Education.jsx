import "./education.scss";
import Card from "./component/card";

// libarary
import { motion } from "framer-motion";

// icons
import btnPlusIcon from "../../../../../../../assets/images/choose/btnPlusIcon.svg";
import { useState } from "react";
import { useEducationFetching } from "./hooks/useEducationFetching";
import Spinner from "../../../../../../../component/Spinner/Spinner";

const initialData = {
  univercity: "",
  faculty: "",
  specialties: ["Doctor", "Engineer", "Teacher", "Mechanic"],
  specialty: "",
  id: new Date().getTime(),
};

const Education = () => {
  const [inputData, setInputData] = useState([{ ...initialData }]);
  const {
    data,
    setData,
    education,
    specialization,
    educationLoading,
    initialValue,
  } = useEducationFetching();

  if (educationLoading) {
    return <Spinner />;
  }
  console.log(specialization);

  return (
    <div className="education-container">
      {data.map((el, index) => (
        <Card key={index} el={el} inputData={data} setInputData={setData} />
      ))}

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="education-container-btn"
        onClick={() =>
          setData((prev) => [
            ...prev,
            { ...initialValue, id: new Date().getTime() },
          ])
        }
      >
        <img src={btnPlusIcon} alt="plusIcon" />
      </motion.button>
    </div>
  );
};

export default Education;
