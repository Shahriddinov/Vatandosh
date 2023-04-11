import "../ProjectImgPopUp/ProjectImgPopUp.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import { useState } from "react";

export default function ProjectYouTubePopUp() {
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
          <p>{"Youtubudagi eng yaxshi videolari loyihangiz"}</p>
          <div>
            <input
              required
              type="url"
              minLength={3}
              maxLength={30}
              placeholder={"Video link "}
            />
          </div>
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
