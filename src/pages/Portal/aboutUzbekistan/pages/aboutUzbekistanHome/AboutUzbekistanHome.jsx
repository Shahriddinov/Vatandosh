import React from "react";

import AboutUzbekistanHero from "../../components/aboutUzbekistanHero/AboutUzbekistanHero";
import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import View3D from "../../components/view3D/View3D";
import Slider from "../../components/slider/Slider";

import "./aboutUzbekistanHome.scss";
import { useLocation, useOutletContext } from "react-router-dom";
import { useAboutHomeFetching } from "./hooks/useAboutHomeFetching";
import { Spinner } from "../../../../../component";
import { useTranslation } from "react-i18next";

const AboutUzbekistanHome = () => {
  const { menu } = useOutletContext();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const heroData = menu.find((el) => el.url === pathname);
  const {
    allCitySightseeingLoading,
    allCitySightseeing,
    allGalleryLoading,
    allGallery,
  } = useAboutHomeFetching();

  if (allCitySightseeingLoading || allGalleryLoading) {
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
        <Slider
          title={t("about_uzbekistan.tourist_sites")}
          data={allCitySightseeing?.data}
        />
        <View3D />
        <AboutUzbekistanGallery allGallery={allGallery?.data} />
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
