import React from "react";
import { Link, useParams } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../services/api/utils";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const SiteLatestNews = ({ latestNews }) => {
  const { t } = useTranslation();
  const { category, type } = useParams();
  return (
    <div className="latest_news">
      <h4 className="latest_news-title">{t("lates")}</h4>
      <ul className="latest_news-list">
        {latestNews.slice(0, 5).map((el) => {
          return (
            <li key={el.id} className="latest_news-list-item">
              <Link
                to={`/detail/${category}/${type}/${el.id}`}
                className="latest_news-list-item-link">
                <div className="latest_news-list-item-img">
                  <img
                    src={`${PORTAL_IMAGE_URL}/${
                      type === "event" ? JSON.parse(el.image)[0] : el.image
                    }`}
                    alt=""
                  />
                </div>
                <div className="latest_news-list-item-desc">
                  <p className="latest_news-list-item-desc-text">{el.title}</p>
                  <div className="latest_news-list-item-desc-action">
                    <div className="latest_news-list-item-desc-action-item">
                      <BsFillCalendar2EventFill />
                      <span>{el.created_at?.split("T")[0]}</span>
                    </div>
                    <div className="latest_news-list-item-desc-action-item">
                      <AiFillEye />
                      <span>{el.view}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SiteLatestNews;
