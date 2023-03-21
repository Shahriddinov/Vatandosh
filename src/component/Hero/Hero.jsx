import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { getSlider } from "../../reduxToolkit/sliderSlice/extraReducer";

import "./Hero.scss";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Hero = () => {
  const dispatch = useDispatch();
  const [slideIndex, setSlideIndex] = useState(1);
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);

  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const loading = useSelector((state) => state.sliderSlice.loading);

  const handleLeft = () => {
    if (slideIndex === 1) {
      setSlideIndex(3);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === 3) {
      setSlideIndex(1);
    } else {
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

  useEffect(() => {
    dispatch(getSlider());
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__slider">
          {sliderData?.map((slider) => (
            <div
              className={`hero__slider-box ${
                slideIndex === slider?.id ? "active" : ""
              }`}
              key={slider.id}
            >
              {slider.img ? (
                <div
                  className={`hero__slider-item`}
                  style={{
                    backgroundImage: `url(https://vatanparvarbackend.napaautomotive.uz/storage/${slider?.img})`,
                  }}
                ></div>
              ) : (
                <div className={`hero__slider-video`}>
                  <video autoPlay muted loop>
                    <source
                      src={`https://vatanparvarbackend.napaautomotive.uz/storage/${
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
                <button>{t("more")}</button>
                <div
                  className={`navigation-line ${
                    slideIndex === slider?.id ? "active" : ""
                  }`}
                ></div>
              </div>
              {/* {slider.img ? (
                <div className="hero__slider-left-bottom">
                  <span>#{slider[`title_${lan}`]}</span>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: slider[`text_${lan}`],
                    }}
                  />
                  <button>{t("more")}</button>
                  <div
                    className={`navigation-line ${
                      slideIndex === slider?.id ? "active" : ""
                    }`}
                  ></div>
                </div>
              ) : (
                <div className="hero__slider-left-bottom">
                  <span>#{slider[`title_${lan}`]}</span>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: slider[`text_${lan}`],
                    }}
                  />
                </div>
              )} */}
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
