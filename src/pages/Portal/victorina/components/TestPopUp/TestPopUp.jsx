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
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { imageUrl } from "../../../../../services/api/utils";
import { mediaVictorinaImage } from "../../../../../reduxToolkit/victorinaImage/media-upload";
import mediaFileSlice from "../../../../../reduxToolkit/victorinaImage";

export default function TestPopUp({ setactivePopUp }) {
  const [currentQuiz, setCurrentQuiz] = useState(1);
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

  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getTestQuizz({ id }));
  }, []);

  function prev() {
    setCurrentQuiz(currentQuiz - 1);
  }

  function next() {
    setCurrentQuiz(currentQuiz + 1);
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

  const handleChangeApplication = ({ key, value }) => {
    if (key === "logo" || key === "document") {
      setData((prev) => ({
        ...prev,
        [key]: [value],
      }));
      const logoData = new FormData();
      logoData.append("image", value);
      dispatch(mediaVictorinaImage({ key, image: logoData }));
    } else {
      setData((prev) => ({
        ...prev,
        [key]: key === "document" ? [value.name] : value,
      }));

      const newCommunityCreateData = {
        ...communityCreateData,
        [key]: value,
      };
      dispatch(mediaFileSlice(newCommunityCreateData));
    }
  };

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
              currentQuiz === evt?.id ? "active" : ""
            }`}>
            <p
              className="victorina-test-list-desc"
              dangerouslySetInnerHTML={{
                __html: evt.question,
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
          {currentQuiz === 1 ? (
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
          {currentQuiz === testData?.length - 1 ? (
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
            {t("voice")} {currentQuiz} из {testData?.length}
          </span>
          <Button
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
