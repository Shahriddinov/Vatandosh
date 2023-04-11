import "./ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectImgPopUp() {
  const [activePopUp, setactivePopUp] = useState(true);

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="projectImg"
      style={activePopUp ? null : { display: "none" }}
    >
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}
      ></div>
      <form className="victorina-popup" onSubmit={handleSubmit}>
        <h3 className="victorina-popup-title">{t("victorina.joinproject")}</h3>
        <label htmlFor="" className="registeritem-label">
          <p>
            {t("victorina.fio")} <span>*</span>
          </p>
          <div>
            <input
              required
              type="text"
              minLength={3}
              maxLength={30}
              placeholder={t("victorina.name")}
            />
          </div>
        </label>
        <label
          htmlFor="registeritem-label-fileinput"
          className="registeritem-imgInput"
        >
          <input
            required
            id="registeritem-label-fileinput"
            className="registeritem-label-fileinput"
            type="file"
            minLength={3}
            maxLength={50}
          />
          <BsImage />
          <p>{t("victorina.projectimg")}</p>
        </label>
        <div className="victorina-popup-btnWrapper">
          <div
            className="victorina-popup-closeBtn"
            onClick={() => setactivePopUp(false)}
          >
            {t("form_cancel")}
          </div>
          <button type="submit" className="victorina-popup-SubmitBtn">
            {t("footerSend")}
          </button>
        </div>
      </form>
    </div>
  );
}
