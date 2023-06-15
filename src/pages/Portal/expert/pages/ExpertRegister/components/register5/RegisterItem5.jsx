import "../customStyles.scss";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsImage } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { postSuggestions } from "../../../../../../../reduxToolkit/ExpertSlice/Suggestions/extraReducer";
import { useLocation } from "react-router-dom";

export default function RegisterItem5({ activeBarItem, setactiveBarItem }) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    suggestions: "",
    additional_information: "",
    images: [],
    type: pathname.includes("expert") ? 1 : 2,
  });

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.images[0]) return alert(t("expert.offerforimg"));
    setFormData((args) => ({
      ...args,
      suggestions: formData.suggestions,
      additional_information: formData.additional_information,
    }));

    if (formData.suggestions && formData.suggestions) {
      const res = dispatch(postSuggestions(formData));
      if (!res.error) {
        setactiveBarItem(6);
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
      onSubmit={handleSubmit}
    >
      <div className="registeritem5-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg5")}</h3>
        <div className="registeritem-form">
          <label
            htmlFor="uploadSuggestionImage"
            className="registeritem-imgInput"
          >
            <input
              id="uploadSuggestionImage"
              className="registeritem-label-fileinput"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={(e) =>
                setFormData((args) => ({
                  ...args,
                  images: [e.target.files[0]],
                }))
              }
            />
            <BsImage />
            <p>
              {formData.images?.length
                ? formData.images[0]?.name
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
