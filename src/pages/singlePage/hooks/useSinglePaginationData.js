import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePagination } from "../../../reduxToolkit/singleSlice/singleAsyncThunk";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

export const useSinglePaginationData = () => {
  const [page, setPage] = useState(1);
  const { pathname, search } = useLocation();
  const { pageUrl } = useParams();
  const id = search.slice(2) * 1;
  const type = pathname.split("/")[1];

  const paginationLoading = useSelector(
    (store) => store.singleSlice.paginationLoading
  );
  const paginationData = useSelector(
    (store) => store.singleSlice.paginationData
  );
  const dispatch = useDispatch();

  const paginationFetching = (count) => {
    setPage(count);
    dispatch(
      getSinglePagination({
        type: pathname.split("/")[1],
        page: count,
        reqUrl: pageUrl,
        categoryId: id,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getSinglePagination({ type, page: 1, reqUrl: pageUrl, categoryId: id })
    );
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, pageUrl]);

  return {
    paginationLoading,
    paginationData,
    paginationFetching,
    pageUrl,
    type,
    page,
  };
};
