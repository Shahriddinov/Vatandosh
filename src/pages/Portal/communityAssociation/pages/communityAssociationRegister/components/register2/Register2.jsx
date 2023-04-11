import React from "react";
import MyInput from "../UI/myInput/MyInput";
import { useState } from "react";
import MyImgUpload from "../UI/myImgUpload/MyImgUpload";

import "./register2.scss";

const CommunityRegister2 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    title: "",
    comment: "",
    componyImg: [],
  });

  const handleChangeApplication2 = ({ key, value }) => {
    setData((prev) => ({
      ...prev,
      [key]: key === "componyImg" ? [value] : value,
    }));
    console.log("salom2");
  };

  return (
    <div
      className={`community-association-register2  ${
        activeBarItem !== "2"
          ? "registeritem-scaleHidden"
          : "registeritem-scaleActive"
      }`}
    >
      <h3 className="community-association-register__title">
        II. Tashkilot haqida
      </h3>
      <form className="community-association-register1__form">
        <MyInput
          value={data.title}
          text="Title"
          placeholder="Kiriting"
          handleChange={handleChangeApplication2}
          type="text"
          inputType="input"
          valueKey="title"
        />

        <MyInput
          value={data.comment}
          text="Tashkilot haqida  ma’lumot"
          placeholder="Izoh"
          handleChange={handleChangeApplication2}
          type="comment"
          inputType="textarea"
          valueKey="comment"
        />

        <MyImgUpload
          data={data.componyImg}
          text="Tashkilot uchun rasmlar (yuklab olish)"
          handleChange={handleChangeApplication2}
          valueKey="componyImg"
          countImg={2}
        />

        <button className="community-association-register__form--btn">
          Keyingisi
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister2;
