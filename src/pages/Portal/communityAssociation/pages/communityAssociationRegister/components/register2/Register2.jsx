import React from "react";
import MyInput from "../UI/myInput/MyInput";
import { useState } from "react";
import MyImgUpload from "../UI/myImgUpload/MyImgUpload";

import "./register2.scss";
import { useTranslation } from "react-i18next";

const CommunityRegister2 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    title: "",
    comment: "",
    componyImg: [],
  });
  const { t } = useTranslation();

  const handleChangeApplication2 = ({ key, value }) => {
    setData((prev) => ({
      ...prev,
      [key]: key === "componyImg" ? [value] : value,
    }));
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
        {t("communityAssociation.menu2_info.menu2_title")}
      </h3>
      <form className="community-association-register1__form">
        <MyInput
          value={data.title}
          text={t("communityAssociation.input_title")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication2}
          type="text"
          inputType="input"
          valueKey="title"
        />

        <MyInput
          value={data.comment}
          text={t("communityAssociation.menu2_info.input2_name")}
          placeholder={t("communityAssociation.desc_textarea_plack")}
          handleChange={handleChangeApplication2}
          type="comment"
          inputType="textarea"
          valueKey="comment"
        />

        <MyImgUpload
          data={data.componyImg}
          text={t("communityAssociation.menu2_info.input3_name")}
          handleChange={handleChangeApplication2}
          valueKey="componyImg"
          countImg={2}
        />

        <button className="community-association-register__form--btn">
          {t("communityAssociation.menu1_info.next")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister2;
