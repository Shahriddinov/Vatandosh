import penSvg from "../../../../../../../../../assets/images/portal/privateInformation/pen.svg";
import skrepkaSvg from "../../../../../../../../../assets/images/portal/privateInformation/skrepka.svg";
import { useTranslation } from "react-i18next";
import { FormHelperText } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import { findsUserData } from "../../extra";
import {
  MyInputDate,
  MySelect,
} from "../../../../../../../communityAssociation/pages/communityAssociationRegister/components";

const genderOptions = [
  { id: "1", label: "Erkak" },
  { id: "2", label: "Ayol" },
];

const FormList = ({
  data,
  handleChange,
  locationData,
  allCitiesGet,
  nationsData,
}) => {
  const { t } = useTranslation();

  const { findCountry, findCity, findNation, findGender } = findsUserData({
    locationData,
    allCitiesGet,
    nationsData,
    data,
    genderOptions,
  });

  return (
    <div className="commonInformation-cont-formCont-form-box">
      <div className="commonInformation-cont-formCont-form-box-divCon">
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper ">
          <label htmlFor="lastName">
            {t("private-information.lastName")}
            <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="lastname"
              placeholder="Kiriting"
              value={data.last_name}
              onChange={(evt) =>
                handleChange({
                  key: "last_name",
                  value: evt.target.value,
                })
              }
            />
            <img src={penSvg} alt="icon" />
          </div>
        </div>
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper item-firstName">
          <label htmlFor="firstName">
            {t("private-information.firstName")}
            <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="firstName"
              placeholder="Kiriting"
              value={data.first_name}
              onChange={(evt) =>
                handleChange({
                  key: "first_name",
                  value: evt.target.value,
                })
              }
            />
            <img src={penSvg} alt="icon" />
          </div>
        </div>
      </div>
      <div className="commonInformation-cont-formCont-form-box-divCon">
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="middleName">
            {t("private-information.middleName")}
            <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="middleName"
              placeholder="Kiriting"
              value={data.second_name}
              onChange={(evt) =>
                handleChange({
                  key: "second_name",
                  value: evt.target.value,
                })
              }
            />
            <img src={penSvg} alt="icon" />
          </div>
        </div>
        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MyInputDate
            text="Tugilgan sana"
            handleChange={handleChange}
            valueKey={t("private-information.DOB")}
            value={data?.birth_date ? data?.birth_date : "12-12-1999"}
          />
        </div>
      </div>

      <div className="commonInformation-cont-formCont-form-box-divCon">
        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MySelect
            value={data.gender ? findGender.label : ""}
            handleChange={handleChange}
            data={genderOptions}
            text={t("private-information.sex")}
            valueKey={"gender"}
            placeholder="Jinsi"
          />
        </div>

        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MySelect
            value={findNation ? findNation.label : ""}
            handleChange={handleChange}
            data={nationsData}
            text={t("private-information.nationality")}
            valueKey={"national_id"}
            placeholder="Millati"
          />
        </div>
      </div>

      <div className="commonInformation-cont-formCont-form-box-divCon">
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="uzbAddress">
            {t("private-information.uzbAddress")}
            <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="uzbAddress"
              placeholder="Kiriting"
              value={data.national_address}
              onChange={(evt) =>
                handleChange({
                  key: "national_address",
                  value: evt.target.value,
                })
              }
            />
            <img src={penSvg} alt="icon" />
          </div>
        </div>
        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MySelect
            value={findCountry ? findCountry?.label : ""}
            handleChange={handleChange}
            data={locationData}
            text={t("private-information.abroadAddress")}
            valueKey={"international_location_id"}
          />
        </div>
      </div>

      <div className="commonInformation-cont-formCont-form-box-divCon">
        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MySelect
            value={findCity ? findCity?.label : ""}
            handleChange={handleChange}
            data={allCitiesGet}
            text={t("private-information.city")}
            valueKey={"international_address_id"}
            placeholder="Barcha shaharlar"
          />
        </div>
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <FormHelperText
            id="outlined-weight-helper-text"
            className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper-span"
          >
            <span className="my-input__text">
              {t("private-information.phoneNumber")}
            </span>
            <span className="my-input__required"> *</span>
          </FormHelperText>
          <PhoneInput
            className="community-association-register__phone"
            placeholder="+998"
            value={data?.phone_number}
            defaultCountry="UZ"
            onChange={(e) => {
              handleChange({ key: "phone_number", value: e });
            }}
            required
          />
        </div>
      </div>

      <div className="commonInformation-cont-formCont-form-box-divCon">
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="activityType">
            {t("private-information.activityType")}
            <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="activityType"
              placeholder="Kiriting"
              value={data.job_position}
              onChange={(evt) =>
                handleChange({
                  key: "job_position",
                  value: evt.target.value,
                })
              }
            />
            <img src={penSvg} alt="icon" />
          </div>
        </div>
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="uploadFile">
            {t("private-information.uploadPassport")} <span>*</span>
          </label>
          <div>
            <label htmlFor="passport">
              {typeof data?.passport_file === "string"
                ? "passport"
                : data?.passport_file}
            </label>
            <input
              className="passportPdforDocUpload"
              type="file"
              id="passport"
              placeholder="Kiriting"
              value={""}
              onChange={(evt) =>
                handleChange({
                  key: "passport_file",
                  value: evt.target.files[0],
                })
              }
            />
            <img src={skrepkaSvg} alt="icon" style={{ color: "blue" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormList;
