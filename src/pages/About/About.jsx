import React from "react";
import "./About.scss";
import CardImg from "../../assets/images/about-Card.svg"
import Rais from "../../assets/images/Rais.svg"
import Urinbosar from "../../assets/images/Substitute.jpg"
import Video from "../../assets/images/slider/slider_video.mp4"
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";
import  Photo1 from "../../assets/images/photo1.png"
import  Photo2 from "../../assets/images/photo2.png"
import  Photo3 from "../../assets/images/photo3.png"
import SliderVideo from "../../assets/images/slider/slider_video.mp4";
import Table from "./component/Table/Table";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from "../../component/Layout/Header/Header";

const About = () => {
    const heroData = {
        title: "Biz haqimizda",
        description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
        pagePath: "Biz haqimizda",
    }
    return (
        <div className="about ">
            <div className="page-about">
                <Header/>
                <CouncilHero  {...heroData}/>
            </div>
            <div className="about_card container">
                <div className="about_card_left">
                    <img src={CardImg} alt="cardImg"/>
                </div>
                <div className="about_card_right">
                    <div className="about_card_right_text">Fondnig vazifasi va maqsadi</div>
                    <div className="about_card_right_title">
                        Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish,
                        ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab
                        qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli
                        sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga
                        samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.
                    </div>
                    <div className="about_card_right_text">105 <span
                        className="about_card_right_text_info">Mamlakatda</span> 2.4 mln <span
                        className="about_card_right_text_info">Yurtdoshimiz</span></div>
                    <div className="about_card_right_title">Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani
                        atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini
                        yuksaltirish.
                    </div>

                </div>

                <div className="about_card_left">
                    <div className="about_card_left_boss">
                        <img className="sub" src={Rais} alt="Rais"/>
                        <div className="about_card_left_boss_level">Boshqaruv raisi</div>
                        <div className="about_card_left_boss_name">Sattarov Odiljon Berdimuradovich</div>
                    </div>
                    <div className="about_card_left_substitute">
                        <img className="sub" src={Urinbosar} alt=""/>
                        <div className="about_card_left_boss_level">Boshqaruv raisi o‘rinbosari</div>
                        <div className="about_card_left_boss_name">Tursunov Rovshan Xamidullayevich</div>
                    </div>

                </div>
                <div className="about_card_right">
                    <div className="about_card_right_text tops">Fondnig tashkil topishi hamda tarixi haqida</div>
                    <div className="about_card_right_title toptext">
                        Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish,
                        ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish.
                        Fondnig tashkil topishi hamda tarixi haqida
                        Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish,
                        ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab
                        qolish, vatandoshlar va ular tomonidan
                        Boshqaruv raisi
                        Boshqaruv raisi o‘rinbosari
                        Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish,
                        ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab
                        qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli
                        sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga
                        samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi. Xorijda istiqomat
                        qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va
                        ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish,
                        vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli
                        sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga
                        samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.
                        Sattarov Odiljon Berdimuradovich
                        Tursunov Rovshan Xamidullayevich
                    </div>


                </div>
            </div>
            <div className="about_videos">
                <video autoPlay muted loop className="about_videos_links">
                    <source src={Video}/>
                </video>
            </div>
            <div className="about_activity">
                <div className="about_activity_infos container">
                    <div className="about_activity_infos_fon">
                        Fond faoliyatining asosiy yo‘nalishlari
                    </div>
                    <div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Jamoat birlashmalari bilan hamkorlik
                            aloqalarini yo‘lga qo‘yish va rivojlantirish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Vatandoshlarning huquq va erkinliklarini himoya qilishga ko‘maklashish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep"> O‘zbek tili, madaniyati va an’analarini saqlab qolish va rivojlantirish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Yurtimizning boy ilmiy, madaniy va ma’naviy merosini keng targ‘ib qilish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Migratsiya va ta’lim sohalarida shartnomaviy-huquqiy hamkorlikni kengaytirish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Murakkab hayotiy vaziyatga tushib qolgan vatandoshlarni ijtimoiy qo‘llab-quvvatlash va huquqiy yordam ko‘rsatishga ko‘maklashish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Murakkab hayotiy vaziyatga tushib qolgan vatandoshlarni ijtimoiy qo‘llab-quvvatlash va huquqiy yordam ko‘rsatishga ko‘maklashish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Vatandoshlar tomonidan tashkil etilgan jamoat birlashmalari faoliyatini rag‘batlantirish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Xorijda o‘zbek milliy madaniy markazlarini tashkil etishda amaliy yordam ko‘rsatish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Vatandoshlarga madaniy-ma’rifiy tadbirlarni tashkil etishda ko‘maklashish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Vatandoshlarimizni respublika oliy ta’lim muassasalarida o‘zbek tili yo‘nalishi bo‘yicha ta’lim olishlariga ko‘mak ko‘rsatish
                        </div>
                    </div><div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Vatandoshlarimizni yurtimiz nufuzini oshirishga qaratilgan ilmiy, ijodiy izlanishlarini qo‘llab-quvvatlash
                        </div>
                    </div>
                    <div className="about_activity_infos_flexs">
                        <div className="about_activity_infos_flexs_dot"></div>
                        <div className="about_activity_infos_flexs_keep">Vatandoshlarni O‘zbekiston hududida tadbirkorlik, investitsiyaviy, ilmiy, madaniy va ma’rifiy faoliyat bilan shug‘ullanishga faol jalb qilish
                        </div>
                    </div>
                    <div className="about_activity_infos_fon">Fond tuzilmasi</div>
                    <Table/>
                </div>
            </div>
            <div className="about_fatherland container">
                Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish
                bizning oliy maqsadimizdir
            </div>
            <div className="about_caruosel">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}

                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src={Photo1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo2} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo3} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={Photo1} alt=""/></SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};
export default About;
