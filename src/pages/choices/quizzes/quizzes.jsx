import "./quizzes.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import eventImg from "../../../assets/images/portal/cabinetVolunteer/event.png";
import { motion } from "framer-motion";
import btnArrowDown from "../../../assets/images/portal/privateInformation/btnArrowDown.svg";
import badCrumbsImg from "../../../assets/images/portal/privateInformation/badCrumbs.svg";
import Card from "./cardComponent/card";
import Header from "../../../component/Layout/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllQuizData,
  getQuizDataById,
} from "../../../reduxToolkit/choicesPageSlice/extraReducer";
import { useEffect } from "react";
import { Spinner } from "../../../component";
import { useTranslation } from "react-i18next";

const Quizzes = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const [postsPerPageActive, setPostsPerpageActive] = useState(6);
  const [postsPerPageEnded, setPostsPerpageEnded] = useState(6);
  const dispatch = useDispatch();
  const quizTotalData = useSelector((state) => state.choiceQuizSlice);
  const lan = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const btnArr = [
    {
      id: 1,
      name: `${t("choices.quizzes")}`,
      status: 1,
    },
    {
      id: 2,
      name: `${t("choices.endedQuizzes")}`,
      status: 0,
    },
  ];

  useEffect(() => {
    dispatch(getAllQuizData({ status: 1, paginate: postsPerPageActive }));
  }, [dispatch, lan]);

  if (quizTotalData?.allDataLoading) {
    return <Spinner position="full" />;
  } else if (quizTotalData?.allDataError) {
    return <p>{quizTotalData?.allDataError}</p>;
  }

  const changeBtn = (el) => {
    setActiveBtn(el.id);
    dispatch(
      getAllQuizData({
        status: el.status,
        paginate: el.id === 1 ? postsPerPageActive : postsPerPageEnded,
      })
    );
  };

  const showMoreActive = (e) => {
    e.preventDefault();
    setPostsPerpageActive((prev) => prev + 6);
    dispatch(getAllQuizData({ status: 1, paginate: postsPerPageActive }));
  };
  const showMoreEnded = (e) => {
    e.preventDefault();
    setPostsPerpageEnded((prev) => prev + 6);
    dispatch(getAllQuizData({ status: 0, paginate: postsPerPageEnded }));
  };

  return (
    <>
      <Header />
      <div className="choices-quiz-Container">
        <div className="choices-quiz-Container-header">
          <h1>
            {activeBtn === 1
              ? `${t("choices.quizzes")}`
              : `${t("choices.endedQuizzes")}`}
          </h1>
          <ul>
            <li>
              <Link to="/">{t("choices.mainPage")}</Link>
              <img src={badCrumbsImg} alt="breadcrumb line" />
            </li>
            <li aria-current="page">
              {activeBtn === 1
                ? `${t("choices.quizzes")}`
                : `${t("choices.endedQuizzes")}`}
            </li>
          </ul>
        </div>
        <div className="choices-quiz-Container-btnCont">
          {btnArr.map((el, index) => (
            <button
              onClick={() => changeBtn(el)}
              className={el.id === activeBtn && "active"}
              key={index}>
              {el.name}
            </button>
          ))}
        </div>
        {activeBtn === 1 ? (
          <div className="choices-quiz-Container-bodyCont">
            <div className="choices-quiz-Container-bodyCont-cardCont">
              {quizTotalData.allData.data.map((el, index) => (
                <Card key={index} data={el} quiz={false} />
              ))}
            </div>

            <div className="choices-quiz-Container-bodyCont-bottomBtn">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => showMoreActive(e)}>
                <img src={btnArrowDown} alt="icon" />
                <span>
                  {activeBtn === 1
                    ? `${t("choices.allQuizzes")}`
                    : `${t("choices.allQuizFinished")}`}
                </span>
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="choices-quiz-Container-bodyCont">
            <div className="choices-quiz-Container-bodyCont-cardCont">
              {quizTotalData.allData.data.map((el, index) => (
                <Card key={index} data={el} quiz={true} />
              ))}
            </div>
            <div className="choices-quiz-Container-bodyCont-bottomBtn">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => showMoreEnded(e)}>
                <img src={btnArrowDown} alt="icon" />
                <span>
                  {activeBtn === 1
                    ? `${t("choices.allQuizzes")}`
                    : `${t("choices.allQuizFinished")}`}
                </span>
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quizzes;
