import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { news } from "../../../../../expert/pages/ExpertHome/news";
import {
    CalendarIcon,
    NewsImage,
    ViewIcon,
    WhiteCalendar,
  } from "../../../../../../../assets/images/expert";
import { LazySpinner } from "../../../../../../../component";

function WebinarNews() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { t } = useTranslation();
  return (
    <div className="expertnews">
      <div className="container" ref={ref}>
        {inView ? (
          <>
            <h3>{t("news")}</h3>
            <div className="expertnews-page">
              <div className="expertnews-left">
                <h4>
                  "Vatandoshlar" jamoat fondi rahbariyati Rossiya
                  Federatsiyasiga bo'lgan xizmat safari davomida ...
                </h4>
                <span className="expertnews-span">
                  <img src={WhiteCalendar} alt="Calendar Icon" />
                  <p>12.02.2023</p>
                </span>
                <img src={NewsImage} alt="error" />
              </div>
              <div className="expertnews-right">
                {news.map((news) => (
                  <div className="expertnews-list" key={news.id}>
                    <img src={news.images} alt={news.title} />
                    <div>
                      <h5>{news.title}</h5>
                      <div className="expertnews-title">
                        <span className="expertnews-item">
                          <img src={CalendarIcon} alt="Calendar Icon" />
                          <p>{news.creadData}</p>
                        </span>
                        <span className="expertnews-item">
                          <img src={ViewIcon} alt="Calendar Icon" />
                          <p>{news.views} K</p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <LazySpinner height="250px" />
        )}
      </div>
    </div>
  );
}

export default WebinarNews;
