import "./ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { BsImage } from "react-icons/bs";
import { useState } from "react";

export default function ProjectImgPopUp() {
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
        <label
          htmlFor="registeritem-label-fileinput"
          className="registeritem-imgInput"
        >
          <input
            required
            id="registeritem-label-fileinput"
            className="registeritem-label-fileinput"
            type="file"
            minLength={3}
            maxLength={50}
          />
          <BsImage />
          <p>{"Tanlovda ishtirok etish uchun rasmlar yuklang"}</p>
        </label>
        <div className="victorina-popup-btnWrapper">
          <div
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
