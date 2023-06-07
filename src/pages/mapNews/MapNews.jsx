import { useState } from "react";

import "./mapNews.scss";
import { Pagination, Spinner } from "../../component";
import Header from "../../component/Layout/Header/Header";
import { useMapsNewsFetching } from "./hooks/useMapsNewsFetching";
import PortalCard from "../Portal/components/portalCard/PortalCard";
import { paginationNews } from "./extra";
import { useTranslation } from "react-i18next";

const MapNews = () => {
  const [activePage, setActivePage] = useState(1);

  const { countryNewsData, countryNewsDataLoading, error } =
    useMapsNewsFetching();

  const { t } = useTranslation();

  if (countryNewsDataLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  const { totalPagination, newData } = paginationNews({
    data: countryNewsData?.posts,
    page: activePage,
    count: 8,
  });

  const fetchingData = (num) => {
    setActivePage(num);
  };

  return (
    <>
      <Header />
      <div className="map-news">
        <div className="container">
          <h2 className="map-news__map-news-text">{t("news")}</h2>
          <div className="map-news__body">
            {countryNewsData?.posts.length ? (
              newData.map((item, index) => (
                <PortalCard
                  key={index}
                  {...item}
                  pathUrl="portal-category/community-association"
                />
              ))
            ) : (
              <p>{t("no_news")}</p>
            )}
          </div>
          {totalPagination >= 2 ? (
            <Pagination
              count={totalPagination}
              page={activePage}
              paginationFetching={fetchingData}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MapNews;
