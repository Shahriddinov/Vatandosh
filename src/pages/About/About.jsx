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

const About = () => {
  const state = useLocation();
  console.log(state);
  const heroData = {
    title: "Biz haqimizda",
    description:
      "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
    pagePath: "Biz haqimizda",
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
      title:
        "Jamoat birlashmalari bilan hamkorlik aloqalarini yo‘lga qo‘yish va rivojlantirish",
      backgroundImg: Partners,
    },
    {
      imgs: Law,
      title:
        "Vatandoshlarning huquq va erkinliklarini himoya qilishga ko‘maklashish Vatandoshlarning\n" +
        "                            huquq va erkinliklarini himoya qilishga ko‘maklashish",
      backgroundImg: Laws,
    },
    {
      imgs: Til,
      title:
        "O‘zbek tili, madaniyati va an’analarini saqlab qolish va rivojlantirish",
      backgroundImg: Language,
    },
    {
      imgs: Book,
      title:
        "Yurtimizning boy ilmiy, madaniy va ma’naviy merosini keng targ‘ib qilish",
      backgroundImg: BookWhite,
    },
    {
      imgs: Student,
      title:
        "Migratsiya va ta’lim sohalarida shartnomaviy-huquqiy hamkorlikni kengaytirish",
      backgroundImg: Students,
    },
    {
      imgs: Child,
      title:
        "Murakkab hayotiy vaziyatga tushib qolgan vatandoshlarni ijtimoiy qo‘llab-quvvatlash va huquqiy yordam ko‘rsatishga ko‘maklashish",
      backgroundImg: Childs,
    },
    {
      imgs: Home,
      title:
        "Vatandoshlar tomonidan tashkil etilgan jamoat birlashmalari faoliyatini rag‘batlantirish",
      backgroundImg: Homes,
    },

    {
      imgs: Togather,
      title:
        "Xorijda o‘zbek milliy madaniy markazlarini tashkil etishda amaliy yordam ko‘rsatish",
      backgroundImg: Togathers,
    },
    {
      imgs: StarBag,
      title:
        "Vatandoshlarga madaniy-ma’rifiy tadbirlarni tashkil\n" +
        "etishda ko‘maklashish",
      backgroundImg: StarBags,
    },
    {
      imgs: Latter,
      title:
        "Vatandoshlarimizni respublika oliy ta’lim muassasalarida o‘zbek tili yo‘nalishi bo‘yicha ta’lim olishlariga ko‘mak ko‘rsatish",
      backgroundImg: Latters,
    },
    {
      imgs: ThreeStar,
      title:
        "Vatandoshlarimizni yurtimiz nufuzini oshirishga qaratilgan ilmiy, ijodiy izlanishlarini qo‘llab-quvvatlash",
      backgroundImg: ThreeStars,
    },
    {
      imgs: Char,
      title:
        "Vatandoshlarni O‘zbekiston hududida tadbirkorlik, investitsiyaviy, ilmiy, madaniy va ma’rifiy faoliyat bilan shug‘ullanishga faol jalb qilish",
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
            Fondnig vazifasi va maqsadi
          </div>
          <div className="about_card_right_title">
            Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida
            yanada jipslashtirish, ularning qalbi va ongida yurt bilan
            faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish,
            vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini
            qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan
            vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga
            samarali yo‘naltirish Fondning asosiy maqsadlaridan biri
            hisoblanadi.
          </div>
          <div className="about_card_right_text">
            105 <span className="about_card_right_text_info">Mamlakatda</span>{" "}
            2.4 mln{" "}
            <span className="about_card_right_text_info">Yurtdoshimiz</span>
          </div>
          <div className="about_card_right_title">
            Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida
            yanada jipslashtirish, ularning qalbi va ongida yurt bilan
            faxrlanish tuyg‘usini yuksaltirish.
          </div>
        </div>

        <div className="about_card_left">
          <div className="about_card_left_boss">
            <img className="sub" src={Rais} alt="Rais" />
            <div className="about_card_left_boss_level">Boshqaruv raisi</div>
            <div className="about_card_left_boss_name">
              Sattarov Odiljon Berdimuradovich
            </div>
          </div>
          <div className="about_card_left_substitute">
            <img className="sub" src={Urinbosar} alt="" />
            <div className="about_card_left_boss_level">
              Boshqaruv raisi o‘rinbosari
            </div>
            <div className="about_card_left_boss_name">
              Tursunov Rovshan Xamidullayevich
            </div>
          </div>
        </div>
        <div className="about_card_right">
          <div className="about_card_right_text tops">
            Fondnig tashkil topishi hamda tarixi haqida
          </div>
          <div className="about_card_right_title toptext">
            Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida
            yanada jipslashtirish, ularning qalbi va ongida yurt bilan
            faxrlanish tuyg‘usini yuksaltirish. Fondnig tashkil topishi hamda
            tarixi haqida Xorijda istiqomat qilayotgan vatandoshlarni tarixiy
            Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt
            bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab
            qolish, vatandoshlar va ular tomonidan Boshqaruv raisi Boshqaruv
            raisi o‘rinbosari Xorijda istiqomat qilayotgan vatandoshlarni
            tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va
            ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy
            o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan
            jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat
            yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz
            taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan
            biri hisoblanadi. Xorijda istiqomat qilayotgan vatandoshlarni
            tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va
            ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy
            o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan
            jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat
            yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz
            taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan
            biri hisoblanadi. Sattarov Odiljon Berdimuradovich Tursunov Rovshan
            Xamidullayevich
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
          Fond faoliyatining asosiy yo‘nalishlari
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
            <div className="about_fon">Fond tuzilmasi</div>
            <Table />
          </div>
        </div>
        <div className="about_fatherland container">
          Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt
          bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab
          qolish bizning oliy maqsadimizdir
        </div>
        <div className="about_caruosel">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            initialSlide={2}
            {...swiperParams}>
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
