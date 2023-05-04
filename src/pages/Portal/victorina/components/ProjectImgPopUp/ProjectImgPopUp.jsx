import "./ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { BsImage } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postCommunityImage } from "../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { communityCreateDataAdd } from "../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";

export default function ProjectImgPopUp({ setactivePopUp }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );
  const [data, setData] = useState({
    document: communityCreateData.document,
    logo: communityCreateData.logo,
  });

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  const handleChangeApplication = ({ key, value }) => {
    if (key === "logo" || key === "document") {
      setData((prev) => ({
        ...prev,
        [key]: [value],
      }));
      const logoData = new FormData();
      logoData.append("image", value);
      logoData.append("folder", "community");
      dispatch(postCommunityImage({ key, image: logoData }));
    } else {
      setData((prev) => ({
        ...prev,
        [key]: key === "document" ? [value.name] : value,
      }));

      const newCommunityCreateData = {
        ...communityCreateData,
        [key]: value,
      };
      dispatch(communityCreateDataAdd(newCommunityCreateData));
    }
  };

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}></div>
      <form onSubmit={handleSumbit} className="victorina-popup">
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
                // required
                type="text"
                minLength={3}
                maxLength={30}
                placeholder={t("victorina.name")}
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
                // required
                type="file"
                minLength={3}
                maxLength={30}
                placeholder="Yuklang"
              />
            </div>
          </label>
        </div>
        <label
          htmlFor="registeritem-label-fileinput"
          className="registeritem-imgInput">
          <input
            required
            id="registeritem-label-fileinput"
            className="registeritem-label-fileinput"
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
