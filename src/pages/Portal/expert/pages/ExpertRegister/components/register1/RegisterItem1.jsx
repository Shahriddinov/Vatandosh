import "./RegisterItem1.scss";
import "../customStyles.scss";
import DefaultProfilePic from "../../../../../../../assets/images/icons/profile.svg";
import pencil from "../../../../../../../assets/images/expert/input-pencil.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import scripka from "../../../../../../../assets/images/expert/scripka-icon.svg";
import { useDispatch } from "react-redux";
import { postExpertRegister1 } from "../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";

export default function RegisterItem1({ activeBarItem }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [uploadImg, setuploadImg] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    last_name: "",
    avatar_url: null,
    passport_file: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.avatar_url) return alert(t("expert.uploadnew"));
    if (!formData.passport_file) return alert(t("expert.passportFile"));
    dispatch(postExpertRegister1(formData));
  };

  return (
    <form
      className={
        activeBarItem !== 0
          ? "registeritem1 registeritem-scaleHidden"
          : "registeritem1 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}
    >
      <div className="registeritem1-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg1")}</h3>
        <div className="registeritem1-form">
          <div className="registeritem1-form-uploadImg">
            <div className="registeritem1-form-uploadImg-inputs">
              <img
                src={
                  uploadImg ? URL.createObjectURL(uploadImg) : DefaultProfilePic
                }
                alt=""
              />
              <label htmlFor="uploadimg" className="registeritem-submitBtn">
                <input
                  id="uploadimg"
                  type="file"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  onChange={(e) => {
                    setuploadImg(e.target.files[0]);
                    setFormData((args) => ({
                      ...args,
                      avatar_url: e.target.files[0],
                    }));
                    e.target.files = null;
                  }}
                />
                {t("expert.uploadnew")}
              </label>
              <button
                type="reset"
                onClick={() => {
                  setuploadImg(null);
                  setFormData((args) => ({
                    ...args,
                    avatar_url: null,
                  }));
                }}
              >
                {t("expert.delete")}
              </button>
            </div>
            <span className="registeritem1-form-uploadImg-desc">
              {formData.avatar_url?.name
                ? formData.avatar_url.name
                : t("expert.uploaddesc")}
            </span>
          </div>
          <div className="registeritem1-form-input-list">
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.surname")} <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="text"
                  minLength={3}
                  maxLength={30}
                  value={formData.second_name}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim();
                    setFormData((args) => ({
                      ...args,
                      second_name: e.target.value,
                    }));
                  }}
                  placeholder={t("expert.inputplaceholder")}
                />
                <img src={pencil} alt="" />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.name")} <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="text"
                  minLength={3}
                  maxLength={30}
                  value={formData.first_name}
                  placeholder={t("expert.inputplaceholder")}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim();
                    setFormData((args) => ({
                      ...args,
                      first_name: e.target.value,
                    }));
                  }}
                />
                <img src={pencil} alt="" />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.secondname")} <span>*</span>
              </p>
              <div>
                <input
                  required
                  type="text"
                  minLength={3}
                  maxLength={30}
                  value={formData.last_name}
                  placeholder={t("expert.inputplaceholder")}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim();
                    setFormData((args) => ({
                      ...args,
                      last_name: e.target.value,
                    }));
                  }}
                />
                <img src={pencil} alt="" />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.passportFile")}
                <span>*</span>
              </p>
              <label htmlFor="registeritem-label-fileinput" required>
                <input
                  id="registeritem-label-fileinput"
                  className="registeritem-label-fileinput"
                  type="file"
                  accept=".pdf, .doc"
                  placeholder={
                    formData.passport_file
                      ? formData.passport_file.name
                      : t("expert.inputplaceholder")
                  }
                  onChange={(e) => {
                    setFormData((args) => ({
                      ...args,
                      passport_file: e.target.files[0],
                    }));
                  }}
                />
                <p>
                  {formData.passport_file?.name
                    ? formData.passport_file.name
                    : t("expert.uploadfile")}
                </p>
                <img src={scripka} alt="" />
              </label>
            </label>
          </div>
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
