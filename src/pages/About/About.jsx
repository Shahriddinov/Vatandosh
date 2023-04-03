import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./About.scss";
import CardImg from "../../assets/images/about-Card.svg";
import Rais from "../../assets/images/Rais.svg";
import Urinbosar from "../../assets/images/Substitute.jpg";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";

import Table from "./component/Table/Table";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from "../../component/Layout/Header/Header";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import Gallery2 from "../../assets/images/projects/gallery2.png";
import Gallery3 from "../../assets/images/projects/gallery3.png";
import Gallery4 from "../../assets/images/projects/gallery4.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getSlider } from "../../reduxToolkit/sliderSlice/extraReducer";
import Spinner from "../../component/Spinner";
import { baseServerUrl } from "../../services/api/utils";
import Aos from "aos";

const About = () => {
  const state = useLocation();
  const dispatch = useDispatch();

  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const loading = useSelector((state) => state.sliderSlice.loading);

  const { t } = useTranslation();
  const heroData = {
    title: `${t("aboutPage.section1.htext")}`,
    description: `${t("aboutPage.section1.ptext")}`,
    pagePath: `${t("aboutPage.section1.foottext2")}`,
  };

  const swiperParams = {
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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(getSlider());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="about ">
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <div className="about_card container">
        <div className="about_card_left">
          <div className="about_card_left_much">
            <img
              className="about_card_left_much_img"
              data-aos="fade-up"
              src={CardImg}
              alt="cardImg"
            />
          </div>
        </div>
        <div
          className="about_card_right"
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <div className="about_card_right_text">
            {t("aboutPage.section2.htext1")}
          </div>
          <div className="about_card_right_title">
            {t("aboutPage.section2.ptext1-1")}
          </div>
          <div className="about_card_right_text">
            105{" "}
            <span className="about_card_right_text_info">
              {t("aboutPage.section2.ptext1-2")}
            </span>{" "}
            2.4 mln{" "}
            <span className="about_card_right_text_info">
              {t("aboutPage.section2.ptext1-3")}
            </span>
          </div>
          <div className="about_card_right_title">
            {t("aboutPage.section2.ptext1-4")}
          </div>
        </div>
      </div>
      <div className="about_videos">
        <div>
          <video autoPlay muted loop className="about_videos_links">
            <source
              src={`${baseServerUrl}/${
                JSON.parse(sliderData?.[1]?.video)[0].download_link
              }`}
            />
          </video>
        </div>
      </div>
      <div
        className="about_direction container"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="about_direction_fon">
          {t("aboutPage.section3-1.htext1")}
        </div>
        <div className="about_direction_cards">
          <p className="about_direction_cards_information">
            {t("aboutPage.section3-1.ptext1")}
          </p>
        </div>
      </div>
      <div className="">
        <div className="page-about increase ">
          <div className="container">
            <div className="about_fon">{t("aboutPage.section4.htext1")}</div>
            <Table />
          </div>
        </div>
        <div className="about_fatherland container">
          {t("aboutPage.section5.htext1")}
        </div>
        <div className="about_caruosel">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            initialSlide={2}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            {...swiperParams}
          >
            <SwiperSlide>
              <img src={Gallery2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default About;
