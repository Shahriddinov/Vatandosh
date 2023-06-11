import "./education.scss";
import Card from "./component/card";

// libarary
import { motion } from "framer-motion";

// icons
import btnPlusIcon from "../../../../../../../assets/images/choose/btnPlusIcon.svg";
import { useState } from "react";
import {
  initialCabinetEducationData,
  useEducationFetching,
} from "./hooks/useEducationFetching";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { cabinetEducationDataSubmit } from "./extra";
import { ToastContainer } from "react-toastify";

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
    dispatch,
  } = useEducationFetching();

  if (educationLoading) {
    return <Spinner />;
  }

  const handleSubmit = () =>
    cabinetEducationDataSubmit({
      dispatch,
      data,
      setData,
      education,
    });

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
      <div className="education-container">
        {data.map((el, index) => (
          <Card
            key={index}
            el={el}
            data={data}
            setData={setData}
            dispatch={dispatch}
          />
        ))}

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="education-container-btn"
          onClick={() =>
            setData((prev) => [
              ...prev,
              { ...initialCabinetEducationData, id: Date.now() },
            ])
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

export default Education;
