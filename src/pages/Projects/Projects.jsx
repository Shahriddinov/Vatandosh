import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.scss'
import SliderData from './data'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ArrowDown from '../../assets/images/icons/arrowDown.svg'

import Participate from '../../assets/images/projects/participate.png'
import Pattern1 from '../../assets/images/projects/patternLeft.svg'
import Pattern2 from '../../assets/images/projects/patternCenter.svg'
import Pattern3 from '../../assets/images/projects/patternRight.svg'
import Gallery2 from '../../assets/images/projects/gallery2.png'
import Gallery3 from '../../assets/images/projects/gallery3.png'
import Gallery4 from '../../assets/images/projects/gallery4.png'

const Projects = () => {

    const sliderRef = useRef(null);

    const [numVisibleDivs, setNumVisibleDivs] = useState(0);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 375) {
            setNumVisibleDivs(3);
        } else {
            setNumVisibleDivs(SliderData.length);
        }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slicedData = SliderData.slice(0, numVisibleDivs)

    const handleShowMore = () => {
        if ((SliderData.length - numVisibleDivs) >= 3) {
            setNumVisibleDivs(numVisibleDivs + 3);
        } else {
            setNumVisibleDivs(SliderData.length)
        }
    };

    const handleShowLess = () => {
        setNumVisibleDivs(3)
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
                    centerPadding: '66px',
                }
            },
            {
            breakpoint: 650,
                settings: {
                    slidesToShow: numVisibleDivs,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: true, // Set vertical display mode
                    verticalSwiping: false,  
                }
            }
        ]
        
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
    }
    
    const heroData = {
        title: "Loyihalar",
        description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
        pagePath: "Loyihalar",
    }

    return (
        <div className="projects">
            <div className="projects__top">
                <WhriteHeader />
                <CouncilHero {...heroData} />
            </div>
            <div className="projects__body container">
                <div className="projects__all">
                    <div className="top">
                        <div className="title">
                            <h1>Biznig barcha loyihalar</h1>
                            <p>Chet elda yashayotgan yurtdoshlarimizni hayoti bilan ham nafas bolishingiz mumkin!</p>
                        </div>
                        <div className="carousel__buttons">
                            <button className="carousel__button" onClick={() => sliderRef.current.slickPrev()}>
                            <FiChevronLeft size={20} />
                                </button>
                            <button className="carousel__button" onClick={() => sliderRef.current.slickNext()}>
                                <FiChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                    <Slider {...settings} ref={sliderRef}>
                        { slicedData.map((element) => {
                            console.log(element)
                            return (
                                <div className="slider__element" key={element.id}>
                                    <div className="hashtag">
                                        <div className="hashtag__images">
                                            <div className="images__left">
                                                <img src={element.image1} alt="" />
                                                <img src={element.image2} alt="" />
                                            </div>
                                            <div className="images__right">
                                                <img src={element.image3} alt="" />
                                                <img src={element.image4} alt="" />
                                            </div>
                                        </div>
                                        <div className="hashtag__info">
                                            <h4>"{element.title}" rukni</h4>
                                            <p>{element.dataCount} ta malumot mavjud</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </Slider>
                    { numVisibleDivs === SliderData.length ?
                        <button className="show__more" onClick={handleShowLess}>
                            <img src={ArrowDown} alt="" className='rotate180'/>
                            Kamroq ko'rish
                        </button>
                        :
                        <button className="show__more" onClick={handleShowMore}>
                            <img src={ArrowDown} alt="" />
                            Ko'proq ko'rish
                        </button>
                    }
                    <div className="participate">
                        <div className="participate__left">
                            <img src={Pattern1} alt="" className='pattern__left'/>
                            <img src={Pattern2} alt="" className='pattern__center'/>
                            <img src={Pattern3} alt="" className='pattern__right'/>
                            <h3>Loyihada ishtirok eting</h3>
                            <p>Bizning loyihalarda ishtirok etish istagingiz bo‘lsa ariza to‘ldiriring va loyiha ishtirokchisiga aylaning!</p>
                            <button>Ishtirok etish</button>
                        </div>
                        <img src={Participate} alt="" className='participate__img'/>
                    </div>
                </div>
            </div>
            <div className="projects__caruosel">
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
    )
}

export default Projects