import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import { MdArrowRight } from "react-icons/md";
import { LatestNews, PopularTags } from "../../component";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import ShareFriends from "../ShareFriends/ShareFriends";
import { PORTAL_IMAGE_URL, baseServerUrl } from "../../services/api/utils";
import "./DetailEvent.scss";

export default function DetailEvent(siteNews) {
  const lan = useSelector((state) => state.language.language);
  const [galleryMainImg, setgalleryMainImg] = useState(null);

  useEffect(() => {
    if (siteNews?.images) setgalleryMainImg(JSON.parse(siteNews?.images)[0]);
  }, [siteNews]);

  return siteNews ? (
    <div className="newsdetail">
      <Header />
      <div className="container">
        <div className="newsdetail-wrapper">
          <div className="newsdetail-tablet-tags">
            <PopularTags />
          </div>
          <div className="newsdetail-title">
            <h1 className="newsdetail-title-text">
              {siteNews[`title_${lan}`]}
            </h1>
            <div className="newsdetail-title-url">
              <Link to="/">{t("mainPage")}</Link>
              <MdArrowRight />
              <Link to="/information-service/news">{t("news")}</Link>
              <MdArrowRight />
              <span>{t("more")}</span>
            </div>
          </div>

          <div className="newsdetail-main">
            <div className="newsdetail-main-desc">
              <div className="newsdetail-main-desc-img">
                <img src={`${PORTAL_IMAGE_URL}/${siteNews?.image}`} alt="" />
              </div>
              <div className="newsdetail-main-desc-action">
                <div className="newsdetail-main-desc-action-date-viewers">
                  <div className="newsdetail-main-desc-action-date">
                    <BsFillCalendar2EventFill />
                    <span>{siteNews?.created_at?.slice(0, 10)}</span>
                  </div>
                  <div className="newsdetail-main-desc-action-viewers">
                    <AiFillEye />
                    <span>{siteNews.view}</span>
                  </div>
                </div>
                <div className="newsdetail-main-desc-action-tags">
                  {siteNews?.[`tag_${lan}`]?.split(",").map((el, index) => {
                    return (
                      <Link
                        to={`/hashtag/${el.trim()}`}
                        key={index}
                        className="populartags-tag">
                        {el}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="newsdetail-main-desc-texts">
                {siteNews?.title}
              </div>
              <div
                className="newsdetail-main-desc-texts"
                dangerouslySetInnerHTML={{
                  __html: siteNews.body,
                }}></div>
              <div className="newsdetail-main-desc-texts">
                {siteNews.excerpt}
              </div>
              {siteNews?.images
                ? JSON.parse(siteNews?.images).length >= 1 && (
                    <div className="newsdetail-main-desc-gallery">
                      <img
                        src={`${baseServerUrl}/${
                          galleryMainImg
                            ? galleryMainImg
                            : JSON.parse(siteNews?.images)[0]
                        }`}
                        alt="error"
                        className="newsdetail-main-desc-gallery-mainImg"
                      />
                      <div className="newsdetail-main-desc-gallery-list-wrapper">
                        <ul className="newsdetail-main-desc-gallery-list">
                          {JSON.parse(siteNews?.images).map((el, index) => {
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
