import { MyInput, MySelect } from "../";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import { Exclude } from "../../../../../../../assets/images/communityAssociation";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./register5.scss";
import { useTranslation } from "react-i18next";
import useApplicationFetching from "./hooks/useApplicationFetching";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { CreateFunction } from "./extra";
import { useEffect } from "react";
import { communityCreateReset } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";
import { useState } from "react";
const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const cityData = [
  { id: 1, label: "Farg'ona" },
  { id: 2, label: "Toshkent" },
  { id: 3, label: "Samarqand" },
  { id: 4, label: "Buxora" },
  { id: 5, label: "Xorazim" },
  { id: 6, label: "Namangan" },
];

const CommunityRegister5 = ({ activeBarItem, handleClick }) => {
  const {
    data,
    setData,
    links,
    setLinks,
    dispatch,
    locationData,
    locationLoading,
    communityCreateData,
    communityCreateDataStatus,
  } = useApplicationFetching();
  const [confirm, setConfirm] = useState(false);

  const { t } = useTranslation();

  const { extraHandleSubmit, extraHandleChangeApplication } =
    new CreateFunction(
      setData,
      setLinks,
      links,
      communityCreateData,
      data,
      dispatch,
      confirm
    );

  const handleChangeApplication5 = extraHandleChangeApplication;

  const handleSubmit = extraHandleSubmit;

  useEffect(() => {
    if (communityCreateDataStatus === "success") {
      toast.success("success sending !", options);
      dispatch(communityCreateReset());
      setConfirm(false);
      setLinks([{ id: 1, link: "" }]);
      handleClick("1");
    } else if (communityCreateDataStatus === "error") {
      toast.error("error sending!", options);
    }
  }, [communityCreateDataStatus]);

  if (locationLoading) {
    return null;
  }

  const countryNameValue = locationData.find((el) => el.id === data.region_id);
  const cityNameValue = cityData.find((el) => el.id === data.city_id);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
              value={countryNameValue?.label ? countryNameValue.label : ""}
              handleChange={handleChangeApplication5}
              data={locationData}
              text={t("communityAssociation.menu5_info.input1_name")}
              valueKey="region_id"
            />

            <MySelect
              value={cityNameValue?.label ? cityNameValue.label : ""}
              handleChange={handleChangeApplication5}
              data={cityData}
              text={t("communityAssociation.menu5_info.input2_name")}
              valueKey="city_id"
              placeholder="Barcha davlatlar"
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
                required
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
              required={true}
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
            required={true}
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
              required={true}
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
              onChange={(e) => setConfirm(e.target.checked)}
              checked={confirm}
            />
          </div>
          <button
            className={`${
              !confirm
                ? "disabled"
                : "community-association-register__form--btn"
            }`}
            disabled={!confirm}
          >
            {t("communityAssociation.menu5_info.save")}
          </button>
        </form>
      </div>
    </>
  );
};

export default CommunityRegister5;
