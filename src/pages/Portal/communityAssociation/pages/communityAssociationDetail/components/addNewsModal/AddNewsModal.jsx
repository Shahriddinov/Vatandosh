import React from "react";
import MyInput from "../../../communityAssociationRegister/components/UI/myInput/MyInput";
import { useState } from "react";
import { PlusIcon } from "../../../../../../../assets/images/communityAssociation";
import { BsFillTrashFill, BsImage } from "react-icons/bs";
import Modal from "@mui/material/Modal";

import "./addNewsModal.scss";
import { useTranslation } from "react-i18next";

const AddNewsModal = ({ open, handleClose }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    videoLink: "",
    images: [],
  });
  const { t } = useTranslation();

  const handleChangeApplication1 = ({ key, value }) => {
    if (value !== undefined) {
      setData((prev) => ({
        ...prev,
        [key]:
          key === "images"
            ? [...prev.images, { id: Date.now(), imgUrl: value }]
            : value,
      }));
    }
  };

  const handleClick = (id) => {
    setData((prev) => ({
      ...prev,
      images: prev.images.filter((el) => el.id !== id),
    }));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="add-news-modal"
    >
      <div className="add-news-modal__content">
        <h3 className="add-news-modal__title">{t("news")}</h3>

        <form className="add-news-modal__form">
          <MyInput
            value={data.title}
            text={t("communityAssociation.input_title")}
            placeholder={t("communityAssociation.title_input_plack")}
            handleChange={handleChangeApplication1}
            type="text"
            inputType="input"
            valueKey="title"
          />

          <MyInput
            value={data.description}
            text={t("communityAssociation.desc_input")}
            placeholder={t("communityAssociation.desc_textarea_plack")}
            handleChange={handleChangeApplication1}
            type="text"
            inputType="textarea"
            valueKey="description"
          />

          <MyInput
            value={data.videoLink}
            text={t("communityAssociation.vide_input")}
            placeholder={t("communityAssociation.vide_input_plack")}
            handleChange={handleChangeApplication1}
            type="text"
            inputType="input"
            valueKey="videoLink"
          />

          <div className="my-img-upload__img_list">
            {data.images.length > 0
              ? data.images.map((img) => (
                  <div className="my-img-upload__img_item">
                    <button
                      onClick={() => handleClick(img.id)}
                      className="my-img-upload__img_delete"
                    >
                      <BsFillTrashFill />{" "}
                      <span>{t("communityAssociation.delete")}</span>
                    </button>
                    <img
                      className="my-img-upload__img"
                      src={URL.createObjectURL(img.imgUrl)}
                      alt="img"
                    />
                  </div>
                ))
              : null}
            <label
              htmlFor="img-uploaded"
              className={
                data.images.length > 0
                  ? "my-img-upload-imgInput_add-img"
                  : "my-img-upload-imgInput"
              }
            >
              <input
                required
                className="my-img-upload-label-fileinput"
                id="img-uploaded"
                type="file"
                onChange={(evt) =>
                  handleChangeApplication1({
                    key: "images",
                    value: evt.target.files[0],
                  })
                }
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />

              {data.images.length > 0 ? (
                <div className="my-img-upload__img_add">
                  <img className="" src={PlusIcon} alt="Icon" />
                </div>
              ) : (
                <>
                  <BsImage />
                  <p>
                    {t("communityAssociation.upload_image")}{" "}
                    <span className="my-img-upload__certificate--required">
                      *
                    </span>
                  </p>
                </>
              )}
            </label>
          </div>

          <div className="add-news-modal__btn_roup">
            <button
              type="button"
              className="add-news-modal__btn add-news-modal__btn_white"
              onClick={handleClose}
            >
              {t("communityAssociation.cancel")}
            </button>
            <button className="add-news-modal__btn add-news-modal__btn_primary">
              {t("communityAssociation.send")}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddNewsModal;
