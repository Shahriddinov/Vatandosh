import React from "react";

import "./newsDetail.scss";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import PopularTags from "../PopularTags/PopularTags";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ShareFriends from "../ShareFriends/ShareFriends";
import PortalLatestNews from "../PortalLatestNews/PortalLatestNews";
import { PORTAL_IMAGE_URL } from "../../services/api/utils";

const SiteNewsDetail = ({ latestNews, detailData }) => {
  return (
    <div className="news-detail">
      <div className="container">
        <div className="news-detail-wrapper">
          <div className="news-detail-tablet-tags">
            <PopularTags />
          </div>
          <div className="news-detail-title">
            <h1 className="news-detail-title-text">{detailData?.title}</h1>
            <div className="news-detail-title-url">
              <Link to="/">Home</Link>
              <MdArrowRight />
              <span>Batafsil</span>
            </div>
          </div>

          <div className="news-detail-main">
            <div className="news-detail-main-desc">
              <div className="news-detail-main-desc-img">
                <img src={`${PORTAL_IMAGE_URL}/${detailData?.image}`} alt="" />
              </div>
              <div className="news-detail-main-desc-action">
                <div className="news-detail-main-desc-action-date-viewers">
                  <div className="news-detail-main-desc-action-date">
                    <BsFillCalendar2EventFill />
                    <span>{detailData?.created_at.split("T")[0]}</span>
                  </div>
                  <div className="news-detail-main-desc-action-viewers">
                    <AiFillEye />
                    <span>{detailData?.view}</span>
                  </div>
                </div>
                {/* <div className="news-detail-main-desc-action-tags">
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
        </div> */}
              </div>
              <div
                className="news-detail-main-desc-texts"
                dangerouslySetInnerHTML={{
                  __html: detailData.body,
                }}
              ></div>
              {/* {data?.images
        ? JSON.parse(data?.images).length >= 1 && (
            <div className="news-detail-main-desc-gallery">
              <img
                src={`${baseServerUrl}/${
                  galleryMainImg
                    ? galleryMainImg
                    : JSON.parse(data?.images)[0]
                }`}
                alt="error"
                className="news-detail-main-desc-gallery-mainImg"
              />
              <div className="news-detail-main-desc-gallery-list-wrapper">
                <ul className="news-detail-main-desc-gallery-list">
                  {JSON.parse(data?.images).map((el, index) => {
                    return (
                      <li key={index}>
                        <img
                          src={`${baseServerUrl}/${el}`}
                          alt="error"
                          className="news-detail-main-desc-gallery-list-item"
                          onClick={() => setgalleryMainImg(el)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )
        : null} */}
              <div className="news-detail-main-desc-share">
                <ShareFriends />
              </div>
            </div>
            <div className="news-detail-main-news-tags">
              <div className="news-detail-main-news">
                <PortalLatestNews category="" latestNews={latestNews} />
              </div>
              <div className="news-detail-desktop-tags">
                <PopularTags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteNewsDetail;
