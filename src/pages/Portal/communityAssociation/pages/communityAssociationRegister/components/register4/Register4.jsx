import React from "react";

import "./register4.scss";
import MyInput from "../UI/myInput/MyInput";
import { useState } from "react";
import MyInputDate from "../UI/myInputDate/MyInputDate";

const CommunityRegister4 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    name: "",
    time: "",
    count: "",
    achievements: "",
  });

  const handleChangeApplication4 = ({ key, value }) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={`community-association-register4  ${
        activeBarItem !== "4"
          ? "registeritem-scaleHidden"
          : "registeritem-scaleActive"
      }`}
    >
      <h3 className="community-association-register__title">
        IV. Tashkilot faoliyati
      </h3>

      <form className="community-association-register4__form">
        <MyInput
          value={data.name}
          text="Tashkilotning nizom faoliyati"
          placeholder="Kiriting"
          handleChange={handleChangeApplication4}
          type="text"
          inputType="input"
          valueKey="name"
        />

        <div className="community-association-register4__input_box">
          <MyInputDate
            text="Tashkilot tashkil etilgan sana"
            handleChange={handleChangeApplication4}
            valueKey="time"
          />
          <MyInput
            value={data.count}
            text="Tashkilot a'zolari soni "
            placeholder="0"
            handleChange={handleChangeApplication4}
            type="number"
            inputType="input"
            valueKey="count"
          />
        </div>

        <MyInput
          value={data.achievements}
          text="Asosiy yutuqlar"
          placeholder="Kiriting"
          handleChange={handleChangeApplication4}
          type="text"
          inputType="input"
          valueKey="achievements"
        />

        <button className="community-association-register__form--btn">
          Keyingisi
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister4;
