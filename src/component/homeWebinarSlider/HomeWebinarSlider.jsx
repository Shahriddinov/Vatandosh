import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./homeWebinarSlider.scss";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { baseServerUrl } from "../../services/api/utils";
import Spinner from "../Spinner/Spinner";

const HomeWebinarSlider = ({ sliderData, error, loading }) => {
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
          {data?.map((slider) => (
            <div
              className={`webinar-slider__slider-box ${
                slideIndex === slider?.id ? "active" : ""
              }`}
              key={slider.id}
            >
              {slider.image ? (
                <div
                  className={`webinar-slider__slider-item`}
                  style={{
                    backgroundImage: `url(${baseServerUrl}/${slider?.image})`,
                  }}
                ></div>
              ) : (
                <div className={`webinar-slider__slider-video`}>
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
              <div className="container webinar-slider__content">
                <div className="webinar-slider__slider-left-bottom">
                  <div className="webinar-slider__slider-left-bottom-text">
                    <h1>“Vatandoshlar” Vebinari </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy{" "}
                    </p>
                  </div>
                  <div className="webinar-slider__slider-left-bottom-buttons">
                    <button
                      onClick={() => navigate(`/portal-category/webinar`)}
                      className="webinar-slider__slider-left-bottom-buttons-more-button"
                    >
                      Batafsil ma’lumot
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/portal-category/webinar/webinar-register`)
                      }
                      className=" webinar-slider__slider-left-bottom-buttons-participate-button"
                    >
                      Ishtirok etish
                    </button>
                  </div>
                  <div
                    className={`navigation-line ${
                      slideIndex === slider?.id ? "active" : ""
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
                {data?.map((slider) => (
                  <div
                    className={`webinar-slider__bullets-bullet ${
                      slideIndex === slider?.id
                        ? "webinar-slider__bullets-bullet-active"
                        : ""
                    }`}
                    key={slider.id}
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
