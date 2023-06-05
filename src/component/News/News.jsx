import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "./News.scss";
import { getProjectsMenu } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";
import { baseServerUrl } from "../../services/api/utils";
import Spinner from "../Spinner/Spinner";
import {
  portalEvents,
  portalNews,
} from "../../reduxToolkit/portalSlices/news-events/extraReducer";
import PortalCard from "../portalCard/portalCard";

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const projectMenu = useSelector((state) => state.peaceful.menuData);
  const lan = useSelector((state) => state.language.language);
  const [activeCard, setActiveCard] = useState(true);

  const { news, newsLoading, newsError, events, eventsLoading, eventsError } =
    useSelector((state) => state.portalAllNewsSlice);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(portalNews());
    dispatch(getProjectsMenu());
    dispatch(portalEvents());
  }, [dispatch, lan]);

  if (newsError || eventsError) {
    return <p>{newsError || eventsError}</p>;
  }

  if (newsLoading || eventsLoading) {
    return <Spinner position="full" />;
  }

  return (
    <section className="news">
      <div className="news__container container">
        <h2 className="news__header">{t("news")}</h2>
        <div className="news__btns">
          <div className="news-btn">
            <button
              className={activeCard ? "active-btn" : ""}
              onClick={() => setActiveCard(true)}
            >
              {t("news")}
            </button>
          </div>
          <div className="events-btn">
            <button
              className={!activeCard ? "active-btn" : ""}
              onClick={() => setActiveCard(false)}
            >
              {t("information_items.item2")}
            </button>
          </div>
          <div className="all-btn">
            <button onClick={() => navigate("/information-service/news")}>
              {t("all")}
            </button>
          </div>
        </div>
        <div className="news__body">
          <div className="latest-news">
            <div className={`news-cards ${activeCard ? "active-card" : ""}`}>
              {news?.map((news) => (
                <PortalCard key={news.id} {...news} pathUrl="news" />
              ))}
              <div className="all-btn-mobile">
                <button>{t("all")}</button>
              </div>
            </div>
            <div className={`events-cards ${!activeCard ? "active-card" : ""}`}>
              {events?.data?.map((event) => (
                <PortalCard key={event.id} {...event} />
              ))}
              <div className="all-btn-mobile">
                <button>{t("all")}</button>
              </div>
            </div>
          </div>
          <div className="our-activities">
            <div className="goto-system">
              <h4>{t("system")}</h4>
              <div>
                <button onClick={() => navigate("/portal")}>
                  {t("switch")}
                </button>
              </div>
            </div>
            <div className="our-projects">
              <h4>{t("project")}</h4>
              <ul>
                {projectMenu.map((project) => {
                  return (
                    <li key={project.id}>
                      <Link to={`/projects/columns?=${project?.id}`}>
                        <img
                          src={`${baseServerUrl}/${project.logo}`}
                          alt="icon"
                        />
                        <span>{project[`menu_${lan}`]}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div>
                <button onClick={() => navigate("/projects")}>
                  {t("participation")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
