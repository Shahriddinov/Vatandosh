import React from "react";
import "./city.scss";

import Slider from "../../components/slider/Slider";
import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import { Spinner } from "../../../../../component";
import AboutUzbekistanVideos from "../../components/aboutUzbekistanVideos/AboutUzbekistanVideos";

import { useCityFetching } from "./hooks/useCityFetching";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useTranslation } from "react-i18next";

const City = () => {
  const { error, singleCitySightseeing, singleCitySightseeingLoading, idCity } =
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
  // const city_content_infos = singleCitySightseeing[1]?.city_content_infos;

  const heroData =
    singleCitySightseeing.length > 0 &&
    singleCitySightseeing[1]?.sightseeing_places?.length > 0
      ? singleCitySightseeing[1]?.sightseeing_places?.find(
          (el) => el?.id === idCity * 1
        )
      : {};
  return (
    <>
      <div className="city">
        <div
          className="city_hero"
          style={{
            backgroundImage: `url(${PORTAL_IMAGE_URL}${heroData?.image})`,
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
