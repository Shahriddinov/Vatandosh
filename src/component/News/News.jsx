import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getNews } from "../../reduxToolkit/newsSlice/extraReducer";
import Card from "../card/Card";

import "./News.scss";
import Aos from "aos";

import { getProjectsMenu } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";
import { getEvents } from "../../reduxToolkit/eventsSlice/extraReducer";
import { baseServerUrl } from "../../services/api/utils";
import { NavBarLinks } from "../NavBarLinks";

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsSlice.newsData);
  const error = useSelector((state) => state.newsSlice.error);
  const eventsData = useSelector((state) => state.eventsSlice.eventsData);
  const errorEvents = useSelector((state) => state.eventsSlice.error);
  const projectMenu = useSelector((state) => state.peaceful.menuData);
  const lan = useSelector((state) => state.language.language);
  const [activeCard, setActiveCard] = useState(true);

  const data = useSelector((store) => store.singleSlice.projectsData);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(getNews());
    dispatch(getEvents());
    dispatch(getProjectsMenu());
  }, []);

  if (error || errorEvents) {
    return <p>{error}</p>;
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
              {newsData?.map((news) => (
                <Card key={news.id} {...news} pathUrl="news" />
              ))}
              <div className="all-btn-mobile">
                <button>{t("all")}</button>
              </div>
            </div>
            <div className={`events-cards ${!activeCard ? "active-card" : ""}`}>
              {eventsData?.map((event) => (
                <Card key={event.id} {...event} />
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
