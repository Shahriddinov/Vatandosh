import "./voluntaryActivity.scss";
import plusIcon from "../../../../../../../assets/images/choose/addPic.svg";
import FormCard from "./component/formCard";
import { useState } from "react";
import { motion } from "framer-motion";

const initialState = {
  id: new Date().getTime(),
  articleTopic: "",
  pics: [],
  comment: "",
};

const VoluntaryActivity = () => {
  const [data, setData] = useState([{ ...initialState }]);
  const addFormCopm = () => {
    setData((prev) => {
      return [...prev, { ...initialState, id: new Date().getTime() }];
    });
  };
  return (
    <div className="VoluntaryActivity">
      {data.map((el, index) => (
        <FormCard key={index} el={el} data={data} setData={setData} />
      ))}
      <motion.button whileTap={{ scale: 0.9 }} onClick={addFormCopm}>
        <img src={plusIcon} alt="plusIcon" />
      </motion.button>
      <div className="VoluntaryActivity-checkBoxCont">
        <input type="checkbox" id="allTrue" />
        <label htmlFor="allTrue">
          Barcha ma’lumotlarni to‘liq va to‘g‘ri kiritdim.
        </label>
      </div>
    </div>
  );
};

export default VoluntaryActivity;
