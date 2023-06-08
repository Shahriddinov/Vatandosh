import { useState } from "react";
import "./card.scss";

// libarary
import { motion } from "framer-motion";

// icons
import minusIcon from "../../../../../../../../assets/images/choose/minusIcon.svg";
import trashIcon from "../../../../../../../../assets/images/choose/trashIcon.svg";
import plusIcon from "../../../../../../../../assets/images/choose/plusIcon.svg";

const Card = ({ el, inputData, setInputData }) => {
  const [btnToggle, setBtnToggle] = useState(false);
  const obj = inputData.find((each) => each.id === el.id);
  const deleteHandler = () => {
    setInputData((prev) => prev.filter((each) => each.id !== el.id));
  };

  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newState = inputData.map((obj) => {
      if (obj.id === el.id) {
        return { ...obj, [name]: value };
      }
      return obj;
    });
    setInputData(newState);
  };

  return (
    <motion.div
      animate={{ height: !btnToggle ? "auto" : "70px" }}
      className="card-container"
    >
      <div className="card-container-hl"></div>
      <div className="card-container-header-cont">
        <h1>
          Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari
          universiteti
        </h1>
        <div>
          <motion.img
            onClick={() => setBtnToggle((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            src={btnToggle ? plusIcon : minusIcon}
            alt="plusMinusIcons"
          />
          <motion.img
            onClick={() => deleteHandler()}
            whileTap={{ scale: 0.9 }}
            src={trashIcon}
            alt="trashIcon"
          />
        </div>
      </div>

      <div className="card-container-inputWrapper1">
        <label htmlFor="univercity">Xorijda tahsil olgan OTM</label>
        <div>
          <input
            type="text"
            id="univercity"
            name="univercity"
            onChange={changeHandler}
            value={obj.univercity}
          />
        </div>
      </div>

      <div className="card-container-inputWrapper2">
        <div className="card-container-inputWrapper2-wrapper">
          <label htmlFor="faculty">Xorijda fakulteti</label>
          <div>
            <input
              type="text"
              id="faculty"
              name="faculty"
              onChange={changeHandler}
              value={obj.faculty}
            />
          </div>
        </div>
        <div className="card-container-inputWrapper2-wrapper">
          <label htmlFor="specialty">Xorijdagi mutaxassisligi</label>
          <div>
            <select name="specialty" id="specialty" onChange={changeHandler}>
              {obj.specialties.map((each, id) => (
                <option key={id} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
