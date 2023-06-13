import React from "react";
import "./InformationServices.scss";
import Header from "../../component/Layout/Header/Header";
import { InformationServicesSlider } from "./InformationServicesSlider/InformationServicesSlider";
import { InformationServicesHero } from "./InformationServicesHero/InformationServicesHero";
import LatestNews from "../../component/LatestNews/LatestNews";
import Card from "../../component/card/Card";
import PopularTags from "../../component/PopularTags/PopularTags";
import InformationServicesComponent from "./InformationServicesComponent/InformationServicesComponent";

import newsIcon from "../../assets/images/navMenuIcons/informationService/newsIcon.svg";
import eventsIcon from "../../assets/images/navMenuIcons/informationService/eventsIcon.svg";
import mediaIcon from "../../assets/images/navMenuIcons/informationService/mediaIcon.svg";
import graphIcon from "../../assets/images/navMenuIcons/informationService/graphIcon.svg";
import coountryManIcon from "../../assets/images/navMenuIcons/informationService/countryManIcon.svg";
import Spinner from "../../component/Spinner/Spinner";
import { useInformationServicesPagination } from "./hooks/useInformationServicesPagination";
import { Pagination } from "../../component";

const InformationServices = () => {
  const {
    paginationFetching,
    page,
    paginationData,
    paginationCount,
    paginationLoading,
    loading,
    data,
    pageName,
    t,
  } = useInformationServicesPagination();

  const pagePath = {
    title: `${t(pageName)}`,
    path: [
      { id: 1, label: `${t("mainPage")}`, path: "/" },
      {
        id: 2,
        label: `${t(pageName)}`,
        path: `/information-service/${pageName}`,
      },
    ],
  };
  const pathPages = [
    {
      id: 1,
      path: `${t("events")}`,
      icon: eventsIcon,
      link: "events",
    },
    {
      id: 2,
      path: `${t("mediateka")}`,
      icon: mediaIcon,
      link: "mediateka",
    },
    {
      id: 3,
      path: `${t("infographics")}`,
      icon: graphIcon,
      link: "infographics",
    },
    {
      id: 4,
      path: `${t("compatriotMagazine")}`,
      icon: coountryManIcon,
      link: "compatriotMagazine",
    },
    {
      id: 5,
      path: `${t("news")}`,
      icon: newsIcon,
      link: "news",
    },
  ];

  if (paginationLoading || loading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="news-page ">
      <Header />
      <main className="main container">
        <InformationServicesHero pagePath={pagePath} />
        <div className="main-content">
          <div className="main-content-slider">
            <InformationServicesSlider data={data} />
          </div>
          <div className="main-content-right">
            <InformationServicesComponent pathPages={pathPages} />
            <LatestNews />
            <PopularTags />
          </div>
          <div className="main-content-cards">
            {/* {pageName === "news"
              ? data?.news.map((card) => (
                  <div className="main-content-card" key={card.id}>
                    <Card {...card} pathUrl={pageName} />
                  </div>
                ))
              : ""} */} 
            {pageName === "news"
              ? data?.news?.map((card) => (
                  <div className="main-content-card" key={card.id}>
                    <Card {...card} pathUrl={pageName} />
                  </div>
                ))
              : pageName === "events"
              ? data?.events?.data?.map((card) => (
                  <div className="main-content-card" key={card.id}>
                    <Card {...card} pathUrl={pageName} />
                  </div>
                ))
              : paginationData["0"]?.data?.map((card) => (
                  <div className="main-content-card" key={card.id}>
                    <Card {...card} pathUrl={pageName} />
                  </div>
                ))}
          </div>
        </div>
        {paginationCount >= 2 ? (
          <Pagination
            page={page}
            paginationFetching={paginationFetching}
            count={paginationCount}
          />
        ) : null}
        <div className="main-popular-tags">
          <PopularTags />
        </div>
      </main>
    </div>
  );
};
export default InformationServices;
