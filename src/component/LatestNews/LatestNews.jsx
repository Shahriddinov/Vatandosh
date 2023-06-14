import "./LatestNews.scss";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../reduxToolkit/newsSlice/extraReducer";
import { Link, useParams } from "react-router-dom";
import { PORTAL_IMAGE_URL, baseServerUrl } from "../../services/api/utils";
import { portalNews } from "../../reduxToolkit/portalSlices/news-events/extraReducer";

export default function LatestNews() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsSlice.newsData);
  const lan = useSelector((state) => state.language.language);
  const data = useSelector((state) => state.portalAllNewsSlice.news);
  const { id } = useParams();

  useEffect(() => {
    dispatch(portalNews());
  }, [dispatch]);

  console.log(data);

  return (
    <div className="latest_news">
      <h4 className="latest_news-title">So‘ngi yangiliklar</h4>
      <ul className="latest_news-list">
        {data?.slice(0, 5)?.map((el) => (
          <li key={el.id} className="latest_news-list-item">
            <Link to={`/news/${el.id}`} className="latest_news-list-item-link">
              <div className="latest_news-list-item-img">
                <img src={`${PORTAL_IMAGE_URL}/${el.image}`} alt="" />
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
        ))}
      </ul>
    </div>
  );
}
