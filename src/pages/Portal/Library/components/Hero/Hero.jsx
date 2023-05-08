import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./Hero.scss";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Hero = ({ sliderData, error, loading }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);
  const navigate = useNavigate();

  const handleLeft = () => {
    if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === sliderData.length) {
      setSlideIndex(1);
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

  return (
    <section className="library__hero">
      <div className="library__hero__container">
        <div className="library__hero__slider">
          {sliderData?.map((slider) => (
            <div
              className={`library__hero__slider-box ${
                slideIndex === slider?.id ? "active" : ""
              }`}
              key={slider.id}
            >
              <div
                className={`library__hero__slider-item`}
                style={{
                  backgroundImage: `url(${slider.image})`,
                }}
              >
                <h1>{slider.text}</h1>
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
            {sliderData?.map((slider) => (
              <div
                className={`bullets-bullet ${
                  slideIndex === slider?.id ? "bullets-bullet-active" : ""
                }`}
                key={slider.id}
                onClick={() => handleBulletClick(slider.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
