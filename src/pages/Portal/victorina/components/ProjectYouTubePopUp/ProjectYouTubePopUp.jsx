import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { sendVictorinaYoutube } from "../../../../../reduxToolkit/victorinaYoutube/youtube";
import { mediaVictorinaImage } from "../../../../../reduxToolkit/victorinaImage/media-upload";
import mediaFileSlice from "../../../../../reduxToolkit/victorinaImage";

export default function ProjectYouTubePopUp({ setactivePopUp, id }) {
  const [dataYoutube, setDataYoutube] = useState({
    link: "",
    passport: "",
    fio: "",
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const communityCreateData = useSelector(
    (store) => store.mediaFileSlice.communityImagePost
  );
  const [data, setData] = useState({
    document: communityCreateData.document,
  });

  const handleFileSelect = (event) => {
    const inputValue = event.target.value;
    setDataYoutube((prevFormData) => ({
      ...prevFormData,
      passport: communityCreateData?.document,
      fio: inputValue,
    }));
  };

  const handleFileSelectOne = (event) => {
    const linkValue = event.target.value;
    setDataYoutube((prevFormData) => ({
      ...prevFormData,
      link: linkValue,
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
      fio: dataYoutube.fio,
      passport: dataYoutube.passport,
      link: dataYoutube.link,
    };
    dispatch(sendVictorinaYoutube({ id, data }));
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
                name="fio"
                id="fio"
                placeholder={t("victorina.name")}
                onChange={handleFileSelect}
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
          <p>{t("victorina.projectyoutube")}</p>
          <div>
            <input
              required
              type="url"
              name="link"
              id="link"
              placeholder={t("victorina.videourl")}
              onChange={handleFileSelectOne}
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
