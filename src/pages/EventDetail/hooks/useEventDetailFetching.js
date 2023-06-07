import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWebSiteEvent } from "../../../reduxToolkit/SiteEvent/getSiteEvent";

export const useEventDataFetching = () => {
  const { id, page } = useParams();
  const dispatch = useDispatch();
  const siteNews = useSelector(
    (state) => state.websiteEventSlice.siteEventOneData
  );

  console.log(siteNews);

  useEffect(() => {
    dispatch(getWebSiteEvent({ id }));
  }, [id, dispatch]);

  return { siteNews };
};
