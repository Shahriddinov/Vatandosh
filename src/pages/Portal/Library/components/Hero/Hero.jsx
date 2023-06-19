import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./Hero.scss";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
  getLibraryAll,
  getLibrarySlider,
} from "../../../../../reduxToolkit/portalSlices/librarySlice/extraReducer";
import {PORTAL_IMAGE_URL} from "../../../../../services/api/utils";

const Hero = ({ librarySliderData, error, loading }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);
  const navigate = useNavigate();

  const handleLeft = () => {
    if (slideIndex === 0) {
      setSlideIndex(librarySliderData.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === librarySliderData.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handleBulletClick = (index) => {
    setSlideIndex(index);
  };

  let slideInterval;

  const autoPlay = () => {
    slideInterval = setInterval(handleRight, 8000);
  };

  useEffect(() => {
    autoPlay();
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  // console.log(librarySliderData[0].image)
  return (
    <section className="library__hero">
      <div className="library__hero__container">
        <div className="library__hero__slider">
          {librarySliderData?.map((slider, index) => (
            <div
              className={`library__hero__slider-box ${
                slideIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className={`library__hero__slider-item`}
                style={{
                  backgroundImage: `url(${PORTAL_IMAGE_URL}${slider?.image})`,
                }}
              >
                <h1>{slider.title}</h1>
                <h2>{slider.text}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="library__hero__bottom">
          <div className="library__hero__bottom-right">
            <div className="arrow-btn" onClick={handleLeft}>
              <FiChevronLeft />
            </div>
            <div className="arrow-btn" onClick={handleRight}>
              <FiChevronRight />
            </div>
          </div>
          <div className="bullets">
            {librarySliderData?.map((slider, index) => (
              <div
                className={`bullets-bullet ${
                  slideIndex === index ? "bullets-bullet-active" : ""
                }`}
                key={index}
                onClick={() => handleBulletClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
