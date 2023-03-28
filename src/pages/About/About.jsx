import React from "react";
import { useLocation } from "react-router-dom";
import "./About.scss";
import CardImg from "../../assets/images/about-Card.svg";
import Rais from "../../assets/images/Rais.svg";
import Urinbosar from "../../assets/images/Substitute.jpg";
import Video from "../../assets/images/slider/slider_video.mp4";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";
import Partner from "../../assets/images/partner.svg";
import Partners from "../../assets/images/partnerWhite.svg";
import Law from "../../assets/images/huquq.svg";
import Laws from "../../assets/images/huquqWhite.svg";
import Til from "../../assets/images/til.svg";
import Language from "../../assets/images/language.svg";
import Book from "../../assets/images/book.svg";
import BookWhite from "../../assets/images/bookWhite.svg";
import Student from "../../assets/images/student.svg";
import Students from "../../assets/images/studentWhite.svg";
import Child from "../../assets/images/childs.svg";
import Childs from "../../assets/images/childsWhite.svg";
import Home from "../../assets/images/home/Home.svg";
import Homes from "../../assets/images/home/HomeWhite.svg";
import Togather from "../../assets/images/home/Togather.svg";
import Togathers from "../../assets/images/home/TogetherWhite.svg";
import StarBag from "../../assets/images/home/starBag.svg";
import StarBags from "../../assets/images/home/starBagWhite.svg";
import Latter from "../../assets/images/home/latter.svg";
import Latters from "../../assets/images/home/latterWhite.svg";
import ThreeStar from "../../assets/images/home/threeStar.svg";
import ThreeStars from "../../assets/images/home/threeStarWhite.svg";
import Char from "../../assets/images/home/Char.svg";
import Chars from "../../assets/images/home/CharWhite.svg";
import SliderVideo from "../../assets/images/slider/slider_video.mp4";
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

const About = () => {
  const state = useLocation();
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
  const Ditrections = [
    {
      imgs: Partner,
      title: `${t("aboutPage.section3.card1-left")}`,
      backgroundImg: Partners,
    },
    {
      imgs: Law,
      title: `${t("aboutPage.section3.card1-right")}`,
      backgroundImg: Laws,
    },
    {
      imgs: Til,
      title: `${t("aboutPage.section3.card2-left")}`,
      backgroundImg: Language,
    },
    {
      imgs: Book,
      title: `${t("aboutPage.section3.card2-right")}`,
      backgroundImg: BookWhite,
    },
    {
      imgs: Student,
      title: `${t("aboutPage.section3.card3-left")}`,
      backgroundImg: Students,
    },
    {
      imgs: Child,
      title: `${t("aboutPage.section3.card3-right")}`,
      backgroundImg: Childs,
    },
    {
      imgs: Home,
      title: `${t("aboutPage.section3.card4-left")}`,
      backgroundImg: Homes,
    },

    {
      imgs: Togather,
      title: `${t("aboutPage.section3.card4-right")}`,
      backgroundImg: Togathers,
    },
    {
      imgs: StarBag,
      title: `${t("aboutPage.section3.card5-left")}`,
      backgroundImg: StarBags,
    },
    {
      imgs: Latter,
      title: `${t("aboutPage.section3.card5-right")}`,
      backgroundImg: Latters,
    },
    {
      imgs: ThreeStar,
      title: `${t("aboutPage.section3.card6-left")}`,
      backgroundImg: ThreeStars,
    },
    {
      imgs: Char,
      title: `${t("aboutPage.section3.card6-right")}`,
      backgroundImg: Chars,
    },
  ];
  return (
    <div className="about ">
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <div className="about_card container">
        <div className="about_card_left">
          <img className="about_card_left_img" src={CardImg} alt="cardImg" />
        </div>
        <div className="about_card_right">
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

        <div className="about_card_left">
          <div className="about_card_left_boss">
            <img className="sub" src={Rais} alt="Rais" />
            <div className="about_card_left_boss_level">
              {t("aboutPage.section2.person1-info")}
            </div>
            <div className="about_card_left_boss_name">
              Sattarov Odiljon Berdimuradovich
            </div>
          </div>
          <div className="about_card_left_substitute">
            <img className="sub" src={Urinbosar} alt="" />
            <div className="about_card_left_boss_level">
              {t("aboutPage.section2.person2-info")}
            </div>
            <div className="about_card_left_boss_name">
              Tursunov Rovshan Xamidullayevich
            </div>
          </div>
        </div>
        <div className="about_card_right">
          <div className="about_card_right_text tops">
            {t("aboutPage.section2.htext2")}
          </div>
          <div className="about_card_right_title toptext">
            {t("aboutPage.section2.p-text2")}
          </div>
        </div>
      </div>
      <div className="about_videos">
        <video autoPlay muted loop className="about_videos_links">
          <source src={Video} />
        </video>
      </div>
      <div className="about_direction container">
        <div className="about_direction_fon">
          {t("aboutPage.section3.htext1")}
        </div>
        <div className="about_direction_cards">
          {Ditrections.map((item, index) => (
            <div key={index} className="about_direction_cards_boxs">
              <img src={item.imgs} alt="partner" />
              <div className="about_direction_cards_boxs_describtion">
                {item.title}
              </div>
              <img
                className="about_direction_cards_boxs_img"
                src={item.backgroundImg}
                alt=""
              />
            </div>
          ))}
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
