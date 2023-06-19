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
    type,
  } = useOneNewsDetailFetching();
  if (siteNewsDetailLoading || latestNewsLoading) {
    return <Spinner />;
  } else if (type === "event" && detailData.image.split("/")[0] === "posts") {
    return <Spinner />;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="one-news-detail">
      <Header />
      <SiteNewsDetail
        type={type}
        latestNews={latestNews}
        detailData={detailData}
      />
    </div>
  );
};

export default OneNewsDetail;
