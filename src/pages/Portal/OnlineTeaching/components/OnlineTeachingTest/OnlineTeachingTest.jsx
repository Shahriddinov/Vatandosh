import { Checkbox } from "@mui/material";
import "./OnlineTeachingTest.scss";
import { useState } from "react";
import img from "../../../../../assets/images/portal/4.png";
import { useTranslation } from "react-i18next";

export default function OnlineTeachingTest({ activeNav }) {
  const [testResponse, settestResponse] = useState(false);
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={
        activeNav === 3
          ? "onlinetest-test passTheTest-scaleActive"
          : "onlinetest-test passTheTest-scaleHidden"
      }
      onSubmit={handleSubmit}
    >
      <div className="onlinetest-test-title">
        <h3>01. Введение</h3>
      </div>
      <div className="onlinetest-test-wrapper">
        <p className="onlinetest-test-list-desc">
          I wanted a green shirt but they only had .....
        </p>
        <div className="onlinetest-test-list-wrapper">
          <ul className="onlinetest-test-list">
            {[
              "A. a one white",
              "B. one white",
              "C. a white",
              "D. a white one",
            ].map((el, index) => (
              <li key={index} className="onlinetest-test-list-item">
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
        <div className="onlinetest-test-btn-wrapper">
          <button className="onlinetest-test-btn-prev">
            {t("victorina.prev")}
          </button>
          <button className="onlinetest-test-btn-next">
            {t("expert.nextbtn")}
          </button>
          <span>Вопрос 2 из 20</span>
        </div>
      </div>
    </form>
  );
}
