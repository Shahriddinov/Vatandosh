import { useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import "./NewsDetail.scss";
import { MdArrowRight } from "react-icons/md";
import { LatestNews, PopularTags, Spinner } from "../../component";
import NotFound from "../404";
import { useNewsDataFetching } from "./hooks/useNewsDetailFetching";
import { BsFillCalendar2EventFill, BsTwitter } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import filled from '../../assets/images/icons/filled-icon.svg';

export default function NewsDetail() {
  const lan = useSelector((state) => state.language.language);
  const { loading, pathErrText, data } = useNewsDataFetching();
  const [galleryMainImg, setgalleryMainImg] = useState(null);

  useEffect(() => {
    if (data?.imgs) setgalleryMainImg(JSON.parse(data?.imgs)[0]);
  }, [data])

  if (loading) {
    return (
      <div className="spinner_box">
        <Spinner />
      </div>
    )
  }

  if (pathErrText) {
    return <NotFound />
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
                <Link to="/information-service/news">Yangiliklar</Link>
                <MdArrowRight />
                <span>batafsil</span>
              </div>
            </div>

            <div className="newsdetail-main">
              <div className="newsdetail-main-desc">
                <div className="newsdetail-main-desc-img">
                  <img src={`https://vatanparvarbackend.napaautomotive.uz/storage/${data?.image}`} alt="" />
                </div>
                <div className="newsdetail-main-desc-action">
                  <div className="newsdetail-main-desc-action-date-viewers">
                    <div className="newsdetail-main-desc-action-date">
                      <BsFillCalendar2EventFill />
                      <span>{data.created_at?.split("T")[0]}</span>
                    </div>
                    <div className="newsdetail-main-desc-action-viewers">
                      <AiFillEye />
                      <span>{data.viewers}</span>
                    </div>
                  </div>
                  <div className="newsdetail-main-desc-action-tags">
                    {
                      data?.tags.split(",").map((el, index) => {
                        return <span key={index}>{el}</span>
                      })
                    }
                  </div>
                </div>
                <div className="newsdetail-main-desc-texts"
                  dangerouslySetInnerHTML={{
                    __html: data[`text_${lan}`]
                  }}>
                </div>
                <div className="newsdetail-main-desc-gallery">
                  <img src={`https://vatanparvarbackend.napaautomotive.uz/storage/${galleryMainImg ? galleryMainImg : JSON.parse(data.imgs)[0]}`} alt="error" className="newsdetail-main-desc-gallery-mainImg" />
                  <ul className="newsdetail-main-desc-gallery-list">
                    {
                      data.imgs ?
                        JSON.parse(data.imgs).map((el, index) => {
                          return <li key={index}>
                            <img src={`https://vatanparvarbackend.napaautomotive.uz/storage/${el}`} alt="error"
                              className="newsdetail-main-desc-gallery-list-item"
                              onClick={() => setgalleryMainImg(el)} />
                          </li>
                        })
                        : null
                    }
                  </ul>
                </div>
                <div className="newsdetail-main-desc-share">
                  <div className="newsdetail-main-desc-share-list">
                    <a href="https://www.google.com" className="newsdetail-main-desc-share-list-item">
                      <img src={filled} alt="" />
                    </a>
                    <a href="https://www.google.com" className="newsdetail-main-desc-share-list-item">
                      <RiFacebookFill />
                    </a>
                    <a href="https://www.google.com" className="newsdetail-main-desc-share-list-item">
                      <BsTwitter />
                    </a>
                    <a href="https://www.google.com" className="newsdetail-main-desc-share-list-item">
                      <FaTelegramPlane />
                    </a >
                    <a href="https://www.google.com" className="newsdetail-main-desc-share-list-item">
                      <RiInstagramFill />
                    </a>
                  </div>
                  <p className="newsdetail-main-desc-share-title">Do'stlaringizga ulashing</p>
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
