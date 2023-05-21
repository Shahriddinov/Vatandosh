import React from "react";

import AboutUzbekistanHero from "../../components/aboutUzbekistanHero/AboutUzbekistanHero";
import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import View3D from "../../components/view3D/View3D";
import Slider from "../../components/slider/Slider";

import "./aboutUzbekistanHome.scss";
import { useLocation, useOutletContext } from "react-router-dom";
import { useAboutHomeFetching } from "./hooks/useAboutHomeFetching";
import { Spinner } from "../../../../../component";

const AboutUzbekistanHome = () => {
  const { menu } = useOutletContext();
  const { pathname } = useLocation();
  const heroData = menu.find((el) => el.url === pathname);
  const {
    allCitySightseeingLoading,
    allCitySightseeing,
    allCity3dLoading,
    allGalleryLoading,
    allGallery,
  } = useAboutHomeFetching();

  if (allCitySightseeingLoading || allCity3dLoading || allGalleryLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="about-uzbekistan-home">
      <div className="container">
        <AboutUzbekistanHero data={JSON.parse(heroData.image)} />
        {heroData.page_menu_contents[0] ? (
          <div className="about-uzbekistan-home__open-uzbekistan">
            <h2 className="about-uzbekistan-title">
              {heroData.page_menu_contents[0].title}
            </h2>
            <p>{heroData.page_menu_contents[0].text}</p>
          </div>
        ) : null}
        <Slider title="Туристические объекты" data={allCitySightseeing?.data} />
        <View3D />
        <AboutUzbekistanGallery allGallery={allGallery} />
        {heroData.page_menu_contents[1] ? (
          <div className="about-uzbekistan-home__open-uzbekistan">
            <h2 className="about-uzbekistan-title">
              {heroData.page_menu_contents[1].title}
            </h2>
            <p>{heroData.page_menu_contents[1].text}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AboutUzbekistanHome;
