import "../customStyles.scss";
import scripka from "../../../../../../../assets/images/expert/scripka-icon.svg";
import { useTranslation } from "react-i18next";

export default function RegisterItem4({ activeBarItem }) {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={
        activeBarItem !== 3
          ? "registeritem4 registeritem-scaleHidden"
          : "registeritem4 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}
    >
      <div className="registeritem4-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg4")}</h3>
        <div className="registeritem-form">
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.degree")} <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="text"
                  minLength={3}
                  maxLength={100}
                  placeholder={t("expert.inputplaceholder")}
                />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.activitypositon")} <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="text"
                  minLength={3}
                  maxLength={100}
                  placeholder={t("expert.inputplaceholder")}
                />
              </div>
            </label>
          </div>
          <label htmlFor="" className="registeritem-label">
            <p>
              {t("expert.articletitle")} <span>*</span>
            </p>
            <div>
              <input
                required
                type="text"
                minLength={3}
                maxLength={100}
                placeholder={t("expert.inputplaceholder")}
              />
            </div>
          </label>
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.articlename")}
                <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="text"
                  minLength={3}
                  maxLength={50}
                  placeholder={t("expert.inputplaceholder")}
                />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.articledate")} <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="date"
                  placeholder={t("expert.inputplaceholder")}
                />
              </div>
            </label>
          </div>
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.articlelink")} <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="text"
                  minLength={3}
                  maxLength={50}
                  placeholder={t("expert.inputplaceholder")}
                />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.articlefile")}
                <span>*</span>
              </p>
              <label htmlFor="registeritem-label-fileinput" required>
                <input
                  required
                  id="registeritem-label-fileinput"
                  className="registeritem-label-fileinput"
                  type="file"
                  placeholder={t("expert.inputplaceholder")}
                />
                <p>{t("expert.uploadfile")}</p>
                <img src={scripka} alt="" />
              </label>
            </label>
          </div>
          <label htmlFor="" className="registeritem-label">
            <p>
              {t("expert.articlehobby")}
              <span>*</span>
            </p>
            <div>
              <input
                required
                type="text"
                minLength={3}
                maxLength={50}
                placeholder={t("expert.inputplaceholder")}
              />
            </div>
            <ul className="registeritem-interest-list">
              <li>Global governance</li>
              <li>International trade and development</li>
            </ul>
          </label>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button type="submit" className="registeritem-submitBtn">
          {t("expert.nextbtn")}
        </button>
      </div>
    </form>
  );
}
