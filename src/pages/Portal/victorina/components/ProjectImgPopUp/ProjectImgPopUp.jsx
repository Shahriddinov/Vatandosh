import "./ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { BsImage } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { mediaVictorina } from "../../../../../reduxToolkit/victorinaImage/media-upload";
import { useRef, useState } from "react";

export default function ProjectImgPopUp({ setactivePopUp }) {
  const [picture, setPicture] = useState(null);
  const [file, setFile] = useState(null);
  const formRef = useRef();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState("");

  const onChangePicture = (data) => {
    setPicture(data);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(mediaVictorina(imageUpload));
    formRef.current.reset();
  };

  console.log(imageUpload);

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}></div>
      <form onSubmit={handleSumbit} className="victorina-popup">
        <h3 className="victorina-popup-title">{t("victorina.joinproject")}</h3>
        <div style={{ display: "flex", gap: "15px", width: "100%" }}>
          <label
            style={{ width: "100%" }}
            htmlFor=""
            className="registeritem-label">
            <p>
              {t("victorina.fio")} <span>*</span>
            </p>
            <div>
              <input
                // required
                type="text"
                minLength={3}
                maxLength={30}
                placeholder={t("victorina.name")}
              />
            </div>
          </label>
          <label
            style={{ width: "100%" }}
            htmlFor=""
            className="registeritem-label">
            <p>
              Pasport yuklash (pdf, doc) <span>*</span>
            </p>
            <div>
              <input
                // required
                type="file"
                minLength={3}
                maxLength={30}
                placeholder="Yuklang"
                onChange={(e) => {
                  onChangePicture(e.target.files[0]);
                }}
              />
            </div>
          </label>
        </div>
        <label
          htmlFor="registeritem-label-fileinput"
          className="registeritem-imgInput">
          <input
            required
            id="registeritem-label-fileinput"
            className="registeritem-label-fileinput"
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            onChange={(e) => {
              onChangePicture(e.target.files[0]);
              setImageUpload((prev) => ({
                ...prev,
                images: e.target.files[0].name,
              }));
            }}
          />
          <BsImage />
          <p>{t("victorina.projectimg")}</p>
        </label>
        <div className="victorina-popup-btnWrapper">
          <div
            className="victorina-popup-closeBtn"
            onClick={() => setactivePopUp(false)}>
            {t("projects_page.form_cancel")}
          </div>
          <button type="submit" className="victorina-popup-SubmitBtn">
            {t("footerSend")}
          </button>
        </div>
      </form>
    </div>
  );
}
