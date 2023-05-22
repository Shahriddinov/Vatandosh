import React from "react";
import "./city.scss";

import View3D from "../../components/view3D/View3D";
import Slider from "../../components/slider/Slider";
import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import { Spinner } from "../../../../../component";
import AboutUzbekistanVideos from "../../components/aboutUzbekistanVideos/AboutUzbekistanVideos";

import { useCityFetching } from "./hooks/useCityFetching";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const City = () => {
  const { error, singleCitySightseeing, singleCitySightseeingLoading } =
    useCityFetching();
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
          <h2>{singleCitySightseeing[1]?.name}</h2>
          <h1>
            {singleCitySightseeing[0]?.title} <br />
            {/* {singleCitySightseeing[0]?.content_title} */}
          </h1>
          <div className="city_hero_line" />
        </div>
        <div className="city_body container">
          {city_content_infos[0] ? (
            <div className="city_intro">
              <h1>{city_content_infos[0]?.title}</h1>
              <p>{city_content_infos[0]?.content}</p>
            </div>
          ) : null}
          <div className="city_videos">
            <h1>Видеоклипы</h1>
            <AboutUzbekistanVideos mediaData={videoData} />
          </div>
          {city_content_infos[1] ? (
            <div className="city_intro">
              <h1>{city_content_infos[1]?.title}</h1>
              <p>{city_content_infos[1]?.content}</p>
            </div>
          ) : null}
          <View3D />
          {city_content_infos[2] ? (
            <div className="city_intro">
              <h1>{city_content_infos[2]?.title}</h1>
              <p>{city_content_infos[2]?.content}</p>
            </div>
          ) : null}
          <AboutUzbekistanGallery allGallery={galeresData} />
          {city_content_infos[3] ? (
            <div className="city_intro">
              <h1>{city_content_infos[3]?.title}</h1>
              <p>{city_content_infos[3]?.content}</p>
            </div>
          ) : null}
          <Slider
            title="Другие туристические объекты в Ташкенте"
            data={sightseeingPlaces}
          />
        </div>
      </div>
    </>
  );
};

export default City;
