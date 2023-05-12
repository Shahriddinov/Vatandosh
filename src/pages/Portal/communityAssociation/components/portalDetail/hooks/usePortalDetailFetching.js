import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailData } from "../../../reduxToolkit/newsSlice/extraReducer";
import { getContact } from "../../../../../../reduxToolkit/contactSlice/extraReducer";

export const usePortalDetailFetching = () => {
  const { portalId, portalPage } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.newsSlice.detailData);
  const loading = useSelector((state) => state.newsSlice.loadingDetail);
  const error = useSelector((state) => state.newsSlice.error);

  useEffect(() => {
    dispatch(getDetailData({ portalPage, portalId }));
    dispatch(getContact());
  }, [portalId, dispatch]);

  return { data, loading, error };
};
