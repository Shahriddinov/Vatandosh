import React, { useEffect } from "react";
import Hero from "../../component/Hero/Hero";
import News from "../../component/News/News";
// import Partners from "../../component/Partners/Partners";
import Peaceful from "../../component/peaceful/Peaceful";
// import InteractiveServices from "../../component/interactiveServices/InteractiveServices";
import MapsHome from "../../component/maps-home/MapsHome";
import Partners from "../../component/partners/Partners";
import { useDispatch, useSelector } from "react-redux";
import { getPeaceful } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";
import Header from "../../component/Layout/Header/Header";
import { getSlider } from "../../reduxToolkit/sliderSlice/extraReducer";
import HomeWebinarSlider from "../../component/homeWebinarSlider/HomeWebinarSlider";
import { getWebinarSlider } from "../../reduxToolkit/webinarSlider/extraReducer";
import { useTranslation } from "react-i18next";
import { getLocation } from "../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { Spinner } from "../../component";
import { getCountriesNews } from "../../reduxToolkit/mapSlice/mapAsyncThunk";

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const error = useSelector((state) => state.sliderSlice.error);
  const loading = useSelector((state) => state.sliderSlice.loading);
  const webinarData = useSelector((state) => state.webinarSlidesSlice.data);
  const webinarDataLoading = useSelector(
    (state) => state.webinarSlidesSlice.dataLoading
  );
  const webinarError = useSelector((state) => state.webinarSlidesSlice.error);

  const countryNewsError = useSelector((store) => store.mapSlice.error);

  const peacefulData = useSelector((state) => state.peaceful.peacefulData);
  useEffect(() => {
    if (!peacefulData?.length) {
      dispatch(getPeaceful());
    }
    if (!sliderData?.length) {
      dispatch(getSlider());
    }
    if (!webinarData?.length) {
      dispatch(getWebinarSlider());
    }
  }, [dispatch]);

  if (countryNewsError) {
    return <p>{countryNewsError}</p>;
  }

  return (
    <div className="home">
      <Header />
      <Hero sliderData={sliderData} error={error} loading={loading} />
      <News />
      <HomeWebinarSlider
        sliderData={webinarData}
        error={webinarError}
        loading={webinarDataLoading}
      />
      <Peaceful />
      {/* <InteractiveServices /> */}
      <MapsHome title={t("mapTitle")} />
      <Partners />
    </div>
  );
};

export default Home;
