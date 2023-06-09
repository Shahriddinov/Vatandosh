import "./VolunterActivity.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSlider } from "../../../../../reduxToolkit/sliderSlice/extraReducer";
import { useEffect } from "react";
import { getHomeNews } from "../../../../../reduxToolkit/newsSlice/extraReducer";
import Aos from "aos";
import { useState } from "react";
import { Card, Hero, Pagination, Spinner } from "../../../../../component";
import { useTranslation } from "react-i18next";
import { useVolunteerHomeFetching } from "../VolunterHome/hooks/useVolunteerHomeFetching";

export default function VolunterActivity() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const sliderData = useSelector((state) => state.sliderSlice.sliderData);
  const error = useSelector((state) => state.sliderSlice.error);
  const loading = useSelector((state) => state.sliderSlice.loading);

  const { volunteers, volunteersLoading } = useVolunteerHomeFetching();

  const { volunteerNews, volunteerNewsLoading, volunteerNewsError } =
    useVolunteerHomeFetching();

  useEffect(() => {
    dispatch(getSlider());
    dispatch(getHomeNews({ page: page }));
    setPage(1);
  }, [dispatch, page]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (volunteerNewsLoading || volunteersLoading) {
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
          {volunteers?.data?.map((data) => {
            return data?.user_volunteer_activities?.map((act) => {
              return act?.verified ? (
                <Card key={act.id} {...act} pathUrl="volunteer/activity" />
              ) : null;
            });
          })}
        </div>
        {paginationCount > 1 ? (
          <Pagination
            page={page}
            paginationFetching={paginationFetching}
            count={paginationCount}
          />
        ) : null}
      </div>
    </main>
  );
}
