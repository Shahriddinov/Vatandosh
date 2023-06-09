import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../component/Layout/Header/Header";
import {
  getImagesMenus,
  getVideosMenus,
  getVideosPagination,
  getImagesPagination,
  getMediaPagination,
} from "../../reduxToolkit/mediatekaSlice/extraReducer";
import Spinner from "../../component/Spinner/Spinner";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import "./mediateka.scss";
import VideoModal from "./components/videoModal/VideoModal";
import ImageModal from "./components/imageModal/ImageModal";
import VideoList from "./components/videoList/VideoList";
import ImagesList from "./components/imageList/ImagesList";
import { mediaPagination, showMediaModal, slideMove } from "./extraFunc";
import { useMediaFetching } from "./hooks/useMediaFetching";
import { useTranslation } from "react-i18next";
import { Pagination } from "../../component";

const Mediateka = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState("videos");
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [activeImage, setActiveImage] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [activePage, setActivePage] = useState(2);

  const {
    mediaData,
    videoMenusData,
    dataLoading,
    imageMenusData,
    videoMenuLoading,
    imageMenuLoading,
    lan,
  } = useMediaFetching();

  const paginationCount = mediaPagination(activeCard, mediaData);
  const typeUrl = activeCard === "videos" ? "videos" : "images";

  if (showModal || showImageModal) {
    document.querySelector("body").style.height = "100vh";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.height = "initial";
    document.querySelector("body").style.overflow = "auto";
  }

  const handleChange = (event) => {
    setCategoryId(event.target.value);
    setActivePage(1);
    dispatch(
      getMediaPagination({
        typeUrl: activeCard,
        page: 1,
        categoryId: event.target.value,
      })
    );
  };

  if (dataLoading || videoMenuLoading || imageMenuLoading) {
    return <Spinner position="full" />;
  }

  const handleClick = (videoId) => {
    setActiveVideo(videoId);
    setShowModal(true);
    showMediaModal({ mediaData, videoId });
  };

  const moveSlide = (value) => {
    slideMove({
      mediaData,
      activeVideo,
      setActiveVideo,
      setActiveImage,
      activeImage,
      value,
    });
  };

  const handleImageModal = (imgUrl) => {
    setShowImageModal(true);
    setActiveImage(imgUrl);
    showMediaModal({ mediaData, imgUrl });
  };

  const fetchingData = (page) => {
    setActivePage(page);
    dispatch(getMediaPagination({ typeUrl, page, categoryId }));
  };

  const handleFetchClick = (val) => {
    setActiveCard(val);
    setCategoryId(0);
    setActivePage(1);
    dispatch(getMediaPagination({ typeUrl: val, page: 1, categoryId: 0 }));
  };

  return (
    <div className="mediateka">
      <Header />
      <div className="container">
        <div className="mediateka__top">
          <h2>{t("mediateka")}</h2>
          <ul>
            <li>
              <Link to="/">{t("mainPage")}</Link>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.23309 4.92481C6.61654 5.21241 6.61654 5.78759 6.23309 6.07519L4.15037 7.63722C3.67639 7.99271 3 7.65451 3 7.06203L3 3.93797C3 3.34549 3.67639 3.00729 4.15037 3.36278L6.23309 4.92481Z"
                  fill="#5D6B8A"
                />
              </svg>
            </li>
            <li>{t("mediateka")}</li>
          </ul>
        </div>
        <div className="mediateka__header">
          <div className="mediateka__btns">
            <div className="mediateka__video-btn">
              <button
                onClick={() => handleFetchClick("videos")}
                className={activeCard === "videos" ? "active-btn" : ""}
              >
                {t("mediaVideo")}
              </button>
            </div>
            <div className="mediateka__image-btn">
              <button
                onClick={() => handleFetchClick("images")}
                className={activeCard === "images" ? "active-btn" : ""}
              >
                {t("mediaImg")}
              </button>
            </div>
          </div>
          <div className="mediateka__category-select">
            <FormControl sx={{ minWidth: "100%" }}>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={categoryId}
                onChange={handleChange}
              >
                <MenuItem value={0}>{t("all")}</MenuItem>
                {activeCard === "videos"
                  ? videoMenusData.map((videoMenu) => (
                      <MenuItem value={videoMenu.id} key={videoMenu.id}>
                        {videoMenu[`menu_${lan}`]}
                      </MenuItem>
                    ))
                  : imageMenusData.map((imageMenu) => (
                      <MenuItem value={imageMenu.id} key={imageMenu.id}>
                        {imageMenu[`menu_${lan}`]}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="mediateka__body">
          <VideoModal
            showModal={showModal}
            setShowModal={setShowModal}
            moveSlide={moveSlide}
            activeVideo={activeVideo}
          />
          <ImageModal
            activeImage={activeImage}
            setShowImageModal={setShowImageModal}
            showImageModal={showImageModal}
            moveSlide={moveSlide}
          />
          <VideoList
            activeCard={activeCard}
            categoryId={categoryId}
            data={mediaData[0].data}
            handleClick={handleClick}
            lan={lan}
          />
          <ImagesList
            activeCard={activeCard}
            categoryId={categoryId}
            handleImageModal={handleImageModal}
            dataImage={mediaData[0].data}
          />
        </div>
        {paginationCount >= 2 ? (
          <Pagination
            count={paginationCount}
            page={activePage}
            paginationFetching={fetchingData}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Mediateka;
