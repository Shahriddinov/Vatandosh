import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseServerUrl } from "../../services/api/utils";
import "../../pages/Projects/projects.scss";

export default function FotoGallery({ images }) {
  const { t } = useTranslation();

  const swiperRef = useRef(null);
  const onSwiperInit = () => {};

  const swiperParams = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      670: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  };

  return (
    <>
      {images ? (
        <div className="projects__caruosel">
          <div className="container carousel__title">
            <h1>{t("projects_page.gallery")}</h1>
          </div>
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            onSwiper={onSwiperInit}
            initialSlide={1}
            loop={true}
            autoplay={true}
            {...swiperParams}
          >
            {JSON.parse(images).map((obj, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`${baseServerUrl}/${obj}`}
                    alt=""
                    className="gallery__img"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : null}
    </>
  );
}
