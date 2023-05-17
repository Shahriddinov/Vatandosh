import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./homeWebinarSlider.scss";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { baseServerUrl } from "../../services/api/utils";
import Spinner from "../Spinner/Spinner";

const HomeWebinarSlider = ({ sliderData, error, loading }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);
  const navigate = useNavigate();

  const handleLeft = () => {
    if (slideIndex === 0) {
      setSlideIndex(sliderData.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === sliderData.length - 1) {
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

  if (loading) {
    return <Spinner position="full" />;
  }

  if (error) {
    return <p className="">{error}</p>;
  }

  const data = [
    {
      id: 1,
      image: "sliders/March2023/K0E0IS5DLSOB94afh7ov.png",
    },
    {
      id: 2,
      image: "sliders/March2023/PUAUISuLtc7X6aTOxc05.png",
    },
    {
      id: 3,
      image: "sliders/March2023/K0E0IS5DLSOB94afh7ov.png",
    },
  ];

  return (
    <section className="webinar-slider">
      <div className="webinar-slider__container">
        <div className="webinar-slider__slider">
          {sliderData?.map((slider, index) => (
            <div
              className={`webinar-slider__slider-box ${
                slideIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className={`webinar-slider__slider-item`}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${baseServerUrl}/${slider.background_image})`,
                }}
              ></div>
              <div className="container webinar-slider__content">
                <div className="webinar-slider__slider-left-bottom">
                  <div className="webinar-slider__slider-left-bottom-text">
                    <h1>{slider[`title_${lan}`]}</h1>
                    <p>{slider[`text_${lan}`]}</p>
                  </div>
                  <div className="webinar-slider__slider-left-bottom-buttons">
                    <button
                      onClick={() => navigate(`/portal-category/webinar`)}
                      className="webinar-slider__slider-left-bottom-buttons-more-button"
                    >
                      {t("webinar.header2")}
                    </button>
                    <button
                      onClick={() =>
                        navigate(
                          `/portal-category/webinar/webinar-register/${slider.id}`
                        )
                      }
                      className=" webinar-slider__slider-left-bottom-buttons-participate-button"
                    >
                      {t("webinar.header1")}
                    </button>
                  </div>
                  <div
                    className={`navigation-line ${
                      slideIndex === index ? "active" : ""
                    }`}
                  ></div>
                </div>
                <div className="webinar-slider__bottom">
                  <div className="webinar-slider__bottom-right">
                    <div className="arrow-btn" onClick={handleLeft}>
                      <FiChevronLeft />
                    </div>
                    <div className="arrow-btn" onClick={handleRight}>
                      <FiChevronRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="webinar-slider__bullets">
                {data?.map((slider, index) => (
                  <div
                    className={`webinar-slider__bullets-bullet ${
                      slideIndex === index
                        ? "webinar-slider__bullets-bullet-active"
                        : ""
                    }`}
                    key={index}
                    onClick={() => handleBulletClick(index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWebinarSlider;
