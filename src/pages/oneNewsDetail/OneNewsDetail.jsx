import React from "react";

import "./oneNewsDetail.scss";
import { SiteNewsDetail, Spinner } from "../../component";
import { useOneNewsDetailFetching } from "./hooks/useOneNewsDetailFetching";
import Header from "../../component/Layout/Header/Header";

const OneNewsDetail = () => {
  const {
    latestNewsLoading,
    latestNews,
    detailData,
    siteNewsDetailLoading,
    error,
  } = useOneNewsDetailFetching();
  if (siteNewsDetailLoading || latestNewsLoading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error}</p>;
  }

  console.log(latestNews);
  return (
    <div className="one-news-detail">
      <Header />
      <SiteNewsDetail latestNews={latestNews} detailData={detailData} />
    </div>
  );
};

export default OneNewsDetail;
