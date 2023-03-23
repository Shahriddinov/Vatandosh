import "./LatestNews.scss";
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../reduxToolkit/newsSlice/extraReducer";

export default function LatestNews() {

  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsSlice.newsData.data);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className="latest-news">
      <h4 className="latest-news-title">So‘ngi yangiliklar</h4>
      <ul className="latest-news-list">
        {
          newsData?.slice(0, 5).map((el) => {
            return <li key={el.id} className="latest-news-list-item">
              <div className="latest-news-list-item-img">
                <img src={`https://vatanparvarbackend.napaautomotive.uz/storage/${el.img}`} alt="" />
              </div>
              <div className="latest-news-list-item-desc">
                <p className="latest-news-list-item-desc-text">{el[`title_${lan}`]}</p>
                <div className="latest-news-list-item-desc-action">
                  <div className="latest-news-list-item-desc-action-item">
                    <BsFillCalendar2EventFill />
                    <span>{el.created_at?.split("T")[0]}</span>
                  </div>
                  <div className="latest-news-list-item-desc-action-item">
                    <AiFillEye />
                    <span>{el.viewers}</span>
                  </div>
                </div>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}
