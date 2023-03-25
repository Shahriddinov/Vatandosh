import {useSelector } from "react-redux";
import { Link,} from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import "./NewsDetail.scss";
import { MdArrowRight } from "react-icons/md";
import { LatestNews, PopularTags, Spinner } from "../../component";
import NotFound from "../404";
import { useNewsDataFetching } from "./hooks/useNewsDetailFetching";

export default function NewsDetail() {
  const lan = useSelector((state) => state.language.language);
  const {loading,pathErrText,data} = useNewsDataFetching()

  if(loading) {
    return (
      <div className="spinner_box">
        <Spinner/>
      </div>
    )
  }

  if(pathErrText) {
    return <NotFound/>
  }

  return (
    data ?
      <div className="newsdetail">
        <Header />
        <div className="container">
          <div className="newsdetail-wrapper">
            <div className="newsdetail-tablet-tags">
              <PopularTags />
            </div>
            <div className="newsdetail-title">
              <h1 className="newsdetail-title-text">{data[`title_${lan}`]}</h1>
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
                  <img src={`https://vatanparvarbackend.napaautomotive.uz/storage/${data?.img}`} alt="" />
                </div>
                <div className="newsdetail-main-desc-texts"
                  dangerouslySetInnerHTML={{
                    __html: data[`text_${lan}`]
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
