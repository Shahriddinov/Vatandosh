import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./Hero.scss";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { baseServerUrl } from "../../services/api/utils";
import Spinner from "../Spinner/Spinner";

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
    } else if (slideIndex < sliderData.length) {
      setSlideIndex(slideIndex + 1);
    }
  };

  let slideInterval;

  const autoPlay = () => {
    slideInterval = setInterval(handleRight, 8000);
  };

  useEffect(() => {
    autoPlay();
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  if (loading) {
    return <Spinner position="full" />;
  }

  if (error) {
    return <p className="">{error}</p>;
  }
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__slider">
          {sliderData?.map((slider, index) => (
            <div
              className={`hero__slider-box ${
                slideIndex === index + 1 ? "active" : ""
              }`}
              key={slider.id}
            >
              {slider.image ? (
                <div
                  className={`hero__slider-item`}
                  style={{
                    backgroundImage: `url(${baseServerUrl}/${slider?.image})`,
                  }}
                ></div>
              ) : (
                <div className={`hero__slider-video`}>
                  <video autoPlay muted loop>
                    <source
                      src={`${baseServerUrl}/${
                        JSON.parse(slider?.video)[
                          JSON.parse(slider?.video).length - 1
                        ]?.download_link
                      }`}
                    />
                  </video>
                </div>
              )}
              <div className="hero__slider-left-bottom">
                <span>#{slider[`title_${lan}`]}</span>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: slider[`text_${lan}`],
                  }}
                />
                <button
                  onClick={() => navigate(`/sliders/${slider.id}`)}
                  className={`${
                    JSON.parse(slider.video).length ? "hide-btn" : ""
                  }`}
                >
                  {t("more")}
                </button>
                <div
                  className={`navigation-line ${
                    slideIndex === index + 1 ? "active" : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
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
