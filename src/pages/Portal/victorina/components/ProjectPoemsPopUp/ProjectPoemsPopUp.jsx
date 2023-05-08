import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import scripka from "../../../../../assets/images/expert/scripka-icon.svg";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sendVictorinaFile } from "../../../../../reduxToolkit/victorinaFile/download";

export default function ProjectPoemsPopUp({ setactivePopUp }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    text: "",
  });
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      text: selectedFile,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("text", formData.text);

    dispatch(sendVictorinaFile({ id, data }));
  };

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}></div>
      <form className="victorina-popup" onSubmit={handleSubmit}>
        <h3 className="victorina-popup-title">{t("victorina.joinproject")}</h3>
        <label htmlFor="" className="registeritem-label">
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
        <label htmlFor="" className="registeritem-label">
          <p>
            {t("victorina.projectpoem")}
            <span>*</span>
          </p>
          <label htmlFor="text" required>
            <input
              required
              className="registeritem-label-fileinput"
              type="file"
              id="text"
              name="text"
              onChange={handleFileSelect}
              accept="application/pdf, image/*"
            />
            <p>{t("expert.uploadfile")}</p>
            <img src={scripka} alt="" />
          </label>
        </label>
        <div className="victorina-popup-btnWrapper">
          <div
            type="click"
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
