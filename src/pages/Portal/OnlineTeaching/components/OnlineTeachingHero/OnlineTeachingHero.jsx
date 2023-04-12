import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

import "./onlineTeachingHero.scss";

const OnlineTeachingHero = () => {
  const pagination = {
    el: ".teaching-hero__dots",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '"><div class="teaching-hero__inner-dot"></div></div>'
      );
    },
  };

  return (
    <div className="teaching-hero">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="teaching-hero__item">
            <div className="container">
              <div className="teaching-hero__inner">
                <h2 className="teaching-hero__level">Beginner</h2>
                <p className="teaching-hero__text">
                  В этом курсе вы примете участие в серии задач, призванных
                  повысить ваше собственное счастье и выработать более{" "}
                </p>
                <Link to="/" className="teaching-hero__btn">
                  Начать урок
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teaching-hero__item">
            <div className="container">
              <div className="teaching-hero__inner">
                <h2 className="teaching-hero__level">Pre-intermediate</h2>
                <p className="teaching-hero__text">
                  В этом курсе вы примете участие в серии задач, призванных
                  повысить ваше собственное счастье и выработать более{" "}
                </p>
                <Link to="/" className="teaching-hero__btn">
                  Начать урок
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="teaching-hero__item">
            <div className="container">
              <div className="teaching-hero__inner">
                <h2 className="teaching-hero__level">Intermediate</h2>
                <p className="teaching-hero__text">
                  В этом курсе вы примете участие в серии задач, призванных
                  повысить ваше собственное счастье и выработать более{" "}
                </p>
                <Link to="/" className="teaching-hero__btn">
                  Начать урок
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="teaching-hero__item">
            <div className="container">
              <div className="teaching-hero__inner">
                <h2 className="teaching-hero__level">Advanced</h2>
                <p className="teaching-hero__text">
                  В этом курсе вы примете участие в серии задач, призванных
                  повысить ваше собственное счастье и выработать более{" "}
                </p>
                <Link to="/" className="teaching-hero__btn">
                  Начать урок
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="container">
        <div className="teaching-hero__dots"></div>
      </div>
    </div>
  );
};

export default OnlineTeachingHero;
