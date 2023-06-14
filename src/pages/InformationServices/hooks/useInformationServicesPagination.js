import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getInf,
  getPagination,
} from "../../../reduxToolkit/informationServicesSlice/extraReducer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  portalEvents,
  portalNews,
} from "../../../reduxToolkit/portalSlices/news-events/extraReducer";

export const useInformationServicesPagination = () => {
  const [page, setPage] = useState(1);
  const { pageName } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const paginationData = useSelector(
    (state) => state.informationServicesSlice.paginationData
  );

  const paginationLoading = useSelector(
    (state) => state.informationServicesSlice.paginationLoading
  );
  const newsLoading = useSelector(
    (state) => state.portalAllNewsSlice.newsLoading
  );
  const newsData = useSelector((state) => state.portalAllNewsSlice.news);

  const eventsData = useSelector((state) => state.portalAllNewsSlice.events);
  const eventsLoading = useSelector(
    (state) => state.portalAllNewsSlice.eventsLoading
  );

  const paginationCount =
    pageName === "infographics"
      ? Math.ceil(paginationData?.total / 6)
      : pageName === "events"
      ? Math.ceil(eventsData?.total / 6)
      : pageName === "news"
      ? Math.ceil(newsData?.total / 6)
      : "";

  const paginationFetching = (count) => {
    setPage(count);
    if (pageName === "news" || pageName === "events") {
      dispatch(portalNews({ paginate: 6, page: count }));
      dispatch(portalEvents({ per_page: 6, page: count }));
    }
    dispatch(
      getPagination({
        reqUrlName: pageName,
        page: count,
      })
    );
  };

  useEffect(() => {
    if (pageName !== "news" && pageName !== "events") {
      dispatch(getPagination({ reqUrlName: pageName, page: 1 }));
      dispatch(getInf(pageName));
      dispatch(portalNews({ paginate: 6, page: 1 }));
    }
    if (pageName === "news" || pageName === "events") {
      dispatch(portalNews({ paginate: 6, page: 1 }));
      dispatch(portalEvents({ per_page: 6, page: 1 }));
    }
    setPage(1);
  }, [pageName]);

  return {
    paginationFetching,
    page,
    paginationData,
    paginationCount,
    paginationLoading,
    newsLoading,
    newsData,
    pageName,
    eventsData,
    eventsLoading,
    t,
  };
};
