import {
  CalendarIcon,
  ViewIcon,
} from "../../../../../../../assets/images/expert";
import "./NewsExpert.scss";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import LazySpinner from "../../../../../../../component/lazySpinner/LazySpinner";
import { InformationServicesSlider } from "../../../../../../InformationServices/InformationServicesSlider/InformationServicesSlider";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { Link } from "react-router-dom";
import { getDate } from "../../../../../../../config/constants";

function News({ communityNews, url }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  return (
    <div className="expertnews">
      <div className="container expertnews-container" ref={ref}>
        {inView ? (
          <>
            <h3>{t("news")}</h3>
            <div className="expertnews-page">
              <InformationServicesSlider data={communityNews} />
              <div className="expertnews-right">
                {communityNews?.map((news) => (
                  <Link
                    to={`${url}/${news.id}`}
                    className="expertnews-list"
                    key={news.id}
                  >
                    <img
                      src={`${PORTAL_IMAGE_URL}/${news.image}`}
                      alt={news.title}
                      className="expertnews-img"
                    />
                    <div className="expertnews-content">
                      <h5>{news.title}</h5>
                      <div className="expertnews-title">
                        <div className="expertnews-item">
                          <img src={CalendarIcon} alt="Calendar Icon" />
                          <p>
                            <span>
                              {getDate(news.created_at).getDay().length > 2
                                ? getDate(news.created_at).getDay()
                                : `0${getDate(news.created_at).getDay()}`}
                            </span>
                            .
                            <span>
                              {getDate(news.created_at).getMonth().length > 2
                                ? getDate(news.created_at).getMonth()
                                : `0${getDate(news.created_at).getMonth()}`}
                            </span>
                            .
                            <span>
                              {getDate(news.created_at).getFullYear()}
                            </span>
                          </p>
                        </div>
                        <div className="expertnews-item">
                          <img src={ViewIcon} alt="Calendar Icon" />
                          <p>
                            {news.view
                              ? news.view.toString().length >= 4
                                ? news.view % 1000 > 1
                                  ? (news.view / 1000).toFixed(1) + "K"
                                  : (news.view / 1000).toFixed()
                                : news.view
                              : 0}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
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
export default News;
