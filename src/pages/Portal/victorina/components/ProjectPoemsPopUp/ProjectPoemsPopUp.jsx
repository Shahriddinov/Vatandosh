import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import scripka from "../../../../../assets/images/expert/scripka-icon.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendVictorinaFile } from "../../../../../reduxToolkit/victorinaFile/download";
import { mediaVictorinaImage } from "../../../../../reduxToolkit/victorinaImage/media-upload";
import mediaFileSlice from "../../../../../reduxToolkit/victorinaImage";

export default function ProjectPoemsPopUp({ setactivePopUp }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    text: "",
    passport: "",
    fio: "",
  });

  const communityCreateData = useSelector(
    (store) => store.mediaFileSlice.communityImagePost
  );
  const [data, setData] = useState({
    document: communityCreateData.document,
  });

  console.log(communityCreateData.path);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      text: selectedFile,
    }));
  };

  const handleValue = (event) => {
    const selectedValue = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      fio: selectedValue,
      passport: communityCreateData?.path,
    }));
  };

  const handleChangeApplication = ({ key, value }) => {
    if (key === "logo" || key === "document") {
      setData((prev) => ({
        ...prev,
        [key]: [value],
      }));
      const logoData = new FormData();
      logoData.append("image", value);
      dispatch(mediaVictorinaImage({ key, image: logoData }));
    } else {
      setData((prev) => ({
        ...prev,
        [key]: key === "document" ? [value.name] : value,
      }));

      const newCommunityCreateData = {
        ...communityCreateData,
        [key]: value,
      };
      dispatch(mediaFileSlice(newCommunityCreateData));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fio: formData.fio,
      passport: formData.passport,
      text: formData.text,
    };

    dispatch(sendVictorinaFile({ id, data }));
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
            htmlFor="fio"
            className="registeritem-label">
            <p>
              {t("victorina.fio")} <span>*</span>
            </p>
            <div>
              <input
                required
                type="text"
                name="fio"
                id="fio"
                placeholder={t("victorina.name")}
                onChange={handleValue}
              />
            </div>
          </label>
          <label
            style={{ width: "100%" }}
            htmlFor="passport"
            className="registeritem-label">
            <p>
              Pasport yuklash (pdf, doc) <span>*</span>
            </p>
            <div>
              <input
                required
                type="file"
                id="passport"
                name="passport"
                placeholder="Yuklang"
                accept="application/pdf, image/*"
                onChange={(evt) =>
                  handleChangeApplication({
                    key: "document",
                    value: evt.target.files[0],
                  })
                }
              />
            </div>
          </label>
        </div>
        <label htmlFor="" className="registeritem-label">
          <p>
            {t("victorina.projectpoem")}
            <span>*</span>
          </p>
          <label htmlFor="text" required>
            <input
              required
              className="registeritem-label-fileinput"
              type="file"
              id="text"
              name="text"
              onChange={handleFileSelect}
              accept="application/pdf, image/*"
            />
            <p>{t("expert.uploadfile")}</p>
            <img src={scripka} alt="" />
          </label>
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
