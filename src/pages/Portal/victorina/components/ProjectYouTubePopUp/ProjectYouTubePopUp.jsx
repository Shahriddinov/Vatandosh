import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { useTranslation } from "react-i18next";

export default function ProjectYouTubePopUp({ setactivePopUp }) {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}></div>
      <form className="victorina-popup" onSubmit={handleSubmit}>
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
                required
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
                required
                type="file"
                minLength={3}
                maxLength={30}
                placeholder="Yuklang"
              />
            </div>
          </label>
        </div>
        <label htmlFor="" className="registeritem-label">
          <p>{t("victorina.projectyoutube")}</p>
          <div>
            <input
              required
              type="url"
              minLength={3}
              maxLength={30}
              placeholder={t("victorina.videourl")}
            />
          </div>
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
