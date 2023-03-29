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
// import Spinner from "../../component/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { getInf } from "../../reduxToolkit/informationServicesSlice/extraReducer";

const InformationServices = () => {
  const data = useSelector((state) => state.informationServicesSlice.data);
  const loading = useSelector(
    (state) => state.informationServicesSlice.loading
  );
  const dispatch = useDispatch();
  const { pageName } = useParams();

  const pagePath = {
    title: `${pageName}`,
    path: [
      { id: 1, label: "Asosiy sahifa", path: "/" },
      { id: 2, label: "Yangiliklar ", path: "/information-service/news" },
    ],
  };

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
            <InformationServicesSlider />
          </div>
          <div className="main-content-right">
            <InformationServicesComponent />
            <LatestNews />
            <PopularTags />
          </div>
          <div className="main-content-cards">
            {data.map((card) => (
              <div className="main-content-card" key={card.id}>
                <Card {...card} />
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
