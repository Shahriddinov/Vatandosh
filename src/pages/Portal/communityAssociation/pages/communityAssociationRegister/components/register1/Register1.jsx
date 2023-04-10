import React from "react";
import { useState } from "react";
import { FileUploadIcon } from "../../../../../../../assets/images/communityAssociation";
import "./register1.scss";
import { MyImgUpload, MyInput } from "../";

const CommunityRegister1 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    name: "",
    certificate: [],
    logo: [],
  });

  const handleChangeApplication1 = ({ key, value }) => {
    setData((prev) => ({
      ...prev,
      [key]: key === "logo" ? [value] : value,
    }));
    console.log("salom1");
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
        I. Birlashma ma’lumotilari
      </h3>
      <form className="community-association-register1__form">
        <MyInput
          value={data.name}
          text="Tashkilot nomi"
          placeholder="Kiriting"
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
            Davlat organida roʻyxatdan oʻtganlik toʻgʻrisidagi guvohnomasi{" "}
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
                  : "Fayl yuklang"}
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
          text="Tashkilot logotipi(yuklab olish)"
          handleChange={handleChangeApplication1}
          valueKey="logo"
        />

        <button className="community-association-register__form--btn">
          Keyingisi
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister1;
