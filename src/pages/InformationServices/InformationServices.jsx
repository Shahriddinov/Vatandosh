import React, { useEffect } from "react";
import "./InformationServices.scss";
import Header from "../../component/Layout/Header/Header";
import { InformationServicesSlider } from "./InformationServicesSlider/InformationServicesSlider";
import { InformationServicesHero } from "./InformationServicesHero/InformationServicesHero";
import LatestNews from "../../component/LatestNews/LatestNews";
import Card from "../../component/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../reduxToolkit/newsSlice/extraReducer";
import PopularTags from "../../component/PopularTags/PopularTags";
import InformationServicesComponent from "./InformationServicesComponent/InformationServicesComponent";
import { Paginator } from "../../component/Paginator/Paginator";

const InformationServices = () => {
    const newsData = useSelector((state) => state.newsSlice.newsData.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const pagePath = {
        title: "Yangiliklar",
        path: [
            { id: 1, label: "Asosiy sahifa", path: "/" },
            { id: 2, label: "Yangiliklar ", path: "/information-service/news" },
        ],
    };
    return (
        <div className="news-page ">
            <Header />
            <main className="main container">
                <InformationServicesHero pagePath={pagePath} />
                <div className="main-content">
                    <div className="main-content-left">
                        <InformationServicesSlider />
                        <div className="main-content-left-cards">
                            {newsData?.map((card) => (
                                <div className="main-content-left-card" key={card.id}>
                                    <Card {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="main-content-right">
                        <InformationServicesComponent />
                        <LatestNews />
                        <PopularTags />
                    </div>
                </div>
                <Paginator />
            </main>
        </div>
    );
};
export default InformationServices;
