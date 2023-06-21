import "./VolunterActivity.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSlider } from "../../../../../reduxToolkit/sliderSlice/extraReducer";
import { useEffect } from "react";
import {
  getHomeNews,
  getNews,
} from "../../../../../reduxToolkit/newsSlice/extraReducer";
import Aos from "aos";
import { useState } from "react";
import { Card, Hero, Pagination, Spinner } from "../../../../../component";
import { getPaginationCount } from "../../../../singlePage/extraFunck";
import { useTranslation } from "react-i18next";
import { useVolunteerHomeFetching } from "../VolunterHome/hooks/useVolunteerHomeFetching";

export default function VolunterActivity() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const error = useSelector((state) => state.sliderSlice.error);
  const loading = useSelector((state) => state.sliderSlice.loading);
  const newsData = useSelector((state) => state.newsSlice.newsHomeData);
  const newsDataOne = useSelector((state) => state.newsSlice.newsData);
  const paginationData = useSelector(
    (store) => store.singleSlice.paginationData
  );

  const { volunteerNews, volunteerNewsLoading, volunteerNewsError } =
    useVolunteerHomeFetching();

  useEffect(() => {
    dispatch(getSlider());
    dispatch(getHomeNews({ page: page }));
    setPage(1);
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (volunteerNewsLoading) {
    return <Spinner position="full" />;
  }

  if (error || volunteerNewsError) {
    return (
      <p>
        {error}
        {volunteerNewsError}
      </p>
    );
  }

  const paginationFetching = (count) => {
    setPage(count);
  };

  const paginationCount = Math.ceil(volunteerNews?.data?.length / 6);

  return (
    <main className="volunteractivity">
      <Hero sliderData={sliderData} error={error} loading={loading} />
      <div className="container">
        <h4 className="volunteractivity-cardlist-title">{t("volunteryOne")}</h4>
        <div className="volunteractivity-cardlist">
          {volunteerNews?.data?.map((news) => (
            <Card key={news.id} {...news} pathUrl="news" />
          ))}
        </div>
        <Pagination
          page={page}
          paginationFetching={paginationFetching}
          count={paginationCount}
        />
      </div>
    </main>
  );
}
