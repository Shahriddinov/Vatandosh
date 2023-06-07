import "./education.scss";
import Card from "./component/card";

// libarary
import { motion } from "framer-motion";

// icons
import btnPlusIcon from "../../../../../../../assets/images/choose/btnPlusIcon.svg";
import { useState } from "react";

const initialData = {
  univercity: "",
  faculty: "",
  specialties: ["Doctor", "Engineer", "Teacher", "Mechanic"],
  specialty: "",
  id: new Date().getTime(),
};

const Education = () => {
  const [inputData, setInputData] = useState([{ ...initialData }]);

  return (
    <div className="education-container">
      {inputData.map((el, index) => (
        <Card
          key={index}
          el={el}
          inputData={inputData}
          setInputData={setInputData}
        />
      ))}

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="education-container-btn"
        onClick={() =>
          setInputData((prev) => [
            ...prev,
            { ...initialData, id: new Date().getTime() },
          ])
        }
      >
        <img src={btnPlusIcon} alt="plusIcon" />
      </motion.button>
    </div>
  );
};

export default Education;
