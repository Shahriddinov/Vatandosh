import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import scripka from "../../../../../assets/images/expert/scripka-icon.svg";
import { useState } from "react";

export default function ProjectPoemsPopUp() {
  const [activePopUp, setactivePopUp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="projectImg"
      style={activePopUp ? null : { display: "none" }}
    >
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}
      ></div>
      <form className="victorina-popup" onSubmit={handleSubmit}>
        <h3 className="victorina-popup-title">Loyihada ishtirok etish</h3>
        <label htmlFor="" className="registeritem-label">
          <p>
            {"FISH"} <span>*</span>
          </p>
          <div>
            <input
              required
              type="text"
              minLength={3}
              maxLength={30}
              placeholder={"Ishtirokchini ismi"}
            />
          </div>
        </label>
        <label htmlFor="" className="registeritem-label">
          <p>
            {"Eng yaxshi she’rlaringizni yuklang (pdf, doc)"}
            <span>*</span>
          </p>
          <label htmlFor="registeritem-label-fileinput" required>
            <input
              required
              id="registeritem-label-fileinput"
              className="registeritem-label-fileinput"
              type="file"
            />
            <p>Fayl yuklang</p>
            <img src={scripka} alt="" />
          </label>
        </label>
        <div className="victorina-popup-btnWrapper">
          <div
            type="click"
            className="victorina-popup-closeBtn"
            onClick={() => setactivePopUp(false)}
          >
            Bekor qilish
          </div>
          <button type="submit" className="victorina-popup-SubmitBtn">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  );
}
