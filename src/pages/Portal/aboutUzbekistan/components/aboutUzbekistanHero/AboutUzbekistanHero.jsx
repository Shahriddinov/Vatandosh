import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./aboutUzbekistanHero.scss";

import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const AboutUzbekistanHero = ({ data }) => {
  const sliderData = data.map((el, i) => ({ id: i + 1, image: el }));

  return (
    <div className="about-uzbekistan-hero">
      <section className="about-uzbekistan-hero__section">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            type: "fraction",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="about-uzbekistan-hero__image">
                <img
                  src={`${PORTAL_IMAGE_URL}${slide.image}`}
                  alt="slide img"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </section>
    </div>
  );
};

export default AboutUzbekistanHero;
