import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.scss";
import SliderData from "./data";
import ParticipateModal from "./Participate/Participate";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ArrowDown from "../../assets/images/icons/arrowDown.svg";

import hand from "../../assets/images/projects/hand.png";
import Pattern1 from "../../assets/images/projects/patternLeft.svg";
import Pattern2 from "../../assets/images/projects/patternCenter.svg";
import Pattern3 from "../../assets/images/projects/patternRight.svg";
import { ToastContainer } from "react-toastify";
import {
  aboutAllProjects,
  getAllProjects,
} from "../../reduxToolkit/AllProjectSlice/extraReducer";
import { Spinner } from "../../component";
import { getProjectsMenu } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";
import { baseServerUrl } from "../../services/api/utils";
import FotoGallery from "../../component/FotoGallery/FotoGallery";

const Projects = () => {
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const sliderRef = useRef(null);

  const [modalOn, setModalOn] = useState(false);

  const dispatch = useDispatch();
  const { projects, projectsLoading, projectsAbout, projectsAboutLoading } =
    useSelector((state) => state.AllProjectSlice);

  const { menuData, menuLoading } = useSelector((state) => state.peaceful);

  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(getProjectsMenu());
    dispatch(aboutAllProjects());
  }, [dispatch]);

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
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
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

  const heroData = {
    title: `${t("projects_page.hero_title")}`,
    description: (
      <p
        dangerouslySetInnerHTML={{
          __html: projectsAbout[`text_${lng}`],
        }}
      ></p>
    ),
    pagePath: `${t("projects_page.page_path")}`,
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
        {projectsLoading || menuLoading || projectsAboutLoading ? (
          <Spinner position={"full"} />
        ) : null}
        <div className="projects__body container">
          <div className="projects__all">
            <div className="top">
              <div className="title">
                <h1>{t("projects_page.carousel_title")}</h1>
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
              {menuData.length && projects.length
                ? projects.map((element) => {
                    return (
                      <div className="slider__element" key={element.id}>
                        <div className="hashtag">
                          <div className="hashtag__images">
                            {JSON.parse(element?.images).map((el, index) => (
                              <img
                                key={index}
                                src={`${baseServerUrl}/${el}`}
                                alt=""
                              />
                            ))}
                          </div>
                          <div className="hashtag__info">
                            <h4>
                              {menuData.find(
                                (menu) => "" + menu.id === element["menu_uz"]
                              )
                                ? menuData.find(
                                    (menu) =>
                                      "" + menu.id === element["menu_uz"]
                                  )[`menu_${lng}`]
                                : null}
                            </h4>
                            <p>
                              {t("number")} {element.count}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </Slider>
            {numVisibleDivs === SliderData.length ? (
              <button className="show__more" onClick={handleShowLess}>
                <img src={ArrowDown} alt="" className="rotate180" />
                {t("projects_page.see-less")}
              </button>
            ) : (
              <button className="show__more" onClick={handleShowMore}>
                <img src={ArrowDown} alt="" />
                {t("projects_page.see-more")}
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
              <img src={hand} alt="" className="participate__img" />
            </div>
          </div>
        </div>
        <FotoGallery images={projectsAbout?.images} />
      </div>
      {modalOn && (
        <>
          <WhriteHeader />
          <ParticipateModal toggleModal={toggleModal} lng={lng} t={t} />
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Projects;
