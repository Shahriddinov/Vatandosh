import React from "react";
import { useState } from "react";
import { FileUploadIcon } from "../../../../../../../assets/images/communityAssociation";
import "./register1.scss";
import { MyImgUpload, MyInput } from "../";
import { useTranslation } from "react-i18next";

const CommunityRegister1 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    name: "",
    certificate: [],
    logo: [],
  });
  const { t } = useTranslation();

  const handleChangeApplication1 = ({ key, value }) => {
    setData((prev) => ({
      ...prev,
      [key]: key === "logo" ? [value] : value,
    }));
  };

  return (
    <div
      className={`community-association-register1  ${
        activeBarItem !== "1"
          ? "registeritem-scaleHidden"
          : "registeritem-scaleActive"
      }`}
    >
      <h3 className="community-association-register__title">
        {t("communityAssociation.menu1_info.menu1_title")}
      </h3>
      <form className="community-association-register1__form">
        <MyInput
          value={data.name}
          text={t("communityAssociation.menu1_info.input1_name")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication1}
          type="text"
          inputType="input"
          valueKey="name"
        />

        <label
          htmlFor="certificate"
          className="community-association-register1__certificate"
        >
          <span className="community-association-register1__certificate--span">
            {t("communityAssociation.menu1_info.input2_name")}
            <span className="community-association-register1__certificate--required">
              *
            </span>
          </span>
          <div className="community-association-register1__certificate--box">
            <div className="">
              <input
                type="file"
                name="certificate"
                id="certificate"
                onChange={(evt) =>
                  setData((prev) => ({
                    ...prev,
                    certificate: [evt.target.files[0]],
                  }))
                }
                className="community-association-register1__certificate--input"
              />
              <span className="community-association-register1__certificate--text">
                {data.certificate.length > 0
                  ? data.certificate[0].name
                  : t("communityAssociation.menu1_info.input2_placeholder")}
              </span>
            </div>

            <img
              src={FileUploadIcon}
              alt="File upload icon"
              className="community-association-register1__certificate--img"
            />
          </div>
        </label>

        <MyImgUpload
          data={data.logo}
          text={t("communityAssociation.menu1_info.input3_name")}
          handleChange={handleChangeApplication1}
          valueKey="logo"
        />

        <button className="community-association-register__form--btn">
          {t("communityAssociation.menu1_info.next")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister1;
