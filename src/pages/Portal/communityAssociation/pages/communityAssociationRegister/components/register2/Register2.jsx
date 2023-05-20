import React from "react";
import { useState } from "react";

import "./register2.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { postCommunityImage } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { communityCreateDataAdd } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";
import { Application2ImageUpload, MyInput } from "../";
import { useEffect } from "react";

const CommunityRegister2 = ({ activeBarItem, handleClick }) => {
  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );

  const communityImagePostStatus = useSelector(
    (store) => store.community.communityImagePostStatus
  );
  const [data, setData] = useState({
    title: communityCreateData.title,
    description: communityCreateData.description,
    attachments: communityCreateData.attachments,
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangeApplication2 = ({ key, value }) => {
    if (key === "attachments") {
      setData((prev) => ({
        ...prev,
        [key]: [value],
      }));
      console.log(value);
      const attachmentsData = new FormData();
      attachmentsData.append("image", value);
      attachmentsData.append("folder", "community");
      dispatch(postCommunityImage({ key, image: attachmentsData }));
    } else {
      setData((prev) => ({
        ...prev,
        [key]: value,
      }));

      const newCommunityCreateData = {
        ...communityCreateData,
        [key]: value,
      };

      dispatch(communityCreateDataAdd(newCommunityCreateData));
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    handleClick("3");
  };

  useEffect(() => {
    setData({
      title: communityCreateData.title,
      description: communityCreateData.description,
      attachments: communityCreateData.attachments,
    });
  }, [communityCreateData]);
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
      <form
        className="community-association-register1__form"
        onSubmit={handleSubmit2}
      >
        <MyInput
          value={data.title}
          text={t("communityAssociation.input_title")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication2}
          type="text"
          inputType="input"
          valueKey="title"
          required={true}
        />

        <MyInput
          value={data.description}
          text={t("communityAssociation.menu2_info.input2_name")}
          placeholder={t("communityAssociation.desc_textarea_plack")}
          handleChange={handleChangeApplication2}
          type="description"
          inputType="textarea"
          valueKey="description"
          required={true}
        />

        <Application2ImageUpload
          data={communityCreateData.attachments}
          uploadStatus={communityImagePostStatus}
          text={t("communityAssociation.menu2_info.input3_name")}
          handleChange={handleChangeApplication2}
          valueKey="attachments"
          countImg={2}
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

export default CommunityRegister2;
