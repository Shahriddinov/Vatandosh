import {
  CalendarIcon,
  NewsImage,
  ViewIcon,
  WhiteCalendar,
} from "../../../../../../../assets/images/expert";
import "./News.scss";
import { news } from "../../news";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import LazySpinner from "../../../../../../../component/lazySpinner/LazySpinner";
import InteractiveServices from "../../../../../../../component/interactiveServices/InteractiveServices";
import { InformationServicesSlider } from "../../../../../../InformationServices/InformationServicesSlider/InformationServicesSlider";
import { useInformationServicesPagination } from "../../../../../../InformationServices/hooks/useInformationServicesPagination.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeNews } from "../../../../../../../reduxToolkit/newsSlice/extraReducer";
import { baseServerUrl } from "../../../../../../../services/api/utils";
import { Link } from "react-router-dom";

function News() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const { newsHomeData, loadingNews, error } = useSelector(
    (state) => state.newsSlice
  );
  console.log(newsHomeData);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getHomeNews());
  }, [dispatch]);

  return (
    <div className="expertnews">
      <div className="container" ref={ref}>
        {inView ? (
          <>
            <h3>{t("news")}</h3>
            <div className="expertnews-page">
              {/* <div className="expertnews-left">
                <h4>
                  "Vatandoshlar" jamoat fondi rahbariyati Rossiya
                  Federatsiyasiga bo'lgan xizmat safari davomida ...
                </h4>
                <span className="expertnews-span">
                  <img src={WhiteCalendar} alt="Calendar Icon" />
                  <p>12.02.2023</p>
                </span>
                <img src={NewsImage} alt="error" />
              </div> */}
              <InformationServicesSlider data={newsHomeData} />
              <div className="expertnews-right">
                {newsHomeData?.slice(0, 3).map((news) => (
                  <Link
                    to={`/news/${news.id}`}
                    className="expertnews-list"
                    key={news.id}
                  >
                    <img
                      src={`${baseServerUrl}/${news.image}`}
                      alt={news.title}
                    />
                    <div>
                      <h5>{news[`title_${language}`]}</h5>
                      <div className="expertnews-title">
                        <span className="expertnews-item">
                          <img src={CalendarIcon} alt="Calendar Icon" />
                          <p>{news.data}</p>
                        </span>
                        <span className="expertnews-item">
                          <img src={ViewIcon} alt="Calendar Icon" />
                          <p>{news.viewers}</p>
                        </span>
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
