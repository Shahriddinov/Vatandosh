import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import scripka from "../../../../../assets/images/expert/scripka-icon.svg";
import { useTranslation } from "react-i18next";

export default function ProjectPoemsPopUp({ setactivePopUp }) {
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="projectImg">
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
        <label htmlFor="" className="registeritem-label">
          <p>
            {t("victorina.projectpoem")}
            <span>*</span>
          </p>
          <label htmlFor="registeritem-label-fileinput" required>
            <input
              required
              id="registeritem-label-fileinput"
              className="registeritem-label-fileinput"
              type="file"
            />
            <p>{t("expert.uploadfile")}</p>
            <img src={scripka} alt="" />
          </label>
        </label>
        <div className="victorina-popup-btnWrapper">
          <div
            type="click"
            className="victorina-popup-closeBtn"
            onClick={() => setactivePopUp(false)}
          >
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
