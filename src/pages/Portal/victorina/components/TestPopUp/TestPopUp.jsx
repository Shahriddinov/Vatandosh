import "./TestPopUp.scss";
import { useState } from "react";
import img from "../../../../../assets/images/portal/4.png";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTestQuizz } from "../../../../../reduxToolkit/victorinaQuiz/victorinaTest/getTest";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { imageUrl } from "../../../../../services/api/utils";

export default function TestPopUp({ setactivePopUp }) {
  const [currentQuiz, setCurrentQuiz] = useState(1);
  const { id } = useParams();
  const [testResponse, settestResponse] = useState(false);
  const dispatch = useDispatch();
  const testData = useSelector(
    (state) => state.quizTestSlice.quizTestData.questions
  );

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getTestQuizz(id));
  }, []);

  function prev() {
    setCurrentQuiz(currentQuiz - 1);
  }

  function next() {
    setCurrentQuiz(currentQuiz + 1);
  }

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}></div>
      <form className="victorina-test" onSubmit={handleSubmit}>
        <div className="victorina-test-title">
          <h3>01. Введение</h3>
        </div>
        {testData?.map((evt) => (
          <div
            key={evt.id}
            className={`victorina-test-wrapper ${
              currentQuiz === evt?.id ? "active" : ""
            }`}>
            <p className="victorina-test-list-desc">{evt.question}</p>
            <div className="victorina-test-list-wrapper">
              <ul className="victorina-test-list">
                {evt?.answers?.map((el, index) => (
                  <li key={index} className="victorina-test-list-item">
                    <Checkbox
                      type="checkbox"
                      checked={testResponse === el?.id ? true : false}
                      inputProps={{ "aria-label": "controlled" }}
                      onChange={() => settestResponse(el?.id)}
                    />
                    <span>{el.answer}</span>
                  </li>
                ))}
              </ul>
              <img src={`${imageUrl}/${evt?.image}`} alt="error" />
            </div>
          </div>
        ))}
        <div className="victorina-test-btn-wrapper">
          {currentQuiz === 1 ? (
            <Button variant="contained" disabled onClick={prev}>
              Previous
            </Button>
          ) : (
            <Button variant="contained" onClick={prev}>
              Previous
            </Button>
          )}
          {/* <Button variant="contained" >Submit</Button> */}
          {currentQuiz === testData?.length - 1 ? (
            <Button variant="contained" onClick={next}>
              Next
            </Button>
          ) : (
            <Button disabled variant="contained" onClick={next}>
              Next
            </Button>
          )}
          {/* <button className="victorina-test-btn-prev">
            {t("victorina.prev")}
          </button>
          <button className="victorina-test-btn-next">
            {t("expert.nextbtn")}
          </button> */}
          <span>
            Вопрос {currentQuiz} из {testData?.length}
          </span>
        </div>
      </form>
    </div>
  );
}
