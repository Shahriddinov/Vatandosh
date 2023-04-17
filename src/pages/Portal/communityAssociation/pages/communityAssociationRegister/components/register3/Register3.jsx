import { useState } from "react";
import MyInput from "../UI/myInput/MyInput";

import "./register3.scss";
import { UserIcon } from "../../../../../../../assets/images/communityAssociation";
import { useTranslation } from "react-i18next";

const CommunityRegister3 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    name: "",
    userImg: [],
  });
  const { t } = useTranslation();

  const handleChangeApplication3 = ({ key, value }) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

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
              {data.userImg.length > 0 ? (
                <img
                  className="community-association-register3__img"
                  src={URL.createObjectURL(data.userImg[0])}
                  alt=""
                />
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
                  setData((prev) => ({ ...prev, userImg: [e.target.files[0]] }))
                }
              />
            </label>
            <button className="community-association-register3__user_delete">
              {t("communityAssociation.delete")}
            </button>
          </div>
          <p className="community-association-register3__user_img--desc">
            {t("communityAssociation.menu3_info.input1_desc")}
          </p>
        </div>

        <MyInput
          value={data.name}
          text={t("communityAssociation.menu3_info.input2_name")}
          placeholder={t("communityAssociation.menu3_info.input2_placeholder")}
          handleChange={handleChangeApplication3}
          type="text"
          inputType="input"
          valueKey="name"
        />

        <button className="community-association-register__form--btn">
          {t("communityAssociation.menu1_info.next")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister3;
