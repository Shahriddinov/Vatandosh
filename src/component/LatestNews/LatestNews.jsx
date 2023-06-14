import "./LatestNews.scss";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../services/api/utils";

export default function LatestNews() {
  const newsData = useSelector((state) => state.portalAllNewsSlice.news);

  return (
    <div className="latest_news">
      <h4 className="latest_news-title">So‘ngi yangiliklar</h4>
      <ul className="latest_news-list">
        {newsData?.data?.slice(0, 4)?.map((el) => (
          <li key={el.id} className="latest_news-list-item">
            <Link
              to={`/detail/all-news/new/${el.id}`}
              className="latest_news-list-item-link"
            >
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
