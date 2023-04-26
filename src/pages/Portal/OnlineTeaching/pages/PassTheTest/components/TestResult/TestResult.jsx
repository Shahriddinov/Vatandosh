import "./TestResult.scss";
import failed from "../../../../../../../assets/images/OnlineTeaching/failed-img.svg";
import succes from "../../../../../../../assets/images/OnlineTeaching/success-img.svg";
import { useState } from "react";

export default function TestResult() {
  const [result, setResult] = useState(true);

  return (
    <div className="test-result">
      <div className="test-result-desc">
        <p className="test-result-desc-title">Test natijasi</p>
        <p className="test-result-desc-result">To‘g‘ri javoblar soni 10/20</p>
        <p
          className="test-result-desc-content"
          style={result ? { color: "#06A93D" } : null}
        >
          Siz testdan o‘ta olmadingiz
        </p>
        <div className="test-result-desc-btns">
          <button className="test-result-desc-btns-left">
            Darslarga qaytish
          </button>
          <button className="test-result-desc-btns-right">
            Testni qayta ishlash
          </button>
        </div>
      </div>
      <img src={result ? succes : failed} alt="error" />
    </div>
  );
}
