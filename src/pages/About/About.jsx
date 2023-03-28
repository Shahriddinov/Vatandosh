import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import "./About.scss";
import CardImg from "../../assets/images/about-Card.svg"
import Rais from "../../assets/images/Rais.svg"
import Urinbosar from "../../assets/images/Substitute.jpg"
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";

import Table from "./component/Table/Table";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from "../../component/Layout/Header/Header";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import Gallery2 from "../../assets/images/projects/gallery2.png";
import Gallery3 from "../../assets/images/projects/gallery3.png";
import Gallery4 from "../../assets/images/projects/gallery4.png";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getSlider} from "../../reduxToolkit/sliderSlice/extraReducer";
import Spinner from "../../component/Spinner";

const About = () => {
    const state = useLocation()
    const dispatch = useDispatch();

    const sliderData = useSelector((state) => state.sliderSlice.sliderData);
    const loading = useSelector((state) => state.sliderSlice.loading);

    const {t} = useTranslation();
    const heroData = {
        title: `${t("aboutPage.section1.htext")}`,
        description: `${t("aboutPage.section1.ptext")}`,
        pagePath: `${t("aboutPage.section1.foottext2")}`,
    }



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
    }
    useEffect(() => {
        dispatch(getSlider());
    }, []);

    if(loading) {
        return <Spinner/>
    }

    return (
        <div className="about ">
            <div className="page-about">
                <WhriteHeader/>
                <CouncilHero  {...heroData}/>
            </div>
            <div className="about_card container">
                <div className="about_card_left">
                    <img className="about_card_left_img" src={CardImg} alt="cardImg"/>
                </div>
                <div className="about_card_right">
                    <div className="about_card_right_text">{t("aboutPage.section2.htext1")}</div>
                    <div className="about_card_right_title">
                        {t("aboutPage.section2.ptext1-1")}
                    </div>
                    <div className="about_card_right_text">105 <span
                        className="about_card_right_text_info">{t("aboutPage.section2.ptext1-2")}</span> 2.4 mln <span
                        className="about_card_right_text_info">{t("aboutPage.section2.ptext1-3")}</span></div>
                    <div className="about_card_right_title">
                        {t("aboutPage.section2.ptext1-4")}
                    </div>

                </div>

                <div className="about_card_left">
                    <div className="about_card_left_boss">
                        <img className="sub" src={Rais} alt="Rais"/>
                        <div className="about_card_left_boss_level">{t("aboutPage.section2.person1-info")}</div>
                        <div className="about_card_left_boss_name">Sattarov Odiljon Berdimuradovich</div>
                    </div>
                    <div className="about_card_left_substitute">
                        <img className="sub" src={Urinbosar} alt=""/>
                        <div className="about_card_left_boss_level">{t("aboutPage.section2.person2-info")}</div>
                        <div className="about_card_left_boss_name">Tursunov Rovshan Xamidullayevich</div>
                    </div>

                </div>
                <div className="about_card_right">
                    <div className="about_card_right_text tops">{t("aboutPage.section2.htext2")}</div>
                    <div className="about_card_right_title toptext">
                        {t("aboutPage.section2.p-text2")}
                    </div>


                </div>
            </div>
            <div className="about_videos">
                <div>

                    <video autoPlay muted loop className="about_videos_links">
                        <source
                            src={`https://vatanparvarbackend.napaautomotive.uz/storage/${
                                JSON.parse(sliderData?.[1]?.video)[0].download_link
                            }`}
                        />
                    </video>
                </div>
            </div>
            <div className="about_direction container">
                <div className="about_direction_fon">
                    Fondnig tashkil topishi hamda tarixi haqida
                </div>
                <div className="about_direction_cards">
                    <p className="about_direction_cards_information">
                        Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish,
                        ularning
                        qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish,
                        vatandoshlar va ular tomonidan <br/>
                        Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish,
                        ularning
                        qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish,
                        vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli
                        sohalarda
                        faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali
                        yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi. Xorijda istiqomat qilayotgan
                        vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt
                        bilan
                        faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular
                        tomonidan
                        tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan
                        vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning
                        asosiy
                        maqsadlaridan biri hisoblanadi.
                    </p>

                </div>
            </div>
            <div className="">
                <div className="page-about increase ">

                    <div className="container">
                        <div className="about_fon">{t("aboutPage.section4.htext1")}</div>
                        <Table/>
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
                        <SwiperSlide><img src={Gallery2} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={Gallery3} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={Gallery4} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={Gallery2} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={Gallery3} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={Gallery4} alt=""/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
export default About;
