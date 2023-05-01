import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import "./Detail.scss";
import { MdArrowRight } from "react-icons/md";
import { LatestNews, PopularTags } from "../../component";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import ShareFriends from "../ShareFriends/ShareFriends";
import { baseServerUrl } from "../../services/api/utils";

export default function Detail(data) {
  const lan = useSelector((state) => state.language.language);
  const [galleryMainImg, setgalleryMainImg] = useState(null);

  useEffect(() => {
    if (data?.images) setgalleryMainImg(JSON.parse(data?.images)[0]);
  }, [data]);

  return data ? (
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
              <Link to="/information-service/news">Yangiliklar</Link>
              <MdArrowRight />
              <span>batafsil</span>
            </div>
          </div>

          <div className="newsdetail-main">
            <div className="newsdetail-main-desc">
              <div className="newsdetail-main-desc-img">
                <img src={`${baseServerUrl}/${data?.image}`} alt="" />
              </div>
              <div className="newsdetail-main-desc-action">
                <div className="newsdetail-main-desc-action-date-viewers">
                  <div className="newsdetail-main-desc-action-date">
                    <BsFillCalendar2EventFill />
                    <span>{data.data}</span>
                  </div>
                  <div className="newsdetail-main-desc-action-viewers">
                    <AiFillEye />
                    <span>{data.viewers}</span>
                  </div>
                </div>
                <div className="newsdetail-main-desc-action-tags">
                  {data?.[`tag_${lan}`]?.split(",").map((el, index) => {
                    return (
                      <Link
                        to={`/hashtag/${el.trim()}`}
                        key={index}
                        className="populartags-tag"
                      >
                        {el}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div
                className="newsdetail-main-desc-texts"
                dangerouslySetInnerHTML={{
                  __html: data[`text_${lan}`],
                }}
              ></div>
              {data?.images
                ? JSON.parse(data?.images).length >= 1 && (
                    <div className="newsdetail-main-desc-gallery">
                      <img
                        src={`${baseServerUrl}/${
                          galleryMainImg
                            ? galleryMainImg
                            : JSON.parse(data?.images)[0]
                        }`}
                        alt="error"
                        className="newsdetail-main-desc-gallery-mainImg"
                      />
                      <div className="newsdetail-main-desc-gallery-list-wrapper">
                        <ul className="newsdetail-main-desc-gallery-list">
                          {JSON.parse(data?.images).map((el, index) => {
                            return (
                              <li key={index}>
                                <img
                                  src={`${baseServerUrl}/${el}`}
                                  alt="error"
                                  className="newsdetail-main-desc-gallery-list-item"
                                  onClick={() => setgalleryMainImg(el)}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )
                : null}
              <div className="newsdetail-main-desc-share">
                <ShareFriends />
              </div>
            </div>
            <div className="newsdetail-main-news-tags">
              <div className="newsdetail-main-news">
                <LatestNews />
              </div>
              <div className="newsdetail-desktop-tags">
                <PopularTags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
