import React, { useState } from "react";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import SiteHero from "../../component/siteHero/SiteHero";
import IntroSection from "./components/IntroSection/IntroSection";
import bgImg from "../../assets/images/bg-img.png";
import bgImg2 from "../../assets/images/compatriots/page-bg.png";

import "./singlePage.scss";
import { Spinner } from "../../component";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSingleData } from "./hooks/useSingleData";
import { useEffect } from "react";

export const SinglePage = () => {
  const { projectsMenuLoading, data } = useSingleData();
  const { pageUrl } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [pageErr, setPageErr] = useState(pageUrl);

  useEffect(() => {
    if (
      pageErr !== "categoryshows" &&
      pageErr !== "publicevents" &&
      search.slice(2) !== data?.id.toString(10)
    ) {
      navigate("/not-found");
    } else if (pageErr !== "columns") {
      navigate("/not-found");
    }
  }, []);

  if (projectsMenuLoading) {
    return (
      <div className="spinner_box">
        <Spinner />
      </div>
    );
  }

  const styles = {
    backgroundImage:
      pageUrl === "publicevents"
        ? `url(${bgImg2})`
        : pageUrl === "categoryshows"
        ? `url(${bgImg})`
        : `url(https://vatanparvarbackend.napaautomotive.uz/storage/${data?.background_image})`,
  };

  return (
    <div className="single-page">
      <div className="single-page__top" style={styles}>
        <WhriteHeader />
        <SiteHero data={data} />
      </div>
      <IntroSection />
    </div>
  );
};

export default SinglePage;
