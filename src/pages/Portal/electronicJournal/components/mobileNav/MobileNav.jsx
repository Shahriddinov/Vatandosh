import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./mobileNav.scss";
import { Link } from "react-router-dom";

const MobileNav = ({ navData }) => {
  return (
    <div className="mobile-nav">
      <div className="container">
        <div className="mobile-nav__inner">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 23,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 23,
              },
              780: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {navData.map((el) => (
              <SwiperSlide key={el.id}>
                <Link to={el.url} className="mobile-nav__item">
                  {el.label}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
