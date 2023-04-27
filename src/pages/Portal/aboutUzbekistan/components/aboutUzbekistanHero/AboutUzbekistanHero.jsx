import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./aboutUzbekistanHero.scss";

import img1 from "../../../../../assets/images/about-uzbekistan/1.png";
import img2 from "../../../../../assets/images/about-uzbekistan/2.png";
import img3 from "../../../../../assets/images/about-uzbekistan/3.png";
import img4 from "../../../../../assets/images/about-uzbekistan/4.png";
import img5 from "../../../../../assets/images/about-uzbekistan/5.png";
import img6 from "../../../../../assets/images/about-uzbekistan/6.png";

const AboutUzbekistanHero = () => {
  const sliderItems = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
  ];

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
          {sliderItems.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="about-uzbekistan-hero__image">
                <img src={slide.image} alt="slide picture" />
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
