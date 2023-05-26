import "./quizzes.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import eventImg from "../../../assets/images/portal/cabinetVolunteer/event.png";
import { motion } from "framer-motion";
import btnArrowDown from "../../../assets/images/portal/privateInformation/btnArrowDown.svg";
import badCrumbsImg from "../../../assets/images/portal/privateInformation/badCrumbs.svg";
import Card from "./cardComponent/card";
import Header from "../../../component/Layout/Header/Header";

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
  },
  {
    id: 2,
    name: "Viktorina yakunlanganlar",
  },
];

const Quizzes = () => {
  const [activeBtn, setActiveBtn] = useState(btnArr[0]);
  const [fakeDatas, setFakeDatas] = useState(fakeData);
  const [postsPerPage, setPostsPerpage] = useState(6);
  const [quizHasEnded, setQuizHasEnded] = useState(true);
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
              {activeBtn.id === 1 ? "Viktorinalar" : "Viktorina yakunlanganlar"}
            </li>
          </ul>
        </div>
        <div className="choices-quiz-Container-btnCont">
          {btnArr.map((el, index) => (
            <button
              onClick={() => setActiveBtn(el)}
              className={el.id === activeBtn.id && "active"}
              key={index}
            >
              {el.name}
            </button>
          ))}
        </div>
        {activeBtn.id === 1 ? (
          <div className="choices-quiz-Container-bodyCont">
            <div className="choices-quiz-Container-bodyCont-cardCont">
              <Card
                fakeDatas={fakeDatas}
                postsPerPage={postsPerPage}
                quiz={quizHasEnded}
              />
            </div>

            <div className="choices-quiz-Container-bodyCont-bottomBtn">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setPostsPerpage((prev) => prev + 6)}
              >
                <img src={btnArrowDown} alt="icon" />
                <span>
                  {activeBtn.id === 1
                    ? "Barcha Viktorina yakunlanganlar"
                    : "Barcha viktorinalar"}
                </span>
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="choices-quiz-Container-bodyCont">
            <div className="choices-quiz-Container-bodyCont-cardCont">
              <Card fakeDatas={fakeDatas} postsPerPage={postsPerPage} />
            </div>
            <div className="choices-quiz-Container-bodyCont-bottomBtn">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setPostsPerpage((prev) => prev + 6)}
              >
                <img src={btnArrowDown} alt="icon" />
                <span>
                  {activeBtn.id === 1
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
