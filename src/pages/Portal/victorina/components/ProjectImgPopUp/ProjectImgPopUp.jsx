import "./ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { BsImage } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { mediaVictorinaImage } from "../../../../../reduxToolkit/victorinaImage/media-upload";
import mediaFileSlice from "../../../../../reduxToolkit/victorinaImage";
import { sendVictorinaFile } from "../../../../../reduxToolkit/victorinaFile/download";
import { useParams } from "react-router-dom";

export default function ProjectImgPopUp({ setactivePopUp, toast }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    image: "",
    passport: "",
    fio: "",
  });

  const communityCreateData = useSelector(
    (store) => store.mediaFileSlice.communityImagePost
  );
  const [data, setData] = useState({
    document: communityCreateData.document,
  });

  const handleValue = (event) => {
    const selectedValue = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      fio: selectedValue,
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

  const handleChangeApplicationOne = ({ key, value }) => {
    if (key === "logo" || key === "passport") {
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
        [key]: key === "passport" ? [value.name] : value,
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
      passport: communityCreateData?.path,
      image: communityCreateData?.path,
    };

    dispatch(sendVictorinaFile({ id, data,setactivePopUp }));
  };

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}></div>
      <form onSubmit={handleSubmit} className="victorina-popup">
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
                name="fio"
                id="fio"
                placeholder={t("victorina.name")}
                onChange={handleValue}
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
                id="passport"
                name="passport"
                placeholder="Yuklang"
                accept="application/pdf, image/*"
                onChange={(evt) =>
                  handleChangeApplicationOne({
                    key: "passport",
                    value: evt.target.files[0],
                  })
                }
              />
            </div>
          </label>
        </div>
        <label
          htmlFor="registeritem-label-fileinput"
          className="registeritem-imgInput">
          <input
            requid="registeritem-label-fileinput"
            className="registeritem-label-fileinput"
            id="registeritem-label-fileinput"
            type="file"
            name="image"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            onChange={(evt) =>
              handleChangeApplication({
                key: "document",
                value: evt.target.files[0],
              })
            }
          />
          <BsImage />
          <p>{t("victorina.projectimg")}</p>
        </label>
        <div className="victorina-popup-btnWrapper">
          <div
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
