import { useTranslation } from "react-i18next";
import "./VictorinaProject.scss";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectYouTubePopUp from "../../components/ProjectYouTubePopUp/ProjectYouTubePopUp";
import ProjectImgPopUp from "../../components/ProjectImgPopUp/ProjectImgPopUp";
import ProjectPoemsPopUp from "../../components/ProjectPoemsPopUp/ProjectPoemsPopUp";
import TestPopUp from "../../components/TestPopUp/TestPopUp";
import { useDispatch, useSelector } from "react-redux";
import VictorinaStatics from "../VictorinaHome/components/VictorinaStatics/VictorinaStatics";
import ProjectPassportPopUp from "../../components/ProjectPassportPopUp/ProjectPassportPopUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { getByIdQuizz } from "../../../../../reduxToolkit/victorinaQuiz/quizbyid/quizid";
import WinnerCardVictorina from "./VictorinaWinner/WinnerCard";
import { imageUrl } from "../../../../../services/api/utils";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";
import { Spinner } from "../../../../../component";

export default function VictorinaProject() {
  const [PopUp, setPopUp] = useState(false);
  const [PopUpVerify, setPopUpVerify] = useState("");
  const { t } = useTranslation();
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);

  const quizData = useSelector((state) => state.quizByIdSlice.quizByIdData);
  const quizDataLoading = useSelector((state) => state.quizByIdSlice.loading);
  const pageData = useSelector((state) => state.pageSlice.pageData);

  useEffect(() => {
    if (PopUp) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [PopUp]);
  //   if (pathname.includes("image-project")) {
  //     setProjectData((prev) => {
  //       return {
  //         title: t("victorina.bestimgproject"),
  //         url: [
  //           { title: t("expert.main"), url: "/portal-category/victorina" },
  //           pathname.includes("finished-project")
  //             ? {
  //                 title: t("victorina.endvictorina"),
  //                 url: "/portal-category/victorina/finished-projects",
  //               }
  //             : {
  //                 title: t("victorina.victorinas"),
  //                 url: "/portal-category/victorina/projects",
  //               },
  //           { title: t("victorina.bestimgproject"), url: "" },
  //         ],
  //       };
  //     });
  //   }
  // }, [pathname, t]);

  useEffect(() => {
    dispatch(getByIdQuizz({ id }));
    dispatch(getQuizPage());
  }, [lan, dispatch, id]);

  if (quizDataLoading) {
    return <Spinner position="full" />;
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className="victorinaproject">
        <div className="container">
          <h1
            style={{ marginBottom: "25px" }}
            className="experttitle-title-text"
          >
            {quizData?.title}
          </h1>
          <div className="victorinaproject-wrapper">
            <div className="victorinaproject-main">
              <img src={`${imageUrl}/${quizData?.image}`} alt="error" />
              {pathname.includes("finished-projects") ? (
                <button className="victorinaproject-main-btn">
                  {t("victorina.endproject")}
                </button>
              ) : (
                <>
                  <div className="victorinaproject-main-timer">
                    <div>
                      <span>{quizData?.finished_at?.slice(9, 11)}</span>
                      <span>Kun</span>
                    </div>
                    <div>
                      <span>{quizData?.finished_at?.slice(11, 13)}</span>
                      <span>Soat</span>
                    </div>
                    <div>
                      <span>{quizData?.finished_at?.slice(14, 16)}</span>
                      <span>Daqiqa</span>
                    </div>
                  </div>
                  <button
                    className="victorinaproject-main-btn victorinaproject-main-btnActive"
                    onClick={() => {
                      setPopUp(
                        quizData.type === "test" ? "verify_popup" : true
                      );
                      setPopUpVerify("verify");
                    }}
                  >
                    {t("victorina.joinproject")}
                  </button>
                </>
              )}
              <div className="victorinaproject-main-desc">
                <h3>{quizData?.title}</h3>
                <div className="victorinaproject-main-desc-action">
                  <div className="victorinaproject-main-desc-action-date">
                    <BsFillCalendarEventFill />
                    <span>{quizData?.started_at}</span>
                  </div>
                  <div className="victorinaproject-main-desc-action-views">
                    <AiFillEye />
                    <span>{quizData?.count}</span>
                  </div>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: quizData?.description }}
                />
              </div>
            </div>
            <VictorinaStatics pageData={pageData} />
          </div>
          <>
            {pathname.includes("finished-projects") ? (
              <div
                style={{ marginBottom: "50px" }}
                className="victorinaproject-winners"
              >
                <h3>{t("victorina.winnerlist")}</h3>
                <div className="victorinaproject-winners-list">
                  {quizData?.participants?.map((el) => (
                    <WinnerCardVictorina
                      title={quizData?.title}
                      el={el}
                      volunterById={id}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </>
          <ShareFriends />
        </div>

        {PopUp && quizData.type === "images" ? (
          <ProjectImgPopUp toast={toast} setactivePopUp={setPopUp} />
        ) : null}
        {PopUp && quizData.type === "video" ? (
          <ProjectYouTubePopUp
            toast={toast}
            setactivePopUp={setPopUp}
            id={id}
          />
        ) : null}
        {PopUp === "verify_popup" && PopUpVerify === "verify" ? (
          <ProjectPassportPopUp
            setactivePopUp={setPopUp}
            setPopUpVerify={setPopUpVerify}
            toast={toast}
          />
        ) : null}
        {PopUp === "test" && quizData.type === "test" ? (
          <TestPopUp toast={toast} setactivePopUp={setPopUp} />
        ) : null}
        {PopUp && quizData.type === "text" ? (
          <ProjectPoemsPopUp toast={toast} setactivePopUp={setPopUp} />
        ) : null}
      </main>
    </>
  );
}
