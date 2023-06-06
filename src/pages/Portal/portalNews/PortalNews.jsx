import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext, useParams } from "react-router-dom";
import Header from "../../../component/Layout/Header/Header";
import "./portalNews.scss";
import { MdArrowRight } from "react-icons/md";
import { LatestNews, PopularTags, Spinner } from "../../../component";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import ShareFriends from "../../../component/ShareFriends/ShareFriends";
import { baseServerUrl } from "../../../services/api/utils";
import {
  getPortalNews,
  getPortalOneNews,
} from "../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { PORTAL_IMAGE_URL } from "../../../services/api/utils";
import PortalLatestNews from "../../../component/PortalLatestNews/PortalLatestNews";
import { ExpertHeader } from "../expert/components";
import { useTranslation } from "react-i18next";

export default function PortalNews() {
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);
  const [galleryMainImg, setgalleryMainImg] = useState(null);

  const { newsId } = useParams();
  // const newsData = useSelector((store) => store.portalNews.news);
  // const newsLoading = useSelector((store) => store.portalNews.loading);
  const oneNewsDetail = useSelector((store) => store.portalNews.oneNews);
  const oneNewsLoading = useSelector(
    (store) => store.portalNews.oneNewsLoading
  );

  const dispatch = useDispatch();
  const { navData, category } = useOutletContext();

  useEffect(() => {
    dispatch(getPortalNews({ type: category, per_page: 3, page: 1 }));
    dispatch(getPortalOneNews(newsId));
  }, [newsId]);

  if (oneNewsLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="portal-newsdetail">
      <div className="container">
        <div className="portal-newsdetail-wrapper">
          <div className="portal-newsdetail-tablet-tags">
            <PopularTags />
          </div>
          <div className="portal-newsdetail-title">
            <h1 className="portal-newsdetail-title-text">
              {oneNewsDetail?.title}
            </h1>
            <div className="portal-newsdetail-title-url">
              <Link to={navData[0].url}>{navData[0].label}</Link>
              <MdArrowRight />
              <span>Batafsil</span>
            </div>
          </div>

          <div className="portal-newsdetail-main">
            <div className="portal-newsdetail-main-desc">
              <div className="portal-newsdetail-main-desc-img">
                <img
                  src={`${PORTAL_IMAGE_URL}/${oneNewsDetail?.image}`}
                  alt=""
                />
              </div>
              <div className="portal-newsdetail-main-desc-action">
                <div className="portal-newsdetail-main-desc-action-date-viewers">
                  <div className="portal-newsdetail-main-desc-action-date">
                    <BsFillCalendar2EventFill />
                    <span>{oneNewsDetail?.created_at.split("T")[0]}</span>
                  </div>
                  <div className="portal-newsdetail-main-desc-action-viewers">
                    <AiFillEye />
                    <span>{oneNewsDetail?.view}</span>
                  </div>
                </div>
                {/* <div className="portal-newsdetail-main-desc-action-tags">
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
                className="portal-newsdetail-main-desc-texts"
                dangerouslySetInnerHTML={{
                  __html: oneNewsDetail.body,
                }}></div>
              {/* {data?.images
            ? JSON.parse(data?.images).length >= 1 && (
                <div className="portal-newsdetail-main-desc-gallery">
                  <img
                    src={`${baseServerUrl}/${
                      galleryMainImg
                        ? galleryMainImg
                        : JSON.parse(data?.images)[0]
                    }`}
                    alt="error"
                    className="portal-newsdetail-main-desc-gallery-mainImg"
                  />
                  <div className="portal-newsdetail-main-desc-gallery-list-wrapper">
                    <ul className="portal-newsdetail-main-desc-gallery-list">
                      {JSON.parse(data?.images).map((el, index) => {
                        return (
                          <li key={index}>
                            <img
                              src={`${baseServerUrl}/${el}`}
                              alt="error"
                              className="portal-newsdetail-main-desc-gallery-list-item"
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
              <div className="portal-newsdetail-main-desc-share">
                <ShareFriends />
              </div>
            </div>
            <div className="portal-newsdetail-main-news-tags">
              <div className="portal-newsdetail-main-news">
                <PortalLatestNews category={category} />
              </div>
              <div className="portal-newsdetail-desktop-tags">
                <PopularTags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
