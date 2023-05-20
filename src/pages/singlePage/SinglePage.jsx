import React, { useState } from "react";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import IntroSection from "./components/IntroSection/IntroSection";

import "./singlePage.scss";
import { SiteHero, Spinner } from "../../component";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSingleData } from "./hooks/useSingleData";
import { useEffect } from "react";

export const SinglePage = () => {
  const { projectsMenuLoading, data, compatriotsMenuLoading } = useSingleData();
  const { pageUrl } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [pageErr, setPageErr] = useState(pageUrl);

  useEffect(() => {
    if (
      pageErr !== "categoryshows" &&
      pageErr !== "publicevents" &&
      search?.slice(2) !== data?.id?.toString(10)
    ) {
      navigate("/not-found");
    } else if (
      pageErr !== "columns" &&
      pageErr !== "categoryshows" &&
      pageErr !== "publicevents"
    ) {
      navigate("/not-found");
    }
  }, []);

  if (projectsMenuLoading || compatriotsMenuLoading) {
    return <Spinner position="full" />;
  }

  const styles = {
    backgroundImage: `url(https://vatanparvarbackend.napaautomotive.uz/storage/${data?.background_image})`,
  };

  return (
    <div className="single-page">
      <div className="single-page__top" style={styles}>
        <WhriteHeader />
        <SiteHero data={data} />
      </div>
      <IntroSection data={data} />
    </div>
  );
};

export default SinglePage;
