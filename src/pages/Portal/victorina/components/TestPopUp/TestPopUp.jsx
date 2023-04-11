import "./TestPopUp.scss";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export default function TestPopUp() {
  const [activePopUp, setactivePopUp] = useState(true);
  const [testResponse, settestResponse] = useState(false);

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
      <form className="victorina-test" onSubmit={handleSubmit}>
        <div className="victorina-test-title">
          <h3>01. Введение</h3>
        </div>
        <div className="victorina-test-wrapper">
          <p className="victorina-test-list-desc">
            I wanted a green shirt but they only had .....
          </p>
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
        </div>
      </form>
    </div>
  );
}
