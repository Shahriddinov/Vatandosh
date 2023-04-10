import "../customStyles.scss";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsImage } from "react-icons/bs";

export default function RegisterItem5({ activeBarItem }) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={
        activeBarItem !== 4
          ? "registeritem5 registeritem-scaleHidden"
          : "registeritem5 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}
    >
      <div className="registeritem5-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg5")}</h3>
        <div className="registeritem-form">
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
              placeholder={t("expert.inputplaceholder")}
            />
            <BsImage />
            <p>{t("expert.offerforimg")}</p>
          </label>
          <label htmlFor="" className="registeritem-label">
            <p>
              {t("expert.articleoffer")}
              <span>*</span>
            </p>
            <div className="registeritem-label-textarea">
              <textarea
                required
                type="text"
                minLength={3}
                maxLength={500}
                placeholder={t("expert.inputplaceholder")}
              />
            </div>
          </label>
          <label htmlFor="" className="registeritem-label">
            <p>
              {t("expert.information")} <span>*</span>
            </p>
            <div className="registeritem-label-textarea">
              <textarea
                required
                type="text"
                minLength={3}
                maxLength={500}
                placeholder={t("expert.inputplaceholder")}
              />
            </div>
          </label>
          <div className="registeritem-checkbox">
            <Checkbox
              checked={checked}
              onChange={handleChangeCheckbox}
              required
              inputProps={{ "aria-label": "controlled" }}
            />
            <p>{t("expert.nowwork")}</p>
          </div>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button
          type="submit"
          disabled={true}
          className="registeritem-submitBtn"
        >
          {t("expert.save")}
        </button>
      </div>
    </form>
  );
}
