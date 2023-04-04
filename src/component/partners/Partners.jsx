import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { getPartners } from "../../reduxToolkit/partnersSlice/extraReducer";

import "./partners.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { baseServerUrl } from "../../services/api/utils";
import Aos from "aos";

const Partners = () => {
  const sliderRef = useRef();
  const sliderRef2 = useRef();
  const [activeslider, setActiveSlader] = useState({ nav1: null, nav2: null });

  const dispatch = useDispatch();
  const partnersData = useSelector((state) => state.partnersSlice.partnersData);
  const error = useSelector((state) => state.partnersSlice.error);
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(getPartners());
    setActiveSlader((prev) => ({
      nav1: sliderRef.current,
      nav2: sliderRef2.current,
    }));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="partner_section">
      <div className="container">
        <div className="top">
          <div className="title">
            <h1>{t("partnersTitle")}</h1>
            <div className="bottom__line" />
          </div>
          <div className="carousel__buttons">
            <button className="carousel__button" onClick={handlePrev}>
              <FiChevronLeft size={20} />
            </button>
            <button className="carousel__button" onClick={handleNext}>
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <Slider
          asNavFor={activeslider.nav2}
          ref={(slider) => (sliderRef.current = slider)}
          {...settings}
        >
          {partnersData?.map((partner) => (
            <div
              className="content"
              key={partner.id}
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="text">
                <h3
                  className="content_title"
                  dangerouslySetInnerHTML={{ __html: partner[`title_${lng}`] }}
                />
                <p
                  className="content_text"
                  dangerouslySetInnerHTML={{ __html: partner[`text_${lng}`] }}
                />
              </div>
              <div className="image">
                <img
                  src={`${baseServerUrl}/${partner.img}`}
                  alt={partner.title_uz}
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="horizontal__line" />

        <div className="partners">
          <Slider
            asNavFor={activeslider.nav1}
            ref={(slider) => (sliderRef2.current = slider)}
            {...settings2}
          >
            {partnersData?.map((el) => (
              <div
                className="partner"
                key={el.id}
                data-aos="zoom-out-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <img
                  className="partner__img"
                  src={`${baseServerUrl}/${el.logoImg}`}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partners;
