import "./LatestNews.scss";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../reduxToolkit/newsSlice/extraReducer";
import { Link, useParams } from "react-router-dom";
import { PORTAL_IMAGE_URL, baseServerUrl } from "../../services/api/utils";
import { getPortalNews } from "../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import Spinner from "../Spinner/Spinner";
import { useTranslation } from "react-i18next";

export default function PortalLatestNews({ category, latestNews }) {
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);
  const newsData = useSelector((store) => store.portalNews.news);
  const newsLoading = useSelector((store) => store.portalNews.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getPortalNews({ type: category ? category : null, per_page: 3, page: 1 })
    );
  }, [lan, dispatch, category]);

  if (newsLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="latest_news">
      <h4 className="latest_news-title">{t("lates")}</h4>
      <ul className="latest_news-list">
        {(category?.length === 0 ? latestNews : newsData.data.slice(0, 5)).map(
          (el) => {
            return (
              <li key={el.id} className="latest_news-list-item">
                <Link
                  to={`/portal-category/${category}/${el.id}`}
                  className="latest_news-list-item-link">
                  <div className="latest_news-list-item-img">
                    <img src={`${PORTAL_IMAGE_URL}/${el.image}`} alt="" />
                  </div>
                  <div className="latest_news-list-item-desc">
                    <p className="latest_news-list-item-desc-text">
                      {el.title}
                    </p>
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
          }
        )}
      </ul>
    </div>
  );
}
