import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Layout/Header/Header";
import {
  getImages,
  getImagesMenus,
  getVideos,
  getVideosMenus,
} from "../../reduxToolkit/mediatekaSlice/extraReducer";
import Spinner from "../Spinner/Spinner";
import { baseServerUrl } from "../../services/api/utils";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import "./mediateka.scss";
import { Paginator } from "../Pagination/Pagination";

const Mediateka = () => {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState(true);
  const [categoryId, setCategoryId] = useState(0);

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
            className={`mediateka__videos ${activeCard ? "active-card" : ""}`}
          >
            {videoData.map((video) => {
              return categoryId === 0 ? (
                <div key={video.id} className="mediateka__video-card">
                  <div className="mediateka__video-container">
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
                <div key={image.id} className="mediateka__image-card">
                  <div className="mediateka__image-container">
                    <img
                      src={`${baseServerUrl}/${image.image}`}
                      alt="mediatake"
                    />
                  </div>
                </div>
              ) : categoryId === parseInt(image.menu_uz) ? (
                <div key={image.id} className="mediateka__image-card">
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
