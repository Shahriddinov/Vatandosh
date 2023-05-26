import "./commonInfomation.scss";
import fakeImg from "../../../../../../../assets/images/portal/cabinetVolunteer/flag.png";
import penSvg from "../../../../../../../assets/images/portal/privateInformation/pen.svg";
import calendarSvg from "../../../../../../../assets/images/portal/privateInformation/calendar.svg";
import skrepkaSvg from "../../../../../../../assets/images/portal/privateInformation/skrepka.svg";

const CommonInformation = () => {
  return (
    <div className="commonInformation-cont">
      <div className="commonInformation-cont-inner">
        <div className="commonInformation-cont-inner-imgbtns">
          <img src={fakeImg} alt="userImg" />
          <div>
            <label htmlFor="uploadImg">Yangi rasm yuklang </label>
            <input type="file" id="uploadImg" />
          </div>
          <button className="commonInformation-cont-inner-imgbtns-btn2">
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
                <input type="text" id="lastname" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="middleName">
                Sharifi <span>*</span>
              </label>
              <div>
                <input type="text" id="middleName" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="sex">
                Jinsi <span>*</span>
              </label>
              <div>
                <input type="text" id="sex" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="uzbAddress">
                O'zbekistondagi manzil <span>*</span>
              </label>
              <div>
                <input type="text" id="uzbAddress" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="abroadAddress">
                Xorijdagi manzil <span>*</span>
              </label>
              <div>
                <input type="text" id="abroadAddress" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="activityType">
                Faoliyat turi <span>*</span>
              </label>
              <div>
                <input type="text" id="activityType" />
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
                <input type="text" id="firstName" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="DOB">
                Tugilgan sana <span>*</span>
              </label>
              <div>
                <input type="date" id="DOB" />
                <img src={calendarSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="nationality">
                Millati <span>*</span>
              </label>
              <div>
                <input type="text" id="nationality" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="abroadCountry">
                Xorijiy davlat <span>*</span>
              </label>
              <div>
                <input type="text" id="abroadCountry" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="phoneNumber">
                Telefon raqam <span>*</span>
              </label>
              <div>
                <input type="number" id="phoneNumber" />
                <img src={penSvg} alt="icon" />
              </div>
            </div>

            <div className="commonInformation-cont-formCont-form-divCon-inputLabelWrapper">
              <label htmlFor="uploadFile">
                Passport yuklash (pdf, doc) <span>*</span>
              </label>
              <div>
                <label htmlFor="uploadFile">Yuklang</label>
                <input
                  className="passportPdforDocUpload"
                  type="file"
                  id="uploadFile"
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
