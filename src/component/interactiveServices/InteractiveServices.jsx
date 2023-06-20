import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import "./interactive-services.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getInteractiveServices } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";
import { baseServerUrl } from "../../services/api/utils";
import Aos from "aos";

const InteractiveServices = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.peaceful.interactiveServices);
  const error = useSelector((state) => state.peaceful.error);
  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(getInteractiveServices());
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="interactive_services">
      <div className="interactive_services__inner">
        <div className="container">
          <div className="interactive_services__header">
            <h3 className="interactive_services__title section_title">
              {t("interactiveServicesTitle")}
            </h3>

            <div className="interactive_services__slider--controls slider_controls">
              <button className="slider_controls___control slider_controls___left">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 9 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
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
                  xmlns="http://www.w3.org/2000/svg">
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

        <div className="interactive_services__slider slider_box">
          <div className="slider_box__wrapper">
            <Swiper
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              slidesPerView={4}
              spaceBetween={30}
              modules={[Navigation]}
              navigation={{
                prevEl: ".slider_controls___left",
                nextEl: ".slider_controls___right",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper">
              {data?.map((el) => (
                <SwiperSlide
                  key={el.id}
                  className="interactive_services__slider-item"
                  // data-aos="zoom-in-down"
                  // data-aos-easing="ease-out-cubic"
                  // data-aos-duration="1000"
                >
                  <a className="slider_link" href={el.link} target="blank">
                    <div className="interactive_services__slider--card slider_card">
                      <div className="slider_card__img">
                        <img
                          src={`${baseServerUrl}/${el.img}`}
                          alt={el[`title_${lan}`]}
                        />
                      </div>

                      <h4 className="slider_card__title">
                        {el[`title_${lan}`]}
                      </h4>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;
