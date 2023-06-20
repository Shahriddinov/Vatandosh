import React from "react";
import { useState } from "react";

import "./register2.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { postCommunityImage } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import {
  communityCreateDataAdd,
  deleteCommunityImage,
} from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";
import { Application2ImageUpload, MyInput } from "../";
import { useEffect } from "react";
import { BsFillTrashFill, BsImage } from "react-icons/bs";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { PlusIcon } from "../../../../../../../assets/images/communityAssociation";

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

        <div className="community-association-register1__img_list">
          {data.attachments?.map((img, i) => (
            <div className="community-association-register1__img_item" key={i}>
              <button
                onClick={() => dispatch(deleteCommunityImage(img))}
                className="community-association-register1__img_delete"
                type="button"
              >
                <BsFillTrashFill />{" "}
                <span>{t("communityAssociation.delete")}</span>
              </button>
              <img
                className="community-association-register1__img"
                src={`${PORTAL_IMAGE_URL}${img}`}
                alt="img"
              />
            </div>
          ))}
          <label
            htmlFor="attachments"
            className={
              data.attachments.length > 0
                ? "community-association-register1-imgInput_add-img"
                : "community-association-register1-imgInput"
            }
          >
            <input
              required
              className="community-association-register1-label-fileinput"
              id="attachments"
              type="file"
              onChange={(evt) =>
                handleChangeApplication2({
                  key: "attachments",
                  value: evt.target.files[0],
                })
              }
              accept="image/png, image/gif, image/jpeg, image/jpg"
            />

            {data.attachments?.length > 0 ? (
              <div className="community-association-register1__img_add">
                <img className="" src={PlusIcon} alt="Icon" />
              </div>
            ) : (
              <>
                <BsImage />
                <p>
                  {t("communityAssociation.upload_image")}{" "}
                  <span className="community-association-register1__certificate--required">
                    *
                  </span>
                </p>
              </>
            )}
          </label>
        </div>

        {/* <Application2ImageUpload
          data={communityCreateData.attachments}
          uploadStatus={communityImagePostStatus}
          text={t("communityAssociation.menu2_info.input3_name")}
          handleChange={handleChangeApplication2}
          valueKey="attachments"
          countImg={2}
        /> */}

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
