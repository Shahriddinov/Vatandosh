import "./VolunterActivity.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSlider } from "../../../../../reduxToolkit/sliderSlice/extraReducer";
import { useEffect } from "react";
import { getNews } from "../../../../../reduxToolkit/newsSlice/extraReducer";
import Aos from "aos";
import { useState } from "react";
import { Card, Hero, Pagination } from "../../../../../component";

export default function VolunterActivity() {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const error = useSelector((state) => state.sliderSlice.error);
  const loading = useSelector((state) => state.sliderSlice.loading);
  const newsData = useSelector((state) => state.newsSlice.newsData);
  const errorcards = useSelector((state) => state.newsSlice.error);

  useEffect(() => {
    dispatch(getSlider());
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (error || errorcards) {
    return <p>{error}</p>;
  }

  const pagination = (value) => {
    setActivePage(value);
  };

  return (
    <main className="volunteractivity">
      <Hero sliderData={sliderData} error={error} loading={loading} />
      <div className="container">
        <h4 className="volunteractivity-cardlist-title">
          Volontyorlarni faoliyati
        </h4>
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
          count={8}
          page={activePage}
          paginationFetching={pagination}
        />
      </div>
    </main>
  );
}
