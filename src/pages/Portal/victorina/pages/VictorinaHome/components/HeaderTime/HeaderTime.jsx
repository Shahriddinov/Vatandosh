import React, { useEffect, useState } from "react";
import "./HeaderTime.scss";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../../../../../services/api/utils";

function HeaderTime() {
  const [slideIndex, setSlideIndex] = useState(1);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizSlice.quizData.quizzes);

  const handleLeft = () => {
    if (slideIndex === 1) {
      setSlideIndex(quizData.length);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRight = () => {
    if (slideIndex === quizData.length) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  useEffect(() => {
    dispatch(getQuizz());
  }, []);

  return (
    <div className="headertime">
      <div className="hero__container container">
        <div className="hero__slider">
          {quizData?.map((slider) => (
            <div
              className={`hero__slider-box ${
                slideIndex === slider?.id ? "active" : ""
              }`}
              key={slider.id}>
              <div
                className={`hero__slider-item`}
                style={{
                  backgroundImage: `url(${imageUrl}/${slider?.image})`,
                }}></div>
              <div className="hero__slider-left-bottom">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: slider.title,
                  }}
                />
                <div className="headertime-page">
                  <div className="headertime-box">
                    <span>12</span>
                    <p>Kun</p>
                  </div>
                  <div className="headertime-box">
                    <span>25 </span>
                    <p>SOAT</p>
                  </div>
                  <div className="headertime-box">
                    <span>45</span>
                    <p>DAQIQA</p>
                  </div>
                </div>
                <button
                  style={{ width: "163px" }}
                  className="headertime-button">
                  Batafsil ma’lumot
                </button>
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
    </div>
  );
}

export default HeaderTime;
