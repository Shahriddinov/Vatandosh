import "./voluntaryActivity.scss";
import plusIcon from "../../../../../../../assets/images/choose/addPic.svg";
import FormCard from "./component/formCard";
import { useState } from "react";
import { motion } from "framer-motion";
import useVoluntaryActivityFetching from "./hooks/useVoluntaryActivityFetching";

const initialState = {
  id: new Date().getTime(),
  title: "",
  description: "",
  images: [],
  imagesBrowser: [],
  from: "client",
};

const VoluntaryActivity = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { deleteCompHandler, submitCompHandler } = useVoluntaryActivityFetching(
    setData,
    initialState,
    data
  );
  const addFormCopm = () => {
    setData((prev) => {
      return [...prev, { ...initialState, id: new Date().getTime() }];
    });
  };

  return (
    <div className="VoluntaryActivity">
      {data.map((el, index) => (
        <FormCard
          key={index}
          el={el}
          data={data}
          setData={setData}
          deleteCompHandler={deleteCompHandler}
        />
      ))}
      <motion.button whileTap={{ scale: 0.9 }} onClick={addFormCopm}>
        <img src={plusIcon} alt="plusIcon" />
      </motion.button>
      <div className="VoluntaryActivity-checkBoxCont">
        <input
          type="checkbox"
          id="allTrue"
          onChange={(e) => setToggle(!e.target.checked)}
        />
        <label htmlFor="allTrue">
          Barcha ma’lumotlarni to‘liq va to‘g‘ri kiritdim.
        </label>
      </div>
      <button
        type="button"
        disabled={toggle}
        onClick={() => submitCompHandler(data)}
      >
        Saqlash
      </button>
    </div>
  );
};

export default VoluntaryActivity;
