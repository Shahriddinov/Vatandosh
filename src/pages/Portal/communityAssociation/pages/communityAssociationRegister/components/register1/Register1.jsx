import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUploadIcon } from "../../../../../../../assets/images/communityAssociation";
import "./register1.scss";
import { MyImgUpload, MyInput } from "../";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { postCommunityImage } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { communityCreateDataAdd } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";
import { useEffect } from "react";

const CommunityRegister1 = ({ activeBarItem, handleClick }) => {
  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );

  const communityImagePostStatus = useSelector(
    (store) => store.community.communityImagePostStatus
  );

  const [data, setData] = useState({
    name: communityCreateData.name,
    document: communityCreateData.document,
    logo: communityCreateData.logo,
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangeApplication1 = ({ key, value }) => {
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

  const handleSubmit1 = (e) => {
    e.preventDefault();
    handleClick("2");
  };

  useEffect(() => {
    setData({
      name: communityCreateData.name,
      document: communityCreateData.document,
      logo: communityCreateData.logo,
    });
  }, [communityCreateData]);
  return (
    <div
      className={`community-association-register1  ${
        activeBarItem !== "1"
          ? "registeritem-scaleHidden"
          : "registeritem-scaleActive"
      }`}
    >
      <h3 className="community-association-register__title">
        {t("communityAssociation.menu1_info.menu1_title")}
      </h3>
      <form
        className="community-association-register1__form"
        onSubmit={handleSubmit1}
      >
        <MyInput
          value={data.name}
          text={t("communityAssociation.menu1_info.input1_name")}
          placeholder={t("communityAssociation.title_input_plack")}
          handleChange={handleChangeApplication1}
          type="text"
          inputType="input"
          valueKey="name"
          required={true}
        />

        <label
          htmlFor="document"
          className="community-association-register1__certificate"
        >
          <span className="community-association-register1__certificate--span">
            {t("communityAssociation.menu1_info.input2_name")}
            <span className="community-association-register1__certificate--required">
              *
            </span>
          </span>
          <div className="community-association-register1__certificate--box">
            <div className="">
              <input
                type="file"
                name="document"
                id="document"
                onChange={(evt) =>
                  handleChangeApplication1({
                    key: "document",
                    value: evt.target.files[0],
                  })
                }
                className="community-association-register1__certificate--input"
              />
              <span className="community-association-register1__certificate--text">
                {communityCreateData.document.length > 0
                  ? communityCreateData.document
                  : t("communityAssociation.menu1_info.input2_placeholder")}
              </span>
            </div>

            <img
              src={FileUploadIcon}
              alt="File upload icon"
              className="community-association-register1__certificate--img"
            />
          </div>
        </label>

        <MyImgUpload
          data={communityCreateData.logo}
          uploadStatus={communityImagePostStatus}
          text={t("communityAssociation.menu1_info.input3_name")}
          handleChange={handleChangeApplication1}
          valueKey="logo"
        />

        <button
          className="community-association-register__form--btn"
          type="submit"
        >
          {t("communityAssociation.menu1_info.next")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister1;
