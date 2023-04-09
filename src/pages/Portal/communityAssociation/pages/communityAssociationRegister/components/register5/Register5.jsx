import React from "react";
import { useState } from "react";
import { MyInput, MySelect } from "../";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import { Exclude } from "../../../../../../../assets/images/communityAssociation";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./register5.scss";

const countryData = [
  "Uzbekiston",
  "Rossiya",
  "Amerika",
  "Arabiston",
  "Tojikiston",
  "Ukraina",
  "Kanada",
  "Meksika",
];

const cityData = [
  "Toshkent",
  "Samarqand",
  "Namangan",
  "Surhandaryo",
  "Jizzax",
  "Qashqadaryo",
];

const CommunityRegister5 = ({ activeBarItem }) => {
  const [data, setData] = useState({
    country: "",
    city: "",
    phone: "+998",
    email: "",
    address: "",
    confirm: false,
  });
  const [links, setLinks] = useState([{ id: 1, link: "" }]);

  const handleChangeApplication5 = ({ key, value, id }) => {
    setData((prev) => ({ ...prev, [key]: value }));
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
  };

  return (
    <div
      className={`community-association-register5  ${
        activeBarItem !== "5"
          ? "registeritem-scaleHidden"
          : "registeritem-scaleActive"
      }`}
    >
      <h3 className="community-association-register__title">V. Manzil</h3>

      <form className="community-association-register5__form">
        <div className="community-association-register5__input_box">
          <MySelect
            value={data.country}
            handleChange={handleChangeApplication5}
            data={countryData}
            text="Davlat"
            valueKey="country"
          />

          <MySelect
            value={data.city}
            handleChange={handleChangeApplication5}
            data={cityData}
            text="SHahar"
            valueKey="city"
          />

          <div className="community-association-register__phone_box">
            <FormHelperText id="outlined-weight-helper-text">
              <span className="my-input__text">Telefon raqam </span>
              <span className="my-input__required">*</span>
            </FormHelperText>
            <PhoneInput
              className="community-association-register__phone"
              placeholder="+998"
              value={data.phone}
              defaultCountry="UZ"
              onChange={(e) => setData((prev) => ({ ...prev, phone: e }))}
            />
          </div>

          <MyInput
            value={data.email}
            handleChange={handleChangeApplication5}
            text="Elektron pochta"
            placeholder="email@example.com"
            type="email"
            inputType="input"
            valueKey="email"
          />
        </div>

        <MyInput
          value={data.address}
          handleChange={handleChangeApplication5}
          text="Yuridik manzil"
          placeholder="Kiriting"
          type="text"
          inputType="input"
          valueKey="address"
        />
        {links.map((el) => (
          <MyInput
            key={el.id}
            value={el.link}
            handleChange={handleChangeApplication5}
            text="Veb-sayt va boshqa rasmiy sahifalar"
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
            label="Ma'lumotlarni saqlash va qayta ishlashga rozilik"
            onChange={(e) =>
              setData((prev) => ({ ...prev, confirm: e.target.checked }))
            }
          />
        </div>
        <button className="community-association-register__form--btn">
          Keyingisi
        </button>
      </form>
    </div>
  );
};

export default CommunityRegister5;
