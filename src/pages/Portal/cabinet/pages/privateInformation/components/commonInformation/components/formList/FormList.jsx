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

const FormList = ({
  data,
  handleChange,
  locationData,
  allCitiesGet,
  nationsData,
}) => {
  const { t } = useTranslation();
  const genderOptions = [
    { id: "1", label: t("man") },
    { id: "2", label: t("woman") },
  ];

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
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="lastName">
            {t("surname")} <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="lastname"
               placeholder={t("expert.inputplaceholder")}
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

        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="middleName">
            {t("patronymic")} <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="middleName"
               placeholder={t("expert.inputplaceholder")}
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
          <MySelect
            value={data.gender ? findGender.label : ""}
            handleChange={handleChange}
            data={genderOptions}
            text={t("gender")}
            valueKey={"gender"}
            placeholder={t("gender")}
          />
        </div>

        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="uzbAddress">
            {t("uzbLocation")} <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="uzbAddress"
              placeholder={t("expert.inputplaceholder")}
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
            value={findCity ? findCity?.label : ""}
            handleChange={handleChange}
            data={allCitiesGet}
            text={t("communityAssociation.menu5_info.input2_name")}
            valueKey={"international_address_id"}
            placeholder={t("allCity")}
          />
        </div>

        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="activityType">
            {t("typeOfActivity")} <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="activityType"
              placeholder={t("expert.inputplaceholder")}
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
      </div>

      <div className="commonInformation-cont-formCont-form-box-divCon">
        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="firstName">
            {t("name")} <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="firstName"
              placeholder={t("expert.inputplaceholder")}
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

        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MyInputDate
            text={t("dataOfBirth")}
            handleChange={handleChange}
            valueKey="birth_date"
            value={data?.birth_date ? data?.birth_date : "12-12-1999"}
          />
        </div>

        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MySelect
            value={findNation ? findNation.label : ""}
            handleChange={handleChange}
            data={nationsData}
            text={t("nation")}
            valueKey={"national_id"}
            placeholder={t("nation")}
          />
        </div>

        <div className="commonInformation-cont-formCont-form-box-divCon-select">
          <MySelect
            value={findCountry ? findCountry?.label : ""}
            handleChange={handleChange}
            data={locationData}
            text={t("foreignCountry")}
            valueKey={"international_location_id"}
          />
        </div>

        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <FormHelperText
            id="outlined-weight-helper-text"
            className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper-span">
            <span className="my-input__text">{t("phoneNumber")}</span>
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

        <div className="commonInformation-cont-formCont-form-box-divCon-inputLabelWrapper">
          <label htmlFor="uploadFile">
            {t("passportUpload")} <span>*</span>
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
              placeholder={t("expert.inputplaceholder")}
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
