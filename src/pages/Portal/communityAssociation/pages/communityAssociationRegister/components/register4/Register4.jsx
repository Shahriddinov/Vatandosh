import React from "react";

import "./register4.scss";
import MyInput from "../UI/myInput/MyInput";
import { useState } from "react";
import MyInputDate from "../UI/myInputDate/MyInputDate";
import { useTranslation } from "react-i18next";

const CommunityRegister4 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    name: "",
    time: "",
    count: "",
    achievements: "",
  });
  const { t } = useTranslation();

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
        IV. {t("communityAssociation.menu4_info.menu4_title")}
      </h3>

      <form className="community-association-register4__form">
        <MyInput
          value={data.name}
          text={t("communityAssociation.menu4_info.input1_name")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication4}
          type="text"
          inputType="input"
          valueKey="name"
        />

        <div className="community-association-register4__input_box">
          <MyInputDate
            text={t("communityAssociation.menu4_info.input2_name")}
            handleChange={handleChangeApplication4}
            valueKey="time"
          />
          <MyInput
            value={data.count}
            text={t("communityAssociation.menu4_info.input3_name")}
            placeholder="0"
            handleChange={handleChangeApplication4}
            type="number"
            inputType="input"
            valueKey="count"
          />
        </div>

        <MyInput
          value={data.achievements}
          text={t("communityAssociation.menu4_info.input4_name")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication4}
          type="text"
          inputType="input"
          valueKey="achievements"
        />

        <button className="community-association-register__form--btn">
          {t("communityAssociation.menu1_info.next")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister4;
