import React from "react";
import "./city.scss";

import View3D from "../../components/view3D/View3D";
import Slider from "../../components/slider/Slider";
import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import { Spinner } from "../../../../../component";
import AboutUzbekistanVideos from "../../components/aboutUzbekistanVideos/AboutUzbekistanVideos";

import { useCityFetching } from "./hooks/useCityFetching";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useTranslation } from "react-i18next";

const City = () => {
  const { error, singleCitySightseeing, singleCitySightseeingLoading } =
    useCityFetching();
  const { t } = useTranslation();
  if (singleCitySightseeingLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  const videoData = singleCitySightseeing[1]?.city_videos;
  const galeresData = singleCitySightseeing[1]?.city_galleries;
  const sightseeingPlaces = singleCitySightseeing[1]?.sightseeing_places;
  const city_content_infos = singleCitySightseeing[1]?.city_content_infos;

  return (
    <>
      <div className="city">
        <div
          className="city_hero"
          style={{
            backgroundImage: `url(${PORTAL_IMAGE_URL}${singleCitySightseeing[0]?.image})`,
          }}
        >
          {/*<h2>{singleCitySightseeing[1]?.name}</h2>*/}
          {/*<h1>*/}
          {/*  {singleCitySightseeing[0]?.title} <br />*/}
          {/* {singleCitySightseeing[0]?.content_title} */}
          {/*</h1>*/}
          {/*<div className="city_hero_line" />*/}
        </div>
        <div className="city_body container">
          {videoData.length > 0 && (
            <div className="city_videos">
              <h1>{t("about_uzbekistan.video_clips")}</h1>
              <AboutUzbekistanVideos mediaData={videoData} />
            </div>
          )}
          {galeresData.length > 0 && (
            <AboutUzbekistanGallery allGallery={galeresData} />
          )}
          <Slider title={t("others")} data={sightseeingPlaces} />
        </div>
      </div>
    </>
  );
};

export default City;
