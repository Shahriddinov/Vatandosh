import { useTranslation } from "react-i18next";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import "./VictorinaProject.scss";
import img from "../../../../../assets/images/portal/5.png";
import CouncilStatics from "../../../volunter/pages/VolunterHome/components/Council/CouncilStatics";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectYouTubePopUp from "../../components/ProjectYouTubePopUp/ProjectYouTubePopUp";
import ProjectImgPopUp from "../../components/ProjectImgPopUp/ProjectImgPopUp";
import ProjectPoemsPopUp from "../../components/ProjectPoemsPopUp/ProjectPoemsPopUp";
import TestPopUp from "../../components/TestPopUp/TestPopUp";
import WinnerCard from "../../components/WinnerCard/WinnerCard";

export default function VictorinaProject() {
  const [projectData, setProjectData] = useState(null);
  const [PopUp, setPopUp] = useState(false);
  const { t } = useTranslation();
  const { pathname } = useLocation();

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

  return (
    <main className="victorinaproject">
      <div className="container">
        <ExpertTitle title={projectData?.title} url={projectData?.url} />
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
                  onClick={() => setPopUp(pathname)}
                >
                  {t("victorina.joinproject")}
                </button>
              </>
            )}
            <div className="victorinaproject-main-desc">
              <h3>
                Uzbekistondagi eng yaxshi rasmlar pochta markalarida aks
                ettiriladi
              </h3>
              <div className="victorinaproject-main-desc-action">
                <div className="victorinaproject-main-desc-action-date">
                  <BsFillCalendarEventFill />
                  <span>12.02.2023</span>
                </div>
                <div className="victorinaproject-main-desc-action-views">
                  <AiFillEye />
                  <span>100 K</span>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <CouncilStatics />
        </div>
        {pathname.includes("finished-projects") ? (
          <>
            <div className="victorinaproject-winners">
              <h3>{t("victorina.winnerlist")}</h3>
              <div className="victorinaproject-winners-list">
                {[1, 2, 3].map((el) => (
                  <WinnerCard key={el} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <ShareFriends />
        )}
      </div>

      {PopUp && PopUp.includes("image-project") ? (
        <ProjectImgPopUp setactivePopUp={setPopUp} />
      ) : null}
      {PopUp && PopUp.includes("youtube-project") ? (
        <ProjectYouTubePopUp setactivePopUp={setPopUp} />
      ) : null}
      {PopUp && PopUp.includes("poem-project") ? (
        <ProjectPoemsPopUp setactivePopUp={setPopUp} />
      ) : null}
      {PopUp && PopUp.includes("edu-branding") ? (
        <TestPopUp setactivePopUp={setPopUp} />
      ) : null}
    </main>
  );
}
