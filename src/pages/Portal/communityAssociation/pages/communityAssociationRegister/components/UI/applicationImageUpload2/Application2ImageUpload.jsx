import React from "react";
import { BsImage } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import "../myImgUpload/myImgUpload.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../../services/api/utils";

const Application2ImageUpload = ({ data, text, handleChange, valueKey }) => {
  const handleChangeInput = (evt) => {
    handleChange({ key: valueKey, value: evt.target.files[0] });
  };

  return (
    <label
      htmlFor={valueKey}
      className={
        data.length > 0
          ? "my-img-upload-imgInput_edit"
          : "my-img-upload-imgInput"
      }
    >
      <input
        className="my-img-upload-label-fileinput"
        id={valueKey}
        type="file"
        onChange={handleChangeInput}
        accept="image/png, image/gif, image/jpeg, image/jpg"
        multiple
      />

      {data.length > 0 ? (
        <div className="my-img-upload__img_item">
          <button className="my-img-upload__img_edit">
            <FiEdit /> <span>Edit</span>
          </button>
          <img
            className="my-img-upload__img"
            src={`${PORTAL_IMAGE_URL}/${data}`}
            alt="img"
          />
        </div>
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

export default Application2ImageUpload;
