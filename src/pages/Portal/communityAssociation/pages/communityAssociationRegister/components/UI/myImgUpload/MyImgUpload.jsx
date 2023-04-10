import React from "react";
import { BsImage } from "react-icons/bs";

import "./myImgUpload.scss";

const MyImgUpload = ({ data, text, handleChange, valueKey }) => {
  const handleChangeInput = (evt) => {
    handleChange({ key: valueKey, value: evt.target.files[0] });
  };

  return (
    <label htmlFor={valueKey} className="my-img-upload-imgInput">
      <input
        required
        className="my-img-upload-label-fileinput"
        id={valueKey}
        type="file"
        onChange={handleChangeInput}
        accept="image/png, image/gif, image/jpeg, image/jpg"
      />
      {data.length > 0 ? (
        <img
          className="my-img-upload__logo--img"
          src={URL.createObjectURL(data[0])}
          alt="img"
        />
      ) : (
        <>
          <BsImage />
          <p>
            {text}{" "}
            <span className="my-img-upload__certificate--required">*</span>
          </p>
        </>
      )}
    </label>
  );
};

export default MyImgUpload;
