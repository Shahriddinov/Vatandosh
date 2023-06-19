import React, { useState } from "react";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import IntroSection from "./components/IntroSection/IntroSection";

import "./singlePage.scss";
import { SiteHero, Spinner } from "../../component";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSingleData } from "./hooks/useSingleData";
import { useEffect } from "react";
import { getAllProjects } from "../../reduxToolkit/AllProjectSlice/extraReducer";
import { useDispatch, useSelector } from "react-redux";
import FotoGallery from "../../component/FotoGallery/FotoGallery";
import { baseServerUrl } from "../../services/api/utils";

export const SinglePage = () => {
  const { projectsMenuLoading, data, compatriotsMenuLoading } = useSingleData();
  const { pageUrl } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [pageErr, setPageErr] = useState(pageUrl);
  const [searchId, setSearchId] = useState(null);
  const { projects } = useSelector((state) => state.AllProjectSlice);

  const dispatch = useDispatch();

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
  }, [data?.id, navigate, pageErr, search]);

  useEffect(() => {
    setSearchId(search?.slice(2));
  }, [search]);

  useEffect(() => {
    if (searchId === "4" || searchId === "5") {
      dispatch(getAllProjects());
    }
  }, [searchId, dispatch]);

  if (projectsMenuLoading || compatriotsMenuLoading) {
    return <Spinner position="full" />;
  }

  const styles = {
    backgroundImage: `url(${baseServerUrl}/${data?.background_image})`,
  };

  return (
    <div className="single-page">
      <div className="single-page__top" style={styles}>
        <WhriteHeader />
        <SiteHero data={data} />
      </div>
      <IntroSection data={data} />
      {searchId === "4" || searchId === "5" ? (
        <FotoGallery
          images={
            projects?.find((el) => el["menu_uz"] === searchId)?.fotogalareya
              ? projects?.find((el) => el["menu_uz"] === searchId)?.fotogalareya
              : null
          }
        />
      ) : pageErr === "publicevents" ? (
        <FotoGallery images={data?.photogallery} />
      ) : null}
    </div>
  );
};

export default SinglePage;
