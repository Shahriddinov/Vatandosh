import { MyInput, MySelect } from "../";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import { Exclude } from "../../../../../../../assets/images/communityAssociation";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./register5.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { communityCreateDataAdd } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";
import { postCommunityCreate } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import useApplicationFetching from "./hooks/useApplicationFetching";

const cityData = [
  { id: 1, label: "Farg'ona" },
  { id: 2, label: "Toshkent" },
  { id: 3, label: "Samarqand" },
  { id: 4, label: "Buxora" },
];
const CommunityRegister5 = ({ activeBarItem }) => {
  const {
    data,
    setData,
    links,
    setLinks,
    dispatch,
    locationData,
    locationLoading,
  } = useApplicationFetching();
  const { t } = useTranslation();

  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );

  const handleChangeApplication5 = ({ key, value, id }) => {
    if (key !== "link") {
      setData((prev) => ({ ...prev, [key]: value }));
    }

    console.log(links);
    const newArr = links.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          link: value,
        };
      }
      return el;
    });
    setLinks(newArr);
    const newCommunityCreateData = {
      ...communityCreateData,
      [key]: value,
    };

    dispatch(communityCreateDataAdd(newCommunityCreateData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.confirm) {
      const newCommunityCreateData = {
        ...communityCreateData,
        site: links.map((link) => link.link).join(","),
      };

      console.log({
        ...newCommunityCreateData,
        attachments: [newCommunityCreateData.attachments],
      });
      dispatch(communityCreateDataAdd(newCommunityCreateData));
      dispatch(
        postCommunityCreate({
          ...newCommunityCreateData,
          attachments: [newCommunityCreateData.attachments],
        })
      );
    }
  };

  if (locationLoading) {
    return null;
  }

  return (
    <div
      className={`community-association-register5  ${
        activeBarItem !== "5"
          ? "registeritem-scaleHidden"
          : "registeritem-scaleActive"
      }`}
    >
      <h3 className="community-association-register__title">
        V. {t("communityAssociation.menu5_info.menu5_title")}
      </h3>

      <form
        className="community-association-register5__form"
        onSubmit={handleSubmit}
      >
        <div className="community-association-register5__input_box">
          <MySelect
            value={data.region_id}
            handleChange={handleChangeApplication5}
            data={locationData}
            text={t("communityAssociation.menu5_info.input1_name")}
            valueKey="region_id"
          />

          <MySelect
            value={data.city_id}
            handleChange={handleChangeApplication5}
            data={cityData}
            text={t("communityAssociation.menu5_info.input2_name")}
            valueKey="city_id"
          />

          <div className="community-association-register__phone_box">
            <FormHelperText id="outlined-weight-helper-text">
              <span className="my-input__text">
                {t("communityAssociation.menu5_info.input3_name")}
              </span>
              <span className="my-input__required"> *</span>
            </FormHelperText>
            <PhoneInput
              className="community-association-register__phone"
              placeholder="+998"
              value={data.phone}
              defaultCountry="UZ"
              onChange={(e) =>
                handleChangeApplication5({ key: "phone", value: e })
              }
            />
          </div>

          <MyInput
            value={data.email}
            handleChange={handleChangeApplication5}
            text={t("communityAssociation.menu5_info.input4_name")}
            placeholder="email@example.com"
            type="email"
            inputType="input"
            valueKey="email"
          />
        </div>

        <MyInput
          value={data.address}
          handleChange={handleChangeApplication5}
          text={t("communityAssociation.menu5_info.input5_name")}
          placeholder={t("communityAssociation.title_input_plack")}
          type="text"
          inputType="input"
          valueKey="address"
        />
        {links.map((el) => (
          <MyInput
            key={el.id}
            value={el.link}
            handleChange={handleChangeApplication5}
            text={t("communityAssociation.menu5_info.input6_name")}
            placeholder="https://"
            type="text"
            inputType="input"
            valueKey="link"
            id={el.id}
          />
        ))}

        <button
          type="button"
          className="community-association-register5__add_link"
        >
          <img
            src={Exclude}
            alt="add link"
            className="community-association-register5__add_link--img"
            onClick={() =>
              setLinks((prev) => [...prev, { id: Date.now(), link: "" }])
            }
          />
        </button>

        <div className="community-association-register5__checkbox">
          <FormControlLabel
            control={<Checkbox />}
            label={t("communityAssociation.menu5_info.input7_name")}
            onChange={(e) =>
              setData((prev) => ({ ...prev, confirm: e.target.checked }))
            }
          />
        </div>
        <button
          className={`${
            !data.confirm
              ? "disabled"
              : "community-association-register__form--btn"
          }`}
          disabled={!data.confirm}
        >
          {t("communityAssociation.menu5_info.save")}
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister5;
