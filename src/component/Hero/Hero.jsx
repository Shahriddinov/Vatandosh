import React, { useEffect, useState } from "react";

import "./Hero.scss";
import Aos from "aos";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// import video from "../../assets/images/videos/video1.mp4";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

import "./Hero.scss";

// import SliderVideo from "../../assets/images/videos/video.mp4";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { t } = useTranslation();
  const handleLeft = () => {
    if (slideIndex === 0) {
      setSlideIndex(2);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === 2) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  let slideInterval;

  const autoPlay = () => {
    slideInterval = setInterval(handleRight, 5000);
  };

  useEffect(() => {
    autoPlay();
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__slider">
          <div
            className={`hero__slider-item ${slideIndex === 0 ? "active" : ""}`}
          >
            <div className="slider-left-bottom">
              {/*<video autoPlay muted loop>*/}
              {/*  /!*<source src={SliderVideo} />*!/*/}
              {/*</video>*/}
             <p>#{t("lates")}</p>
              <h3>{t("dialog1")}</h3>
              <button>{t("more")}</button>
              <div
                className={`navigation-line ${
                  slideIndex === 0 ? "active" : ""
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`hero__slider-item ${slideIndex === 1 ? "active" : ""}`}
          >
            <div className="slider-left-bottom">
              <p>#{t("lates")}</p>
              <h3>{t("dialog2")}</h3>
              <button>{t("more")}</button>
              <div
                className={`navigation-line ${
                  slideIndex === 1 ? "active" : ""
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`hero__slider-item ${slideIndex === 2 ? "active" : ""}`}
          >
            <div className="slider-left-bottom">
              <p>#{t("lates")}</p>
              <h3>{t("dialog3")}</h3>
              <button>{t("more")}</button>
              <div
                className={`navigation-line ${
                  slideIndex === 2 ? "active" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="hero__bottom-right">
            <div className="arrow-btn" onClick={handleLeft}>
              <FiChevronLeft />
            </div>
            <div className="arrow-btn" onClick={handleRight}>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
