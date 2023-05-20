import { useState } from "react";
import MyInput from "../UI/myInput/MyInput";

import "./register3.scss";
import { UserIcon } from "../../../../../../../assets/images/communityAssociation";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { postCommunityImage } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import {
  communityCreateDataAdd,
  deleteAvatar,
} from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { useEffect } from "react";
import MyInputDate from "../UI/myInputDate/MyInputDate";
import { Skeleton } from "@mui/material";

const CommunityRegister3 = ({ activeBarItem, handleClick }) => {
  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );

  const avatarLoading = useSelector(
    (store) => store.community.communityImagePostLoading
  );

  const [data, setData] = useState({
    director: communityCreateData.director,
    director_img: communityCreateData.director_img,
    director_date: communityCreateData.director_date,
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangeApplication3 = ({ key, value }) => {
    console.log(value);
    if (key === "director_img") {
      setData((prev) => ({
        ...prev,
        [key]: [value],
      }));
      const directorImageData = new FormData();
      directorImageData.append("image", value);
      directorImageData.append("folder", "community");
      dispatch(postCommunityImage({ key, image: directorImageData }));
    } else {
      setData((prev) => ({
        ...prev,
        [key]: value,
      }));

      const newCommunityCreateData = {
        ...communityCreateData,
        [key]: value,
      };

      dispatch(communityCreateDataAdd(newCommunityCreateData));
    }
  };

  useEffect(() => {
    setData({
      director: communityCreateData.director,
      director_img: communityCreateData.director_img,
      director_date: communityCreateData.director_date,
    });
  }, [communityCreateData]);

  return (
    <div
      className={`community-association-register3  ${
        activeBarItem !== "3"
          ? "registeritem-scaleHidden"
          : "registeritem-scaleActive"
      }`}
    >
      <h3 className="community-association-register__title">
        III. {t("communityAssociation.menu3_info.menu3_title")}
      </h3>

      <form className="community-association-register3__form">
        <div className="community-association-register3__user_box">
          <div className="community-association-register3__user">
            <div className="community-association-register3__user_img">
              {data.director_img.length > 0 ? (
                avatarLoading ? (
                  <Skeleton
                    variant="circular"
                    width={80}
                    height={80}
                    sx={{ bgcolor: "grey.400" }}
                  />
                ) : (
                  <img
                    className="community-association-register3__img"
                    src={`${PORTAL_IMAGE_URL}${communityCreateData.director_img}`}
                    alt={data.director}
                  />
                )
              ) : (
                <img
                  className="community-association-register3__img--icon"
                  src={UserIcon}
                  alt="user icon"
                />
              )}
            </div>
            <label
              htmlFor="user-upload"
              className="community-association-register3__user_label"
            >
              <span className="community-association-register3__user_label--text">
                {t("communityAssociation.menu3_info.input1_name")}
              </span>
              <input
                id="user-upload"
                type="file"
                className="community-association-register3__user_input"
                accept="image/png, image/gif, image/jpeg, image/jpg"
                onChange={(e) =>
                  handleChangeApplication3({
                    key: "director_img",
                    value: e.target.files[0],
                  })
                }
                required
              />
            </label>
            <button
              className="community-association-register3__user_delete"
              onClick={() => dispatch(deleteAvatar())}
            >
              {t("communityAssociation.delete")}
            </button>
          </div>
          <p className="community-association-register3__user_img--desc">
            {t("communityAssociation.menu3_info.input1_desc")}
          </p>
        </div>

        <div className="community-association-register3__user_module">
          <MyInput
            value={data.director}
            text={t("communityAssociation.menu3_info.input2_name")}
            placeholder={t(
              "communityAssociation.menu3_info.input2_placeholder"
            )}
            handleChange={handleChangeApplication3}
            type="text"
            inputType="input"
            valueKey="director"
            required={true}
          />

          <MyInputDate
            text={t("communityAssociation.menu4_info.input2_name")}
            handleChange={handleChangeApplication3}
            valueKey="director_date"
            value={data.director_date}
          />
        </div>

        <button
          className="community-association-register__form--btn"
          type="button"
          onClick={() => handleClick("4")}
        >
          {t("communityAssociation.menu1_info.next")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister3;
