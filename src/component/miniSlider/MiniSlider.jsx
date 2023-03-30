import React, { useEffect } from "react";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../reduxToolkit/eventsSlice/extraReducer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./miniSlider.scss";

export const MiniSlider = ({ title, pathUrl }) => {
  const eventsData = useSelector((state) => state.eventsSlice.eventsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <section className="compatriots-events">
      <div className="container">
        <div className="compatriots-events__inner">
          <div className="compatriots-events__header">
            <h3 className="compatriots-events__title">{title}</h3>

            <div className="compatriots-events__slider--controls slider_controls">
              <button className="slider_controls___control slider_controls___left">
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

              <button className="slider_controls___control slider_controls___right">
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

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            navigation={{
              prevEl: ".slider_controls___left",
              nextEl: ".slider_controls___right",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1060: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {eventsData?.map((news) => (
              <SwiperSlide
                key={news.id}
                className="compatriots-events__slider-list"
              >
                <Card {...news} pathUrl={pathUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
