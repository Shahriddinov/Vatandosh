import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectYouTubePopUp() {
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
