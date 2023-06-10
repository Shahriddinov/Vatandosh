import "./commonInfomation.scss";
import fakeImg from "../../../../../../../assets/images/portal/cabinetVolunteer/flag.png";
import penSvg from "../../../../../../../assets/images/portal/privateInformation/pen.svg";
import calendarSvg from "../../../../../../../assets/images/portal/privateInformation/calendar.svg";
import skrepkaSvg from "../../../../../../../assets/images/portal/privateInformation/skrepka.svg";
import { useState } from "react";

const CommonInformation = () => {
  const [commonInfo, setCommonInfo] = useState({
    profilePhoto: null,
    firstName: "",
    lastName: "",
    middleName: "",
    DOB: "",
    sex: "",
    nationality: "",
    uzbAddress: "",
    abroadCountry: "",
    abroadAddress: "",
    phoneNumber: "",
    phoneNumberToBackend: "",
    activityType: "",
    passport: null,
  });
  console.log(commonInfo);

  const profilePhotoHandler = (e) => {
    setCommonInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.files[0] };
    });
  };
  const deleteProfileImageHandler = () => {
    setCommonInfo((prev) => {
      return { ...prev, profilePhoto: null };
    });
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = name === "passport" ? e.target.files[0] : e.target.value;
    if (name === "phoneNumber") {
      const formattedPhoneNumber = formatPhoneNumber(value);
      const nonFormattedPhoneNumber = formattedPhoneNumber.replace(/[\D]/g, "");
      setCommonInfo((prev) => {
        return {
          ...prev,
          [name]: formattedPhoneNumber,
          phoneNumberToBackend: nonFormattedPhoneNumber,
        };
      });
      return;
    }
    setCommonInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[\D]/g, "");

    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      5
    )}-${phoneNumber.slice(5, 9)}`;
  };
  return (
    <div className="commonInformation-cont">
      <div className="commonInformation-cont-inner">
        <div className="commonInformation-cont-inner-imgbtns">
          <img
            src={
              commonInfo?.profilePhoto
                ? URL.createObjectURL(commonInfo.profilePhoto)
                : fakeImg
            }
            alt="userImg"
          />
          <div>
            <label htmlFor="profilePhoto">Yangi rasm yuklang </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              onChange={profilePhotoHandler}
            />
          </div>
          <button
            onClick={deleteProfileImageHandler}
            className="commonInformation-cont-inner-imgbtns-btn2"
          >
            O‘chirish
          </button>
        </div>
        <p>JPG, GIF yoki PNG. Maksimal hajmi 800K</p>
      </div>

      <div className="commonInformation-cont-formCont">
        <form className="commonInformation-cont-formCont-form">
          <div className="commonInformation-cont-formCont-form-divCon">
            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="lastName">
                Familiyasi <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="lastname"
                  name="lastName"
                  value={commonInfo.lastName}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="middleName">
                Sharifi <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={commonInfo.middleName}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="sex">
                Jinsi <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="sex"
                  name="sex"
                  value={commonInfo.sex}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="uzbAddress">
                O'zbekistondagi manzil <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="uzbAddress"
                  name="uzbAddress"
                  value={commonInfo.uzbAddress}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="abroadAddress">
                Xorijdagi manzil <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="abroadAddress"
                  name="abroadAddress"
                  value={commonInfo.abroadAddress}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="activityType">
                Faoliyat turi <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="activityType"
                  name="activityType"
                  value={commonInfo.activityType}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>
          </div>
          <div className="commonInformation-cont-formCont-form-divCon">
            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="firstName">
                Ismi <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={commonInfo.firstName}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="DOB">
                Tugilgan sana <span>*</span>
              </label>
              <div>
                <input
                  type="date"
                  id="DOB"
                  name="DOB"
                  value={commonInfo.DOB}
                  onChange={inputHandler}
                />
                <img src={calendarSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="nationality">
                Millati <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={commonInfo.nationality}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="abroadCountry">
                Xorijiy davlat <span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="abroadCountry"
                  name="abroadCountry"
                  value={commonInfo.abroadCountry}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="phoneNumber">
                Telefon raqam <span>*</span>
              </label>
              <div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={commonInfo.phoneNumber}
                  onChange={inputHandler}
                />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="uploadFile">
                Passport yuklash (pdf, doc) <span>*</span>
              </label>
              <div>
                <label htmlFor="uploadFile">
                  {commonInfo.passport === null
                    ? "Yuklang"
                    : " passport muvaffaqiyatli yuklandi ✅"}
                </label>
                <input
                  className="passportPdforDocUpload"
                  type="file"
                  id="uploadFile"
                  name="passport"
                  onChange={inputHandler}
                />
                <img src={skrepkaSvg} alt="icon" style={{ color: "blue" }} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommonInformation;
