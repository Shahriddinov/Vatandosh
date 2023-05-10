import React from "react";
import MyInput from "../../../communityAssociationRegister/components/UI/myInput/MyInput";
import { PlusIcon } from "../../../../../../../assets/images/communityAssociation";
import { BsFillTrashFill, BsImage } from "react-icons/bs";
import Modal from "@mui/material/Modal";

import "./addNewsModal.scss";
import { useAddNewsModalFetching } from "./hooks/useAddNewsModalFetching";

import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

const AddNewsModal = ({ open, handleClose, id, toast }) => {
  const {
    data,
    handleChangeApplication1,
    handleClick,
    ImageUpload,
    t,
    handleSubmit,
  } = useAddNewsModalFetching(id, toast, handleClose);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="add-news-modal"
      >
        <div className="add-news-modal__content">
          <h3 className="add-news-modal__title">{t("news")}</h3>

          <form className="add-news-modal__form" onSubmit={handleSubmit}>
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
              value={data.content}
              text={t("communityAssociation.desc_input")}
              placeholder={t("communityAssociation.desc_textarea_plack")}
              handleChange={handleChangeApplication1}
              type="text"
              inputType="textarea"
              valueKey="content"
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
              {data.attachments.length > 0
                ? data.attachments.map((img, i) => (
                    <div className="my-img-upload__img_item" key={i}>
                      <button
                        onClick={() => handleClick(img.id)}
                        className="my-img-upload__img_delete"
                      >
                        <BsFillTrashFill />{" "}
                        <span>{t("communityAssociation.delete")}</span>
                      </button>
                      <img
                        className="my-img-upload__img"
                        src={`${PORTAL_IMAGE_URL}/${img?.path}`}
                        alt="img"
                      />
                    </div>
                  ))
                : null}
              <label
                htmlFor="img-uploaded"
                className={
                  data.attachments.length > 0
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
                    ImageUpload({
                      key: "community",
                      image: evt.target.files[0],
                    })
                  }
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                />

                {data.attachments.length > 0 ? (
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
              <button
                className="add-news-modal__btn add-news-modal__btn_primary"
                type="submit"
              >
                {t("communityAssociation.send")}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddNewsModal;
