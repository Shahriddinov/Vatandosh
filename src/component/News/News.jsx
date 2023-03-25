import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getNews } from "../../reduxToolkit/newsSlice/extraReducer";
import Card from "../card/Card";

import "./News.scss";

import { getProjectsMenu } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsSlice.newsData.data);
  const projectMenu = useSelector((state) => state.peaceful.menuData);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getNews());
    dispatch(getProjectsMenu());
  }, []);

  return (
    <section className="news">
      <div className="news__container container">
        <h2 className="news__header">{t("news")}</h2>
        <div className="news__btns">
          <div className="news-btn" data-aos="fade-up">
            <button>{t("news")}</button>
          </div>
          <div className="events-btn">
            <button>{t("event")}</button>
          </div>
          <div className="all-btn">
            <button>{t("all")}</button>
          </div>
        </div>
        <div className="news__body">
          <div className="latest-news">
            <div className="news-cards">
              {newsData?.map((news) => (
                <Card key={news.id} {...news} />
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
                      <Link to="/">
                        <img
                          src={`https://vatanparvarbackend.napaautomotive.uz/storage/${project.logo}`}
                          alt="icon"
                        />
                        <span>{project[`menu_${lan}`]}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div>
                <button>{t("participation")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
