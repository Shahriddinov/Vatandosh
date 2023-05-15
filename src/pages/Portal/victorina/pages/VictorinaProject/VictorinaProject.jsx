import { useTranslation } from "react-i18next";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import "./VictorinaProject.scss";
import img from "../../../../../assets/images/portal/5.png";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectYouTubePopUp from "../../components/ProjectYouTubePopUp/ProjectYouTubePopUp";
import ProjectImgPopUp from "../../components/ProjectImgPopUp/ProjectImgPopUp";
import ProjectPoemsPopUp from "../../components/ProjectPoemsPopUp/ProjectPoemsPopUp";
import TestPopUp from "../../components/TestPopUp/TestPopUp";
import WinnerCard from "../../components/WinnerCard/WinnerCard";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";
import VictorinaStatics from "../VictorinaHome/components/VictorinaStatics/VictorinaStatics";

export default function VictorinaProject() {
  const [projectData, setProjectData] = useState(null);
  const [PopUp, setPopUp] = useState(false);
  const { t } = useTranslation();
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const quizData = useSelector((state) =>
    state.quizSlice.quizData.quizzes?.find((evt) => evt.id === Number(id))
  );

  const winnerData = useSelector(
    (state) => state.quizSlice.quizData.participants
  );

  useEffect(() => {
    if (PopUp) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [PopUp]);

  useEffect(() => {
    if (pathname.includes("image-project")) {
      setProjectData((prev) => {
        return {
          title: t("victorina.bestimgproject"),
          url: [
            { title: t("expert.main"), url: "/portal-category/victorina" },
            pathname.includes("finished-project")
              ? {
                  title: t("victorina.endvictorina"),
                  url: "/portal-category/victorina/finished-projects",
                }
              : {
                  title: t("victorina.victorinas"),
                  url: "/portal-category/victorina/projects",
                },
            { title: t("victorina.bestimgproject"), url: "" },
          ],
        };
      });
    }

    if (pathname.includes("youtube-project")) {
      setProjectData((prev) => {
        return {
          title: t("victorina.youtubeproject"),
          url: [
            { title: t("expert.main"), url: "/portal-category/victorina" },
            pathname.includes("finished-project")
              ? {
                  title: t("victorina.endvictorina"),
                  url: "/portal-category/victorina/finished-projects",
                }
              : {
                  title: t("victorina.victorinas"),
                  url: "/portal-category/victorina/projects",
                },
            { title: t("victorina.youtubeproject") },
          ],
        };
      });
    }

    if (pathname.includes("poem-project")) {
      setProjectData((prev) => {
        return {
          title: t("victorina.poemproject"),
          url: [
            { title: t("expert.main"), url: "/portal-category/victorina" },
            pathname.includes("finished-project")
              ? {
                  title: t("victorina.endvictorina"),
                  url: "/portal-category/victorina/finished-projects",
                }
              : {
                  title: t("victorina.victorinas"),
                  url: "/portal-category/victorina/projects",
                },
            { title: t("victorina.poemproject") },
          ],
        };
      });
    }

    if (pathname.includes("edu-branding")) {
      setProjectData((prev) => {
        return {
          title: t("victorina.edubrand"),
          url: [
            { title: t("expert.main"), url: "/portal-category/victorina" },
            pathname.includes("finished-project")
              ? {
                  title: t("victorina.endvictorina"),
                  url: "/portal-category/victorina/finished-projects",
                }
              : {
                  title: t("victorina.victorinas"),
                  url: "/portal-category/victorina/projects",
                },
            { title: t("victorina.edubrand") },
          ],
        };
      });
    }
  }, [pathname, t]);

  useEffect(() => {
    dispatch(getQuizz());
  }, []);

  return (
    <main className="victorinaproject">
      <div className="container">
        <h1 style={{ marginBottom: "25px" }} className="experttitle-title-text">
          {quizData?.title}
        </h1>
        <div className="victorinaproject-wrapper">
          <div className="victorinaproject-main">
            <img src={img} alt="error" />
            {pathname.includes("finished-projects") ? (
              <button className="victorinaproject-main-btn">
                {t("victorina.endproject")}
              </button>
            ) : (
              <>
                <div className="victorinaproject-main-timer">
                  <div>
                    <span>7</span>
                    <span>Kun</span>
                  </div>
                  <div>
                    <span>12</span>
                    <span>Soat</span>
                  </div>
                  <div>
                    <span>45</span>
                    <span>Daqiqa</span>
                  </div>
                </div>
                <button
                  className="victorinaproject-main-btn victorinaproject-main-btnActive"
                  onClick={() => setPopUp(pathname)}>
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
              <p dangerouslySetInnerHTML={{ __html: quizData?.description }} />
            </div>
          </div>
          <VictorinaStatics />
        </div>
        <>
          <div
            style={{ marginBottom: "50px" }}
            className="victorinaproject-winners">
            <h3>{t("victorina.winnerlist")}</h3>
            <div className="victorinaproject-winners-list">
              {winnerData?.map((el) => (
                <WinnerCard key={el} el={el} />
              ))}
            </div>
          </div>
        </>
        <ShareFriends />
      </div>

      {PopUp && quizData.type === "images" ? (
        <ProjectImgPopUp setactivePopUp={setPopUp} />
      ) : null}
      {PopUp && quizData.type === "video" ? (
        <ProjectYouTubePopUp setactivePopUp={setPopUp} id={id} />
      ) : null}
      {PopUp && quizData.type === "test" ? (
        <TestPopUp setactivePopUp={setPopUp} />
      ) : null}
      {PopUp && quizData.type === "text" ? (
        <ProjectPoemsPopUp setactivePopUp={setPopUp} />
      ) : null}
    </main>
  );
}
