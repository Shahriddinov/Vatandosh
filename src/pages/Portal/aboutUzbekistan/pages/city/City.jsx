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

  const videoData = singleCitySightseeing?.city?.cityVideos;
  const galeresData = singleCitySightseeing?.city?.cityGalleries;
  const sightseeingPlaces = singleCitySightseeing?.city?.sightseeingPlaces;
  const contentInfo = singleCitySightseeing?.city?.cityContentInfo;
  const CityPhoto = singleCitySightseeing?.city["3DCityPhoto"];

  return (
    <>
      <div className="city">
        <div
          className="city_hero"
          style={{
            backgroundImage: `url(${PORTAL_IMAGE_URL}${singleCitySightseeing?.image})`,
          }}
        >
          <h2>{singleCitySightseeing?.city?.name}</h2>
          <h1>
            {singleCitySightseeing?.content_title} <br />
            {singleCitySightseeing?.text}
          </h1>
          <div className="city_hero_line" />
        </div>
        <div className="city_body container">
          {contentInfo[0] ? (
            <div className="city_intro">
              <h1>{contentInfo[0]?.title}</h1>
              <p>{contentInfo[0]?.content}</p>
            </div>
          ) : null}
          <div className="city_videos">
            <h1>Видеоклипы</h1>
            <AboutUzbekistanVideos mediaData={videoData} />
          </div>
          {contentInfo[1] ? (
            <div className="city_intro">
              <h1>{contentInfo[1]?.title}</h1>
              <p>{contentInfo[1]?.content}</p>
            </div>
          ) : null}
          <View3D data={CityPhoto} />
          {contentInfo[2] ? (
            <div className="city_intro">
              <h1>{contentInfo[2]?.title}</h1>
              <p>{contentInfo[2]?.content}</p>
            </div>
          ) : null}
          <AboutUzbekistanGallery allGallery={galeresData} />
          {contentInfo[3] ? (
            <div className="city_intro">
              <h1>{contentInfo[3]?.title}</h1>
              <p>{contentInfo[3]?.content}</p>
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
