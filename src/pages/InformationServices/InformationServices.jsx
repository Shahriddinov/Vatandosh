import React, { useEffect } from "react";
import "./InformationServices.scss";
import Header from "../../component/Layout/Header/Header";
import { InformationServicesSlider } from "./InformationServicesSlider/InformationServicesSlider";
import { InformationServicesHero } from "./InformationServicesHero/InformationServicesHero";
import LatestNews from "../../component/LatestNews/LatestNews";
import Card from "../../component/card/Card";
import { useDispatch, useSelector } from "react-redux";
import PopularTags from "../../component/PopularTags/PopularTags";
import InformationServicesComponent from "./InformationServicesComponent/InformationServicesComponent";
import { Paginator } from "../../component/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { getInf } from "../../reduxToolkit/informationServicesSlice/extraReducer";

import newsIcon from "../../assets/images/navMenuIcons/informationService/newsIcon.svg";
import eventsIcon from "../../assets/images/navMenuIcons/informationService/eventsIcon.svg";
import mediaIcon from "../../assets/images/navMenuIcons/informationService/mediaIcon.svg";
import graphIcon from "../../assets/images/navMenuIcons/informationService/graphIcon.svg";
import coountryManIcon from "../../assets/images/navMenuIcons/informationService/countryManIcon.svg";
import { useTranslation } from "react-i18next";

const InformationServices = () => {
  const data = useSelector((state) => state.informationServicesSlice.data);
  const loading = useSelector(
    (state) => state.informationServicesSlice.loading
  );
  const dispatch = useDispatch();
  const { pageName } = useParams();
  const { t } = useTranslation();

  const pagePath = {
    title: `${t(pageName)}`,
    path: [
      { id: 1, label: `${t("mainPage")}`, path: "/" },
      { id: 2, label: `${t(pageName)}`, path: `/information-service/${pageName}` },
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
      path: `${t("countrymanMagazine")}`,
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

  useEffect(() => {
    dispatch(getInf(pageName));
  }, [dispatch, pageName]);

  if (loading) {
    return <p>Loading...</p>;
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
            {data.map((card) => (
              <div className="main-content-card" key={card.id}>
                <Card {...card} pathUrl={pageName} />
              </div>
            ))}
          </div>
        </div>
        <Paginator />
      </main>
    </div>
  );
};
export default InformationServices;
