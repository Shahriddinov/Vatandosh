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
import { Card, Hero, Pagination } from "../../../../../component";
import { getPaginationCount } from "../../../../singlePage/extraFunck";
import { useTranslation } from "react-i18next";

export default function VolunterActivity() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const error = useSelector((state) => state.sliderSlice.error);
  const loading = useSelector((state) => state.sliderSlice.loading);
  const newsData = useSelector((state) => state.newsSlice.newsHomeData);
  const newsDataOne = useSelector((state) => state.newsSlice.newsData);
  const errorcards = useSelector((state) => state.newsSlice.error);
  const paginationData = useSelector(
    (store) => store.singleSlice.paginationData
  );
  useEffect(() => {
    dispatch(getSlider());
    dispatch(getHomeNews({ page: page }));
    dispatch(getNews());
    setPage(1);
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (error || errorcards) {
    return <p>{error}</p>;
  }

  const paginationFetching = (count) => {
    setPage(count);
    dispatch(
      getHomeNews({
        page: count,
      })
    );
  };

  const paginationCount = Math.ceil(newsDataOne?.length / 6);

  return (
    <main className="volunteractivity">
      <Hero sliderData={sliderData} error={error} loading={loading} />
      <div className="container">
        <h4 className="volunteractivity-cardlist-title">{t("volunteryOne")}</h4>
        <div className="volunteractivity-cardlist">
          {newsData?.map((news) => (
            <Card
              key={news.id}
              {...news}
              pathUrl="portal-category/volunteer/activity"
            />
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
