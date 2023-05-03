import React from "react";

import "./register4.scss";
import MyInput from "../UI/myInput/MyInput";
import { useState } from "react";
import MyInputDate from "../UI/myInputDate/MyInputDate";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { communityCreateDataAdd } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";

const CommunityRegister4 = ({ activeBarItem, handleClick }) => {
  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );
  const [data, setData] = useState({
    work: communityCreateData.work,
    created_date: communityCreateData.created_date,
    members: communityCreateData.members,
    achievement: communityCreateData.achievement,
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangeApplication4 = ({ key, value }) => {
    const newCommunityCreateData = {
      ...communityCreateData,
      [key]: value,
    };

    dispatch(communityCreateDataAdd(newCommunityCreateData));
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    handleClick("5");
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

      <form
        className="community-association-register4__form"
        onSubmit={handleSubmit3}
      >
        <MyInput
          value={data.work}
          text={t("communityAssociation.menu4_info.input1_name")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication4}
          type="text"
          inputType="input"
          valueKey="work"
          required={true}
        />

        <div className="community-association-register4__input_box">
          <MyInputDate
            text={t("communityAssociation.menu4_info.input2_name")}
            handleChange={handleChangeApplication4}
            valueKey="created_date"
            value={data.created_date}
          />
          <MyInput
            value={data.members}
            text={t("communityAssociation.menu4_info.input3_name")}
            placeholder="0"
            handleChange={handleChangeApplication4}
            type="number"
            inputType="input"
            valueKey="members"
            required={true}
          />
        </div>

        <MyInput
          value={data.achievement}
          text={t("communityAssociation.menu4_info.input4_name")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication4}
          type="text"
          inputType="input"
          valueKey="achievement"
          required={true}
        />

        <button
          className="community-association-register__form--btn"
          type="submit"
        >
          {t("communityAssociation.menu1_info.next")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister4;
