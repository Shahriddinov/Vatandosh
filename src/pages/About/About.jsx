import React, { useEffect } from "react";
import "./About.scss";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";
import Table from "./component/Table/Table";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../component/Spinner";
import { baseServerUrl } from "../../services/api/utils";
import Aos from "aos";
import { getAbout } from "../../reduxToolkit/About/About";

const About = () => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const loading = useSelector((state) => state.aboutSlice.loading);
  const aboutData = useSelector((state) => state.aboutSlice.aboutData);
  const { t } = useTranslation();
  const heroData = {
    title: `${t("aboutPage.section1.htext")}`,
    description: (
      <p
        dangerouslySetInnerHTML={{
          __html: aboutData[`head_text_${lan}`],
        }}
      ></p>
    ),
    pagePath: `${t("aboutPage.section1.foottext2")}`,
  };

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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

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
              src={`${baseServerUrl}/${aboutData?.image}`}
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
          <div className="about_card_right_title">
            <p
              dangerouslySetInnerHTML={{
                __html: aboutData[`text_${lan}`],
              }}
            ></p>
          </div>
        </div>
      </div>
      <div className="about_videos">
        <div>
          <video autoPlay muted loop className="about_videos_links">
            <source
              src={`${baseServerUrl}/${
                JSON.parse(aboutData?.videofile)[0]?.download_link
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
          <span
            dangerouslySetInnerHTML={{
              __html: aboutData[`history_${lan}`],
            }}
          />
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
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            initialSlide={1}
            loop={true}
            {...swiperParams}
          >
            {aboutData?.images
              ? JSON.parse(aboutData.images).map((obj, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        className="about_caruosel-img"
                        src={`${baseServerUrl}/${obj}`}
                        alt=""
                      />
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default About;
