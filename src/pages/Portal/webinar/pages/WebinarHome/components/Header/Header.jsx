import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./WebinarHeader.scss";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { imageUrl } from "../../../../../../../services/api/utils";
import Navbar from "../Navbar/Navbar";
import Nav from "../Nav/Nav";
import { useOutletContext } from "react-router-dom";

const WebinarHeader = ({ sliderData, error, loading }) => {
  const { navData, navbarUrl } = useOutletContext();
  const [slideIndex, setSlideIndex] = useState(0);
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);
  const navigate = useNavigate();

  const handleLeft = () => {
    if (slideIndex === 0) {
      setSlideIndex(sliderData?.meetings?.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === sliderData?.meetings?.length - 1) {
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
    <section className="webinarheader">
      <div className="webinarheader__container">

        <div className="webinarheader__slider">
          {sliderData?.meetings?.map((slider, index) => (
            <div
              className={`webinarheader__slider-box ${
                slideIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className={`webinarheader__slider-item`}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${imageUrl}/${slider.image})`,
                }}></div>
              <div className="container webinarheader__content">
                <div className="webinarheader__slider-left-bottom">
                  <div className="webinarheader__slider-left-bottom-text">
                    <h1 className="webinar-body-name">{slider.title}</h1>
                    <p className="webinar-body-text">{slider.description}</p>
                  </div>
                  <div className="webinarheader__slider-left-bottom-buttons">
                    <button
                      onClick={() =>
                        navigate(
                          `/portal-category/webinar/online-webinar/${slider.id}`
                        )
                      }
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
                <div className="webinarheader__bottom">
                  <div className="webinarheader__bottom-right">
                    <div className="arrow-btn" onClick={handleLeft}>
                      <FiChevronLeft />
                    </div>
                    <div className="arrow-btn" onClick={handleRight}>
                      <FiChevronRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="webinarheader__bullets">
                {data?.map((slider, index) => (
                  <div
                    className={`webinarheader__bullets-bullet ${
                      slideIndex === index
                        ? "webinarheader__bullets-bullet-active"
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

export default WebinarHeader;
