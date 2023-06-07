import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailData } from "../../../reduxToolkit/newsSlice/extraReducer";
import { getPortalOneNews } from "../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { getWebSiteNews } from "../../../reduxToolkit/siteNews/getSiteNews";

export const useNewsDataFetching = () => {
  const { id, page } = useParams();
  const dispatch = useDispatch();
  const siteNews = useSelector(
    (state) => state.websiteNewsSlice.siteNewsOneData
  );

  useEffect(() => {
    dispatch(getDetailData({ page, id }));
    dispatch(getWebSiteNews({ id }));
  }, [id, dispatch]);

  return { siteNews };
};
