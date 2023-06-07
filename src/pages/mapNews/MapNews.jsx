import { useState } from "react";

import "./mapNews.scss";
import { Card, Pagination, Spinner } from "../../component";
import Header from "../../component/Layout/Header/Header";
import { useMapsNewsFetching } from "./hooks/useMapsNewsFetching";
import PortalCard from "../Portal/components/portalCard/PortalCard";

const MapNews = () => {
  const { countryNewsData, countryNewsDataLoading, error } =
    useMapsNewsFetching();
  const [activePage, setActivePage] = useState(1);

  if (countryNewsDataLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Header />
      <div className="map-news">
        <div className="container">
          <h2 className="map-news__map-news-text">News:</h2>
          <div className="map-news__body">
            {countryNewsData?.posts.length
              ? countryNewsData?.posts?.map((item, index) => (
                  <PortalCard key={index} {...item} pathUrl="/" />
                ))
              : null}
          </div>
          {/* {paginationCount >= 2 ? (
            <Pagination
              count={paginationCount}
              page={activePage}
              paginationFetching={fetchingData}
            />
          ) : null} */}
        </div>
      </div>
    </>
  );
};

export default MapNews;
