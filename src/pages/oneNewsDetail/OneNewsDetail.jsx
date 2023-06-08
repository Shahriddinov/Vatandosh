import React from "react";

import "./oneNewsDetail.scss";
import { SiteNewsDetail, Spinner } from "../../component";
import { useOneNewsDetailFetching } from "./hooks/useOneNewsDetailFetching";

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
  return (
    <div className="one-news-detail">
      <SiteNewsDetail
        latestNews={latestNews}
        detailData={detailData}
        category={null}
      />
    </div>
  );
};

export default OneNewsDetail;
