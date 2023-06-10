import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getLatestNews,
  getSiteNewsDetail,
} from "../../../reduxToolkit/newsSlice/extraReducer";
import { portalEvents } from "../../../reduxToolkit/portalSlices/news-events/extraReducer";

export const useOneNewsDetailFetching = () => {
  const lan = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const { category, id, type } = useParams();

  const detailData = useSelector((state) => state.newsSlice.siteNewsDetail);
  const siteNewsDetailLoading = useSelector(
    (state) => state.newsSlice.siteNewsDetailLoading
  );

  const latestNews = useSelector((state) => state.newsSlice.latestNews);
  const latestNewsLoading = useSelector(
    (state) => state.newsSlice.latestNewsLoading
  );

  const error = useSelector((state) => state.newsSlice.error);

  useEffect(() => {
    dispatch(getSiteNewsDetail({ category, id, type }));
    dispatch(
      getLatestNews({
        url:
          type === "event"
            ? "community/all-event?per_page=5"
            : "all-news/news?paginate=5",
      })
    );
  }, [dispatch, category, id, type, lan]);

  return {
    latestNewsLoading,
    latestNews,
    detailData,
    siteNewsDetailLoading,
    error,
    type,
    category,
  };
};
