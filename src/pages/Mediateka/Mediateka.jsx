import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../component/Layout/Header/Header";
import {
  getImages,
  getImagesMenus,
  getVideos,
  getVideosMenus,
} from "../../reduxToolkit/mediatekaSlice/extraReducer";
import Spinner from "../../component/Spinner/Spinner";
import { baseServerUrl } from "../../services/api/utils";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import "./mediateka.scss";
import { Paginator } from "../../component/Pagination/Pagination";

const Mediateka = () => {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [categoryId, setCategoryId] = useState(0);

  const leftRef = useRef();
  const rightRef = useRef();

  const lan = useSelector((state) => state.language.language);
  const videoData = useSelector((state) => state.mediatekaSlice.videoData);
  const imageData = useSelector((state) => state.mediatekaSlice.imageData);
  const videoMenusData = useSelector(
    (state) => state.mediatekaSlice.videoMenusData
  );
  const imageMenusData = useSelector(
    (state) => state.mediatekaSlice.imageMenusData
  );
  const loading = useSelector((state) => state.mediatekaSlice.loading);

  if (showModal || showImageModal) {
    document.querySelector("body").style.height = "100vh";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.height = "initial";
    document.querySelector("body").style.overflow = "auto";
  }

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };

  useEffect(() => {
    dispatch(getVideos());
    dispatch(getVideosMenus());
    dispatch(getImages());
    dispatch(getImagesMenus());
  }, []);

  if (loading) {
    <Spinner />;
  }

  const handleClick = (videoId) => {
    setActiveVideo(videoId);
    setShowModal(true);

    const indexVideo = videoData.findIndex((el) => el.video_url === videoId);

    if (indexVideo === 0) {
      leftRef.current.style.opacity = 0.5;
      leftRef.current.style.pointerEvents = "none";
    } else {
      leftRef.current.style.opacity = 1;
      leftRef.current.style.pointerEvents = "initial";
    }

    if (indexVideo === videoData.length - 1) {
      rightRef.current.style.opacity = 0.5;
      rightRef.current.style.pointerEvents = "none";
    } else {
      rightRef.current.style.opacity = 1;
      rightRef.current.style.pointerEvents = "initial";
    }
  };

  const moveSlide = (value) => {
    let indexVideo = videoData.findIndex((el) => el.video_url === activeVideo);

    if (value === "left") {
      setActiveVideo(videoData[indexVideo - 1].video_url);
      indexVideo -= 1;
    } else {
      setActiveVideo(videoData[indexVideo + 1].video_url);
      indexVideo += 1;
    }

    if (indexVideo === 0) {
      leftRef.current.style.opacity = 0.5;
      leftRef.current.style.pointerEvents = "none";
    } else {
      leftRef.current.style.opacity = 1;
      leftRef.current.style.pointerEvents = "initial";
    }

    if (indexVideo === videoData.length - 1) {
      rightRef.current.style.opacity = 0.5;
      rightRef.current.style.pointerEvents = "none";
    } else {
      rightRef.current.style.opacity = 1;
      rightRef.current.style.pointerEvents = "initial";
    }
  };

  const handleImageModal = (imgUrl) => {
    setShowImageModal(true);
    setActiveImage(imgUrl);
  };

  return (
    <div className="mediateka">
      <Header />
      <div className="container">
        <div className="mediateka__top">
          <h2>Mediateka</h2>
          <ul>
            <li>
              <Link to="/">Asosiy sahifa</Link>
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
            <li>Mediateka</li>
          </ul>
        </div>
        <div className="mediateka__header">
          <div className="mediateka__btns">
            <div className="mediateka__video-btn">
              <button
                onClick={() => {
                  setActiveCard(true);
                  setCategoryId(0);
                }}
                className={activeCard ? "active-btn" : ""}
              >
                Video lavhalar
              </button>
            </div>
            <div className="mediateka__image-btn">
              <button
                onClick={() => {
                  setActiveCard(false);
                  setCategoryId(0);
                }}
                className={!activeCard ? "active-btn" : ""}
              >
                Foto sur'atlar
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
                <MenuItem value={0}>Barchasi</MenuItem>
                {activeCard
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
          <div
            className={`mediateka__video-modal ${
              showModal ? "show-modal" : ""
            }`}
          >
            <div
              ref={leftRef}
              className="mediateka__left-arrow"
              onClick={() => moveSlide("left")}
            >
              <FiChevronLeft />
            </div>
            <div
              className="mediateka__close-btn"
              onClick={() => setShowModal(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.614786 0.0437346C0.352286 0.14061 0.139786 0.353109 0.0429107 0.615609C0.0210357 0.681234 0.00228573 0.831235 0.00228573 0.95311C-0.000839272 1.38123 -0.203964 1.15311 3.39916 4.75623L6.63979 7.99998L3.38666 11.2562C-0.282089 14.9312 -0.0195893 14.6344 0.00541073 15.1094C0.0210357 15.3937 0.0897857 15.5562 0.264786 15.7344C0.442911 15.9094 0.605411 15.9781 0.889786 15.9937C1.36479 16.0187 1.06791 16.2812 4.74291 12.6125L7.99916 9.35936L11.2585 12.6125C14.9304 16.2812 14.6335 16.0187 15.1085 15.9937C15.3929 15.9781 15.5554 15.9094 15.7335 15.7344C15.9085 15.5562 15.9773 15.3937 15.9929 15.1094C16.0179 14.6344 16.2804 14.9312 12.6117 11.2562L9.35854 7.99998L12.6117 4.74061C16.2804 1.06873 16.0179 1.36561 15.9929 0.89061C15.9773 0.606235 15.9085 0.443734 15.7335 0.26561C15.5554 0.0906096 15.3929 0.0218592 15.1085 0.00623512C14.6335 -0.0187664 14.9304 -0.281265 11.2554 3.38748L7.99916 6.64061L4.75541 3.39998C1.15229 -0.20314 1.38041 -1.52588e-05 0.952286 0.00310898C0.833536 0.00310898 0.680411 0.0218592 0.614786 0.0437346Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="mediateka__video-modal-container">
              <iframe
                className="active-video"
                src={`https://www.youtube.com/embed/${activeVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              ref={rightRef}
              className="mediateka__right-arrow"
              onClick={() => moveSlide("right")}
            >
              <FiChevronRight />
            </div>
          </div>
          <div
            className={`mediateka__image-modal ${
              showImageModal ? "show-modal" : ""
            }`}
          >
            <div className="mediateka__download" onClick={() => {}}>
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.71656 0.838478C4.47311 0.913385 4.25775 1.08193 4.12666 1.29729L4.00026 1.51733L3.98621 6.65316L3.97685 11.7937H2.38507C1.05078 11.7937 0.760513 11.8077 0.61538 11.8686C0.0723009 12.0933 -0.157103 12.73 0.114436 13.2731C0.203389 13.451 1.05078 14.3218 3.79894 17.0653C5.76526 19.0269 7.446 20.6702 7.53495 20.717C7.75499 20.8341 8.25125 20.8341 8.47129 20.717C8.56025 20.6702 10.2503 19.0176 12.226 17.0419C15.0023 14.2703 15.8403 13.4089 15.9105 13.245C16.0931 12.8424 16.0042 12.3508 15.6999 12.0652C15.419 11.803 15.3581 11.7937 13.6212 11.7937H12.0294L12.02 6.65316L12.006 1.51733L11.8749 1.29729C11.7906 1.15215 11.6689 1.03043 11.5238 0.946157L11.3037 0.815069L8.07335 0.805706C6.29898 0.801025 4.78679 0.815069 4.71656 0.838478Z"
                  fill="#062A49"
                />
              </svg>
            </div>
            <div className="mediateka__share" onClick={() => {}}>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3867 0.902588C12.1406 1.2229 11.1719 2.19556 10.8516 3.45337C10.7617 3.79712 10.7539 3.89087 10.7695 4.41821C10.7852 5.01196 10.8516 5.33618 11.043 5.76587L11.1016 5.90259L9.28906 7.02759L7.47266 8.15259L7.29688 7.95728C6.88281 7.50024 6.13281 7.04712 5.42578 6.83228C5.09375 6.73071 5.02734 6.72681 4.3125 6.72681C3.59375 6.72681 3.53125 6.73071 3.19922 6.83228C1.77344 7.26978 0.769531 8.27368 0.339844 9.69165C0.238281 10.0237 0.234375 10.0901 0.234375 10.8049C0.234375 11.5198 0.242188 11.5862 0.339844 11.9182C0.765625 13.3284 1.78125 14.344 3.19922 14.7776C3.53125 14.8752 3.59375 14.8831 4.3125 14.8831C5.03125 14.8831 5.09375 14.8752 5.42578 14.7776C6.12891 14.5627 6.69141 14.2346 7.19141 13.7502L7.48828 13.4651L9.29297 14.5862L11.1016 15.7073L11.043 15.844C10.8516 16.2737 10.7852 16.5979 10.7695 17.1917C10.7539 17.719 10.7617 17.8127 10.8516 18.1565C11.1758 19.4221 12.1445 20.3909 13.4023 20.7112C13.9297 20.844 14.6172 20.844 15.1445 20.7112C16.3984 20.3909 17.375 19.4143 17.6953 18.1604C17.8281 17.6331 17.8281 16.9456 17.6953 16.4182C17.375 15.1604 16.4023 14.1877 15.1445 13.8674C14.6172 13.7346 13.9297 13.7346 13.4023 13.8674C12.9375 13.9846 12.4492 14.2268 12.0977 14.5042C11.9531 14.6174 11.8242 14.7073 11.8086 14.7034C11.7969 14.6956 10.9648 14.1838 9.96094 13.5588C8.39453 12.5901 8.13672 12.4182 8.15234 12.3479C8.16016 12.3049 8.21875 12.1096 8.28125 11.9182C8.38672 11.5823 8.39062 11.5315 8.39062 10.8049C8.39062 10.0784 8.38672 10.0276 8.28125 9.69165C8.21875 9.49634 8.16016 9.30493 8.15234 9.26196C8.13672 9.19165 8.39453 9.01978 9.96094 8.05103C10.9648 7.42603 11.7969 6.91431 11.8086 6.90649C11.8242 6.90259 11.9531 6.99243 12.0977 7.10571C12.4492 7.38306 12.9375 7.62524 13.4023 7.74243C13.9297 7.87524 14.6172 7.87524 15.1445 7.74243C16.3984 7.42212 17.375 6.44556 17.6953 5.19165C17.8281 4.66431 17.8281 3.97681 17.6953 3.44946C17.375 2.19165 16.4023 1.21899 15.1445 0.898682C14.6211 0.765869 13.9062 0.769775 13.3867 0.902588Z"
                  fill="#062A49"
                />
              </svg>
            </div>
            <div
              className="mediateka__image-close"
              onClick={() => setShowImageModal(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.614786 0.0437346C0.352286 0.14061 0.139786 0.353109 0.0429107 0.615609C0.0210357 0.681234 0.00228573 0.831235 0.00228573 0.95311C-0.000839272 1.38123 -0.203964 1.15311 3.39916 4.75623L6.63979 7.99998L3.38666 11.2562C-0.282089 14.9312 -0.0195893 14.6344 0.00541073 15.1094C0.0210357 15.3937 0.0897857 15.5562 0.264786 15.7344C0.442911 15.9094 0.605411 15.9781 0.889786 15.9937C1.36479 16.0187 1.06791 16.2812 4.74291 12.6125L7.99916 9.35936L11.2585 12.6125C14.9304 16.2812 14.6335 16.0187 15.1085 15.9937C15.3929 15.9781 15.5554 15.9094 15.7335 15.7344C15.9085 15.5562 15.9773 15.3937 15.9929 15.1094C16.0179 14.6344 16.2804 14.9312 12.6117 11.2562L9.35854 7.99998L12.6117 4.74061C16.2804 1.06873 16.0179 1.36561 15.9929 0.89061C15.9773 0.606235 15.9085 0.443734 15.7335 0.26561C15.5554 0.0906096 15.3929 0.0218592 15.1085 0.00623512C14.6335 -0.0187664 14.9304 -0.281265 11.2554 3.38748L7.99916 6.64061L4.75541 3.39998C1.15229 -0.20314 1.38041 -1.52588e-05 0.952286 0.00310898C0.833536 0.00310898 0.680411 0.0218592 0.614786 0.0437346Z"
                  fill="#062A49"
                />
              </svg>
            </div>
            <div className="mediateka__image-modal-container">
              <img src={`${baseServerUrl}/${activeImage}`} alt="mediatake" />
            </div>
          </div>
          <div
            className={`mediateka__videos ${activeCard ? "active-card" : ""}`}
          >
            {videoData.map((video) => {
              return categoryId === 0 ? (
                <div key={video.id} className="mediateka__video-card">
                  <div className="mediateka__video-container">
                    <div
                      onClick={() => handleClick(video.video_url)}
                      className="mediateka__play-video"
                    ></div>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.video_url}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mediateka__video-name">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: video[`title_${lan}`],
                      }}
                    />
                  </div>
                </div>
              ) : categoryId === parseInt(video.menu_uz) ? (
                <div key={video.id} className="mediateka__video-card">
                  <div className="mediateka__video-container">
                    <div
                      onClick={() => handleClick(video.video_url)}
                      className="mediateka__play-video"
                    ></div>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.video_url}?showinfo=0`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mediateka__video-name">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: video[`title_${lan}`],
                      }}
                    />
                  </div>
                </div>
              ) : null;
            })}
          </div>
          <div
            className={`mediateka__images ${!activeCard ? "active-card" : ""}`}
          >
            {imageData.map((image) => {
              return categoryId === 0 ? (
                <div
                  key={image.id}
                  className="mediateka__image-card"
                  onClick={() => handleImageModal(image.image)}
                >
                  <div className="mediateka__image-container">
                    <img
                      src={`${baseServerUrl}/${image.image}`}
                      alt="mediatake"
                    />
                  </div>
                </div>
              ) : categoryId === parseInt(image.menu_uz) ? (
                <div
                  key={image.id}
                  className="mediateka__image-card"
                  onClick={() => handleImageModal(image.image)}
                >
                  <div className="mediateka__image-container">
                    <img
                      src={`${baseServerUrl}/${image.image}`}
                      alt="mediatake"
                    />
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
        <Paginator />
      </div>
    </div>
  );
};

export default Mediateka;
