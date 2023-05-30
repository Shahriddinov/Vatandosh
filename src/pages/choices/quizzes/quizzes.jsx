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

const fakeData = [
  {
    id: 1,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
  {
    id: 2,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [5, 10, 12],
  },
  {
    id: 3,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [12, 7, 58],
  },
  {
    id: 4,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
  {
    id: 5,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
  {
    id: 6,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
  {
    id: 7,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
  {
    id: 8,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
];

const btnArr = [
  {
    id: 1,
    name: "Viktorinalar",
    status: 1,
  },
  {
    id: 2,
    name: "Viktorina yakunlanganlar",
    status: 0,
  },
];

const Quizzes = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  // const [fakeDatas, setFakeDatas] = useState(fakeData);
  const [postsPerPage, setPostsPerpage] = useState(6);
  // const [quizHasEnded, setQuizHasEnded] = useState(true);
  const dispatch = useDispatch();
  const quizTotalData = useSelector((state) => state.choiceQuizSlice);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getAllQuizData({ status: 1, paginate: postsPerPage }));
  }, [dispatch, lan]);

  if (quizTotalData?.allDataLoading) {
    return <Spinner position="full" />;
  } else if (quizTotalData?.allDataError) {
    return <p>{quizTotalData?.allDataError}</p>;
  }

  const changeBtn = (el) => {
    setActiveBtn(el.id);
    dispatch(getAllQuizData({ status: el.status, paginate: postsPerPage }));
  };

  return (
    <>
      <Header />
      <div className="choices-quiz-Container">
        <div className="choices-quiz-Container-header">
          <h1>Viktorina yakunlanganlar</h1>
          <ul>
            <li>
              <Link to="/">mainPage</Link>
              <img src={badCrumbsImg} alt="breadcrumb line" />
            </li>
            <li aria-current="page">
              {activeBtn === 1 ? "Viktorinalar" : "Viktorina yakunlanganlar"}
            </li>
          </ul>
        </div>
        <div className="choices-quiz-Container-btnCont">
          {btnArr.map((el, index) => (
            <button
              onClick={() => changeBtn(el)}
              className={el.id === activeBtn && "active"}
              key={index}
            >
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
                onClick={() => setPostsPerpage((prev) => prev + 6)}
              >
                <img src={btnArrowDown} alt="icon" />
                <span>
                  {activeBtn === 1
                    ? "Barcha Viktorina yakunlanganlar"
                    : "Barcha viktorinalar"}
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
                onClick={() => setPostsPerpage((prev) => prev + 6)}
              >
                <img src={btnArrowDown} alt="icon" />
                <span>
                  {activeBtn === 1
                    ? "Barcha Viktorina yakunlanganlar"
                    : "Barcha viktorinalar"}
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
