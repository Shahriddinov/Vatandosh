import React, { useState } from "react";

import { MyButton, Spinner } from "../../../../../component";

import "./visualInformation.scss";
import { useVisualInformation } from "./hooks/useVisualInformation";
import AboutUzbekistanVideos from "../../components/aboutUzbekistanVideos/AboutUzbekistanVideos";
import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import { paginationCount } from "../../../../../helpers/extraFunction";
import { getAllCityVideo } from "../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";

const VisualInformation = () => {
  const {
    error,
    allCityVideoLoading,
    allCityVideo,
    activeMenu,
    lan,
    allGalleryLoading,
    allGallery,
    dispatch,
  } = useVisualInformation();
  const [activePage, setActivePage] = useState(1);

  if (allGalleryLoading || allCityVideo?.length <= 0) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  const moreData = () => {
    setActivePage((prev) => prev + 1);
    dispatch(getAllCityVideo({ paginate: (activePage + 1) * 9 }));
  };

  const countPagination = !allCityVideoLoading
    ? paginationCount(allCityVideo?.total, 9)
    : 0;
  return (
    <div className="visual-information">
      <div className="container">
        <div className="visual-information__hero">
          <h2>{activeMenu.name}</h2>
        </div>
        {activeMenu?.page_menu_contents[0] ? (
          <div className="visual-information__open-uzbekistan">
            <h2 className="about-uzbekistan-title">
              {activeMenu?.page_menu_contents[0]?.title}
            </h2>
            <p>{activeMenu?.page_menu_contents[0]?.text}</p>
          </div>
        ) : null}
        <div className="visual-information__videos">
          <AboutUzbekistanVideos
            mediaData={allCityVideo?.data}
            lan={lan}
            countPagination={countPagination}
            activePage={activePage}
            moreData={moreData}
          />
          {allCityVideoLoading ? <Spinner /> : null}
        </div>
        {activeMenu?.page_menu_contents[1] ? (
          <div className="visual-information__open-uzbekistan">
            <h2 className="about-uzbekistan-title">
              {activeMenu?.page_menu_contents[1]?.title}
            </h2>
            <p>{activeMenu?.page_menu_contents[1]?.text}</p>
          </div>
        ) : null}
        <AboutUzbekistanGallery allGallery={allGallery.data} />
      </div>
    </div>
  );
};

export default VisualInformation;
