import React, { useEffect } from "react";
import Hero from "../../component/Hero/Hero";
import News from "../../component/News/News";
// import Partners from "../../component/Partners/Partners";
import Peaceful from "../../component/peaceful/Peaceful";
import InteractiveServices from "../../component/interactiveServices/InteractiveServices";
import MapsHome from "../../component/maps-home/MapsHome";
import Partners from "../../component/partners/Partners";
import { useDispatch, useSelector } from "react-redux";
import { getPeaceful } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";
import Header from "../../component/Layout/Header/Header";
import { getSlider } from "../../reduxToolkit/sliderSlice/extraReducer";
import { t } from "i18next";
import HomeWebinarSlider from "../../component/homeWebinarSlider/HomeWebinarSlider";

const Home = () => {
  const dispatch = useDispatch();

  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const error = useSelector((state) => state.sliderSlice.error);
  const loading = useSelector((state) => state.sliderSlice.loading);
  console.log(sliderData);

  useEffect(() => {
    dispatch(getPeaceful());
    dispatch(getSlider());
  }, [dispatch]);

  return (
    <div className="home">
      <Header />
      <Hero sliderData={sliderData} error={error} loading={loading} />
      <News />
      <HomeWebinarSlider
        sliderData={sliderData}
        error={error}
        loading={loading}
      />
      <Peaceful />
      <InteractiveServices />
      <MapsHome title={t("mapTitle")} />
      <Partners />
    </div>
  );
};

export default Home;
