import "./RegisterItem1.scss";
import "../customStyles.scss";
import DefaultProfilePic from "../../../../../../../assets/images/icons/profile.svg";
import pencil from "../../../../../../../assets/images/expert/input-pencil.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import scripka from "../../../../../../../assets/images/expert/scripka-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getExpertRegister,
  postExpertRegister,
} from "../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { useEffect } from "react";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

export default function RegisterItem1({ activeBarItem, setActiveBarItem }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.expertRegisterSlice);

  const [uploadImg, setuploadImg] = useState(null);
  const [passport_file, setPassportFile] = useState();
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    last_name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, second_name, last_name } = formData;

    dispatch(
      postExpertRegister({
        first_name,
        second_name,
        last_name,
        avatar_url: uploadImg,
        passport_file,
      })
    );
    setActiveBarItem(1);
  };

  useEffect(() => {
    dispatch(getExpertRegister());
  }, [dispatch]);

  useEffect(() => {
    setFormData(user);
  }, [user]);
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
                  uploadImg
                    ? URL.createObjectURL(uploadImg)
                    : formData?.avatar_url
                    ? `${PORTAL_IMAGE_URL}${formData?.avatar_url}`
                    : DefaultProfilePic
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
              {formData?.avatar_url?.name
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
                  value={formData?.last_name ? formData.last_name : ""}
                  onChange={(e) => {
                    e.target.value = e.target.value;
                    setFormData((args) => ({
                      ...args,
                      last_name: e.target.value,
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
                  value={formData?.first_name ? formData.first_name : ""}
                  placeholder={t("expert.inputplaceholder")}
                  onChange={(e) => {
                    e.target.value = e.target.value;
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
                  value={formData?.second_name ? formData.second_name : ""}
                  placeholder={t("expert.inputplaceholder")}
                  onChange={(e) => {
                    e.target.value = e.target.value;
                    setFormData((args) => ({
                      ...args,
                      second_name: e.target.value,
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
              <label htmlFor="registeritem-label-fileinput-htmlFor" required>
                <input
                  id="registeritem-label-fileinput-htmlFor"
                  className="registeritem-label-fileinput"
                  type="file"
                  accept=".pdf, .doc"
                  onChange={(e) => setPassportFile(e.target.files[0])}
                />
                <p>
                  {passport_file?.name
                    ? passport_file.name
                    : user?.passport_file
                    ? `${user?.passport_file.slice(0, 15)}.${
                        user.passport_file.split(".")[1]
                      }`
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
