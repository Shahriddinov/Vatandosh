import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.scss";
import SliderData from "./data";
import Gallery from "./gallery";
import ParticipateModal from "./Participate/Participate";

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ArrowDown from "../../assets/images/icons/arrowDown.svg";

import Participate from "../../assets/images/projects/participate.png";
import Pattern1 from "../../assets/images/projects/patternLeft.svg";
import Pattern2 from "../../assets/images/projects/patternCenter.svg";
import Pattern3 from "../../assets/images/projects/patternRight.svg";

const Projects = () => {
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const sliderRef = useRef(null);
  const swiperRef = useRef(null);

  const [modalOn, setModalOn] = useState(false);

  const toggleModal = () => {
    setModalOn(!modalOn);
    if (window.innerWidth <= 1000) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const [numVisibleDivs, setNumVisibleDivs] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  const nextSlide = () => {
    // get the Swiper instance
    const swiper = swiperRef.current.swiper;

    // slide to the next slide
    swiper.slideNext();
  };

  const prevSlide = () => {
    // get the Swiper instance
    const swiper = swiperRef.current.swiper;

    // slide to the previous slide
    swiper.slidePrev();
  };

  const [swiperInstance, setSwiperInstance] = useState(null);
  const onSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  const onBulletClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setNumVisibleDivs(3);
      } else {
        setNumVisibleDivs(SliderData.length);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slicedData = SliderData.slice(0, numVisibleDivs);

  const handleShowMore = () => {
    if (SliderData.length - numVisibleDivs >= 3) {
      setNumVisibleDivs(numVisibleDivs + 3);
    } else {
      setNumVisibleDivs(SliderData.length);
    }
  };

  const handleShowLess = () => {
    setNumVisibleDivs(3);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "66px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: numVisibleDivs,
          slidesToScroll: 1,
          infinite: true,
          vertical: true, // Set vertical display mode
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={
          modalOn && window.innerWidth <= 1000 ? "display__none" : "projects"
        }
      >
        <div className="projects__top">
          <WhriteHeader />
          <CouncilHero {...heroData} />
        </div>
        <div className="projects__body container">
          <div className="projects__all">
            <div className="top">
              <div className="title">
                <h1>{t("projects_page.carousel_title")}</h1>
                <p>{t("projects_page.carousel_description")}</p>
              </div>
              <div className="carousel__buttons">
                <button
                  className="carousel__button"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  className="carousel__button"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>
            <Slider {...settings} ref={sliderRef}>
              {slicedData.map((element) => {
                return (
                  <div className="slider__element" key={element.id}>
                    <div className="hashtag">
                      <div className="hashtag__images">
                        <img src={element.image1} alt="" />
                        <img src={element.image2} alt="" />
                        <img src={element.image3} alt="" />
                        <img src={element.image1} alt="" />
                      </div>
                      <div className="hashtag__info">
                        <h4>"{element.title}" rukni</h4>
                        <p>{element.dataCount} ta malumot mavjud</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            {numVisibleDivs === SliderData.length ? (
              <button className="show__more" onClick={handleShowLess}>
                <img src={ArrowDown} alt="" className="rotate180" />
                {t("projects_page.see-more")}
              </button>
            ) : (
              <button className="show__more" onClick={handleShowMore}>
                <img src={ArrowDown} alt="" />
                {t("projects_page.see-less")}
              </button>
            )}
            <div className="participate">
              <div className="participate__left">
                <img src={Pattern1} alt="" className="pattern__left" />
                <img src={Pattern2} alt="" className="pattern__center" />
                <img src={Pattern3} alt="" className="pattern__right" />
                <h3>{t("projects_page.participate")}</h3>
                <p>{t("projects_page.participate_title")}</p>
                <button onClick={toggleModal}>
                  {t("projects_page.participate_btn")}
                </button>
              </div>
              <img src={Participate} alt="" className="participate__img" />
            </div>
          </div>
        </div>
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
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            loop={true}
            {...swiperParams}
          >
            {Gallery.map((obj, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={obj.image} alt="" className="gallery__img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="carousel__pagination carousel__buttons">
            <button className="carousel__button" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button
              className={
                currentIndex !== Gallery.length
                  ? "carousel__button active__button"
                  : "carousel__button"
              }
              onClick={() => onBulletClick(currentIndex)}
            >
              {currentIndex}
            </button>
            <button
              className="carousel__button"
              onClick={() => onBulletClick(currentIndex + 1)}
            >
              {currentIndex + 1}
            </button>
            <button
              className="carousel__button"
              onClick={() => {
                if (
                  currentIndex <
                  Gallery.length - Math.ceil(Gallery.length / 10)
                ) {
                  onBulletClick(currentIndex + Math.ceil(Gallery.length / 10));
                } else {
                  onBulletClick(currentIndex - Math.ceil(Gallery.length / 10));
                }
              }}
            >
              ...
            </button>
            <button
              className={
                currentIndex === Gallery.length
                  ? "carousel__button active__button"
                  : "carousel__button"
              }
              onClick={() => {
                onBulletClick(Gallery.length);
                setCurrentIndex(1);
              }}
            >
              {Gallery.length}
            </button>
            <button className="carousel__button" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {slicedData.map((element) => {
          return (
            <div className="slider__element" key={element.id}>
              <div className="hashtag">
                <div className="hashtag__images">
                  <img src={element.image1} alt="" />
                  <img src={element.image2} alt="" />
                  <img src={element.image3} alt="" />
                  <img src={element.image1} alt="" />
                </div>
                <div className="hashtag__info">
                  <h4>"{element.title}" rukni</h4>
                  <p>{element.dataCount} ta malumot mavjud</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {numVisibleDivs === SliderData.length ? (
        <button className="show__more" onClick={handleShowLess}>
          <img src={ArrowDown} alt="" className="rotate180" />
          {t("projects_page.see-more")}
        </button>
      ) : (
        <button className="show__more" onClick={handleShowMore}>
          <img src={ArrowDown} alt="" />
          {t("projects_page.see-less")}
        </button>
      )}
      <div className="participate">
        <div className="participate__left">
          <img src={Pattern1} alt="" className="pattern__left" />
          <img src={Pattern2} alt="" className="pattern__center" />
          <img src={Pattern3} alt="" className="pattern__right" />
          <h3>{t("projects_page.participate")}</h3>
          <p>{t("projects_page.participate_title")}</p>
          <button onClick={toggleModal}>
            {t("projects_page.participate_btn")}
          </button>
        </div>
        <img src={Participate} alt="" className="participate__img" />
      </div>
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
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          loop={true}
          {...swiperParams}
        >
          {Gallery.map((obj, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={obj.image} alt="" className="gallery__img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="carousel__pagination carousel__buttons">
          <button className="carousel__button" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button
            className={
              currentIndex !== Gallery.length
                ? "carousel__button active__button"
                : "carousel__button"
            }
            onClick={() => onBulletClick(currentIndex)}
          >
            {currentIndex}
          </button>
          <button
            className="carousel__button"
            onClick={() => onBulletClick(currentIndex + 1)}
          >
            {currentIndex + 1}
          </button>
          <button
            className="carousel__button"
            onClick={() => {
              if (
                currentIndex <
                Gallery.length - Math.ceil(Gallery.length / 10)
              ) {
                onBulletClick(currentIndex + Math.ceil(Gallery.length / 10));
              } else {
                onBulletClick(currentIndex - Math.ceil(Gallery.length / 10));
              }
            }}
          >
            ...
          </button>
          <button
            className={
              currentIndex === Gallery.length
                ? "carousel__button active__button"
                : "carousel__button"
            }
            onClick={() => {
              onBulletClick(Gallery.length);
              setCurrentIndex(1);
            }}
          >
            {Gallery.length}
          </button>
          <button className="carousel__button" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </div>
      {modalOn && (
        <>
          <WhriteHeader />
          <ParticipateModal toggleModal={toggleModal} lng={lng} t={t} />
        </>
      )}
    </>
  );
};

export default Projects;
