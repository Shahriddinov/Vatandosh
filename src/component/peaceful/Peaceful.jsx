import calendar from "../../assets/images/home/Calendar.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import "./peaceful.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { baseServerUrl } from "../../services/api/utils";
import React, { useEffect, useRef } from "react";
import Aos from "aos";

const Peaceful = () => {
  const peacefulData = useSelector((state) => state.peaceful.peacefulData);
  const loading = useSelector((state) => state.peaceful.loading);
  const error = useSelector((state) => state.peaceful.error);

  const lng = useSelector((state) => state.language.language);

  const { t } = useTranslation();

  const peacefulCard = useRef();

  useEffect(() => {
    Aos.init({
      duration: 2000,
      anchorPlacement: "bottom-top",
    });
  }, []);

  if (loading) {
    return null;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="peaceful">
      <div className="peaceful__container container">
        <div className="peaceful__inner">
          <div className="peaceful__header">
            <h3 className="peaceful__title section_title">
              {t("peacefulTitle")}
            </h3>
            <div className="peaceful__header_end">
              <button className="peaceful__header_btn">
                {t("allPeacefulBtn")}
              </button>

              <div className="peaceful__slider--controls slider_controls">
                <button className="slider_controls___control  peaceful__prev">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.08942 13.9225C7.76398 14.248 7.23634 14.248 6.91091 13.9225L1.07757 8.08922C0.752136 7.76378 0.752136 7.23614 1.07757 6.9107L6.91091 1.07737C7.23634 0.751933 7.76398 0.751933 8.08942 1.07737C8.41485 1.40281 8.41485 1.93044 8.08942 2.25588L2.84534 7.49996L8.08942 12.744C8.41486 13.0695 8.41486 13.5971 8.08942 13.9225Z"
                      fill="#065EA9"
                    />
                  </svg>
                </button>

                <button className="slider_controls___control peaceful__next">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.910582 1.07745C1.23602 0.752015 1.76366 0.752015 2.08909 1.07745L7.92243 6.91079C8.24786 7.23622 8.24786 7.76386 7.92243 8.0893L2.08909 13.9226C1.76366 14.2481 1.23602 14.2481 0.910582 13.9226C0.585145 13.5972 0.585145 13.0696 0.910582 12.7441L6.15466 7.50004L0.910582 2.25596C0.585145 1.93053 0.585145 1.40289 0.910582 1.07745Z"
                      fill="#065EA9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="peaceful__slider">
            <div
              className="peaceful_slider__wrapper"
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                modules={[Navigation]}

                navigation={{
                  prevEl: ".peaceful__prev",
                  nextEl: ".peaceful__next",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  550: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  876: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                className="mySwiper"
              >
                {peacefulData.map((el ) => (
                  <SwiperSlide
                    key={el?.id}
                    className="peaceful__slider-item"
                    // data-aos="zoom-out-up"
                    //  data-aos-easing="ease-out-cubic"
                    //  data-aos-duration="1000"
                    ref={peacefulCard}
                  >
                    {/* <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}> */}
                    <div
                      className="peaceful__slider_card"
                      style={{
                        backgroundImage: `url(${baseServerUrl}/${el?.image})`,
                      }}
                    >
                      <div className="peaceful__card_inner">
                        <div className="peaceful__slider_card--body">
                          <a href="/" className="peaceful__slider_card--link">
                            {el?.hashTag}
                          </a>

                          <p className="peaceful__slider_card--text">
                            {el[`title_${lng}`].slice(0, 60)}...
                          </p>
                        </div>

                        <div className="peaceful__slider__card--footer">
                          <img src={calendar} alt="Calendar" />
                          <b>{el?.data}</b>
                        </div>
                      </div>
                    </div>
                    {/* </AnimationOnScroll> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Peaceful;
