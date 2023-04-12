import "./TestPopUp.scss";
import { useState } from "react";
import img from "../../../../../assets/images/portal/4.png";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";

export default function TestPopUp({ setactivePopUp }) {
  const [testResponse, settestResponse] = useState(false);

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}
      ></div>
      <form className="victorina-test" onSubmit={handleSubmit}>
        <div className="victorina-test-title">
          <h3>01. Введение</h3>
        </div>
        <div className="victorina-test-wrapper">
          <p className="victorina-test-list-desc">
            I wanted a green shirt but they only had .....
          </p>
          <div className="victorina-test-list-wrapper">
            <ul className="victorina-test-list">
              {[
                "A. a one white",
                "B. one white",
                "C. a white",
                "D. a white one",
              ].map((el, index) => (
                <li key={index} className="victorina-test-list-item">
                  <Checkbox
                    type="checkbox"
                    checked={testResponse === index ? true : false}
                    inputProps={{ "aria-label": "controlled" }}
                    onChange={() => settestResponse(index)}
                  />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
            <img src={img} alt="eror" />
          </div>
          <div className="victorina-test-btn-wrapper">
            <button className="victorina-test-btn-prev">
              {t("victorina.prev")}
            </button>
            <button className="victorina-test-btn-next">
              {t("expert.nextbtn")}
            </button>
            <span>Вопрос 2 из 20</span>
          </div>
        </div>
      </form>
    </div>
  );
}
