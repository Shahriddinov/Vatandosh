import "../../../../../expert/pages/ExpertRegister/components/customStyles.scss";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsImage } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postSuggestions } from "../../../../../../../reduxToolkit/ExpertSlice/Suggestions/extraReducer";

export default function RegisterTwo({ activeBarItem }) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    suggestions: "",
    additional_information: "",
    image: null,
    type: pathname.includes("expert") ? 1 : 2,
  });

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return alert(t("expert.offerforimg"));
    setFormData((args) => ({
      ...args,
      suggestions: formData.suggestions.trim(),
      additional_information: formData.additional_information.trim(),
    }));

    if (formData.suggestions.trim() && formData.suggestions.trim()) {
      const res = await dispatch(postSuggestions(formData));
      if (!res.error) {
        alert("Suggestion succesfull create!");
        history("/portal-category/expert");
      }
    }
  };

  return (
    <form
      className={
        activeBarItem !== 4
          ? "registeritem5 registeritem-scaleHidden"
          : "registeritem5 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}>
      <div className="registeritem5-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg5")}</h3>
        <div className="registeritem-form">
          <label
            htmlFor="uploadSuggestionImage"
            className="registeritem-imgInput">
            <input
              id="uploadSuggestionImage"
              className="registeritem-label-fileinput"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={(e) =>
                setFormData((args) => ({
                  ...args,
                  image: e.target.files[0],
                }))
              }
            />
            <BsImage />
            <p>
              {formData.image?.name
                ? formData.image?.name
                : t("expert.offerforimg")}
            </p>
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
                value={formData.suggestions}
                minLength={3}
                maxLength={1000}
                placeholder={t("expert.inputplaceholder")}
                onChange={(e) =>
                  setFormData((args) => ({
                    ...args,
                    suggestions: e.target.value,
                  }))
                }
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
                value={formData.additional_information}
                minLength={3}
                maxLength={1000}
                placeholder={t("expert.inputplaceholder")}
                onChange={(e) =>
                  setFormData((args) => ({
                    ...args,
                    additional_information: e.target.value,
                  }))
                }
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
            <p>{t("expert.register5")}</p>
          </div>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button
          type="submit"
          disabled={!checked}
          style={checked ? null : { opacity: 0.4, cursor: "auto" }}
          className="registeritem-submitBtn">
          {t("expert.save")}
        </button>
      </div>
    </form>
  );
}
