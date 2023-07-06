import "./TestPopUp.scss";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTestQuizz,
  sendVictorinaTest,
} from "../../../../../reduxToolkit/victorinaQuiz/victorinaTest/getTest";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { imageUrl } from "../../../../../services/api/utils";
import { mediaVictorinaImage } from "../../../../../reduxToolkit/victorinaImage/media-upload";
import mediaFileSlice from "../../../../../reduxToolkit/victorinaImage";

export default function TestPopUp({ setactivePopUp }) {
  const [currentQuiz, setCurrentQuiz] = useState({ id: "", active: 1 });
  const [answerId, setAnswerId] = useState("");
  const [questionId, setQuestion] = useState("");
  const [test, setTest] = useState([]);
  const { id } = useParams();
  const [testResponse, settestResponse] = useState(false);
  const dispatch = useDispatch();
  const testData = useSelector(
    (state) => state?.quizTestSlice?.quizTestData?.questions
  );
  const communityCreateData = useSelector(
    (store) => store.mediaFileSlice.communityImagePost
  );
  const [data, setData] = useState({
    document: communityCreateData.document,
  });
  const navigate = useNavigate();

  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getTestQuizz({ id }));
  }, []);

  useEffect(() => {
    if (testData?.length > 0) {
      setCurrentQuiz((prev) => ({ ...prev, id: testData[0].id }));
    }
  }, [testData]);
  function prev() {
    const index = testData.findIndex((el) => el.id === currentQuiz.id);
    setCurrentQuiz((prev) => ({
      ...prev,
      id: testData[index - 1].id,
      active: prev.active - 1,
    }));
  }

  function next() {
    const index = testData.findIndex((el) => el.id === currentQuiz.id);
    setCurrentQuiz((prev) => ({
      ...prev,
      id: testData[index + 1].id,
      active: prev.active + 1,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const newArray = newObj(test);
    dispatch(
      sendVictorinaTest({
        id,
        data: {
          answers: newArray,
          passport: communityCreateData?.document,
          fio: inputValue,
        },
      })
    );
  };

  function newObj(arr) {
    let obj;
    arr.forEach((element) => {
      obj = { ...obj, [element.key]: element.value };
    });
    return obj;
  }
  const handleQuestion = ({ q, a }) => {
    setQuestion(q);
    setAnswerId(a);
    const testIndex = test.findIndex((el) => el.key === q);
    setTest((prev) => {
      if (testIndex < 0) {
        return [
          ...prev,
          {
            key: q,
            value: a,
          },
        ];
      }
      return prev.map((el) => {
        if (el.key === q) {
          return {
            ...el,
            value: a,
          };
        }
        return el;
      });
    });
  };

  if (!testData?.length) {
    return null;
  }
  console.log(testData);

  return (
    <div className="projectImg">
      <div
        className="victorina-overlay"
        onClick={() => setactivePopUp(false)}></div>
      <form className="victorina-test" onSubmit={handleSubmit}>
        {testData?.map((evt, index) => (
          <div
            key={evt.id}
            className={`victorina-test-wrapper ${
              currentQuiz.id === evt?.id ? "active" : ""
            }`}>
            <p
              className="victorina-test-list-desc"
              dangerouslySetInnerHTML={{
                __html: evt?.question,
              }}
            />
            <div className="victorina-test-list-wrapper">
              <ul className="victorina-test-list">
                {evt?.answers?.map((el) => (
                  <li
                    onClick={() => handleQuestion({ q: evt.id, a: el.id })}
                    key={el?.id}
                    className="victorina-test-list-item">
                    <Checkbox
                      type="checkbox"
                      checked={testResponse === el?.id ? true : false}
                      inputProps={{ "aria-label": "controlled" }}
                      onChange={() => {
                        settestResponse(el?.id);
                      }}
                    />
                    <span>{el.answer}</span>
                  </li>
                ))}
              </ul>
              <img src={`${imageUrl}/${evt?.image}`} alt="error" />
            </div>
          </div>
        ))}
        <div style={{ padding: "20px" }} className="victorina-test-btn-wrapper">
          {currentQuiz.active === 1 ? (
            <Button
              sx={{ gap: "10px" }}
              variant="contained"
              disabled
              onClick={prev}>
              {t("victorina.prev")}
            </Button>
          ) : (
            <Button sx={{ gap: "10px" }} variant="contained" onClick={prev}>
              {t("victorina.prev")}
            </Button>
          )}
          {currentQuiz.active === testData?.length - 1 ? (
            <Button
              sx={{ gap: "10px", marginLeft: "15px" }}
              variant="contained"
              onClick={next}>
              {t("expert.nextbtn")}
            </Button>
          ) : (
            <Button
              sx={{ gap: "10px", marginLeft: "15px" }}
              disabled
              variant="contained"
              onClick={next}>
              {t("expert.nextbtn")}
            </Button>
          )}
          <span style={{ marginLeft: "15px" }}>
            {t("voice")} {currentQuiz.active} из {testData?.length}
          </span>
          <Button
            onClick={() => {
              navigate(`/portal-category/victorina/image-project/${id}/test`);
            }}
            type="submit"
            sx={{ gap: "10px", marginLeft: "15px" }}
            variant="contained">
            {t("finish")}
          </Button>
        </div>
      </form>
    </div>
  );
}
