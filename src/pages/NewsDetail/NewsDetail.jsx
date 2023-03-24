import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import "./NewsDetail.scss";
import { MdArrowRight } from "react-icons/md";
import img from "../../assets/images/photo2.png";
import { LatestNews, PopularTags } from "../../component";
import { getOneNews } from "../../reduxToolkit/newsSlice/extraReducer";

export default function NewsDetail() {
  const [activeData, setactiveData] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.newsSlice.oneData);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getOneNews(id));
  }, [id]);

  useEffect(() => {
    setactiveData(data)
  }, [data])

  return (
    activeData ?
      <div className="newsdetail">
        <Header />
        <div className="container">
          <div className="newsdetail-wrapper">
            <div className="newsdetail-tablet-tags">
              <PopularTags />
            </div>
            <div className="newsdetail-title">
              <h1 className="newsdetail-title-text">{activeData[`title_${lan}`]}</h1>
              <div className="newsdetail-title-url">
                <Link to="/">Asosiy sahifa</Link>
                <MdArrowRight />
                <Link to="/news">Yangiliklar</Link>
                <MdArrowRight />
                <span>batafsil</span>
              </div>
            </div>

            <div className="newsdetail-main">
              <div className="newsdetail-main-desc">
                <div className="newsdetail-main-desc-img">
                  <img src={`https://vatanparvarbackend.napaautomotive.uz/storage/${activeData?.img}`} alt="" />
                </div>
                <div className="newsdetail-main-desc-texts"
                  dangerouslySetInnerHTML={{
                    __html: activeData[`text_${lan}`]
                  }}>
                </div>
              </div>
              <div className="newsdetail-main-news-tags">
                <LatestNews />
                <div className="newsdetail-desktop-tags">
                  <PopularTags />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      : null
  );
}
