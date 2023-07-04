import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import MyInput from "../../../../../communityAssociation/pages/communityAssociationRegister/components/UI/myInput/MyInput";
import { useTranslation } from "react-i18next";
import "./addArticleModal.scss";
import { FileUploadIcon } from "../../../../../../../assets/images/communityAssociation";
import { createArticle, inputValueChange } from "./extra";
import { ToastContainer } from "react-toastify";
import { Spinner } from "../../../../../../../component";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
};

const AddArticleModal = ({ open, handleClose }) => {
  const [data, setData] = useState({ full_name: "", text: "", upload: "" });
  const [fileSending, setFileSending] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createArticle({ data, setData, setFileSending, handleClose });
  };

  const handleChangeApplication1 = ({ key, value }) =>
    inputValueChange({ key, value, setData });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="add-article-modal">
        <div className="container">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="add-article-modal__content">
              <form className="add-article-modal__form" onSubmit={handleSubmit}>
                <MyInput
                  value={data.full_name}
                  text={t("communityAssociation.input_title")}
                  placeholder={t("communityAssociation.title_input_plack")}
                  handleChange={handleChangeApplication1}
                  type="text"
                  inputType="input"
                  valueKey="full_name"
                />

                <MyInput
                  value={data.text}
                  text={t("communityAssociation.desc_input")}
                  placeholder={t("communityAssociation.desc_textarea_plack")}
                  handleChange={handleChangeApplication1}
                  type="text"
                  inputType="input"
                  valueKey="text"
                />

                <label
                  htmlFor="upload"
                  className="add-article-modal__certificate"
                >
                  <span className="add-article-modal__certificate--span">
                    {t("communityAssociation.menu1_info.input2_name")}
                    <span className="add-article-modal__certificate--required">
                      *
                    </span>
                  </span>
                  <div className="add-article-modal__certificate--box">
                    <div className="">
                      <input
                        type="file"
                        name="upload"
                        id="upload"
                        onChange={(evt) =>
                          handleChangeApplication1({
                            key: "upload",
                            value: evt.target.files[0],
                          })
                        }
                        className="add-article-modal__certificate--input"
                      />
                      <span className="add-article-modal__certificate--text">
                        {data.upload.length > 0
                          ? data.upload
                          : t(
                              "communityAssociation.menu1_info.input2_placeholder"
                            )}
                      </span>
                    </div>

                    <img
                      src={FileUploadIcon}
                      alt="File upload icon"
                      className="add-article-modal__certificate--img"
                    />
                  </div>
                </label>

                <div className="add-article-modal__btn_roup">
                  <button
                    type="button"
                    className="add-article-modal__btn add-article-modal__btn_white"
                    onClick={handleClose}
                  >
                    {t("communityAssociation.cancel")}
                  </button>
                  <button
                    className="add-article-modal__btn add-article-modal__btn_primary"
                    type="submit"
                  >
                    {fileSending ? <Spinner /> : t("communityAssociation.send")}
                  </button>
                </div>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AddArticleModal;
