import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useState } from "react";

export const useCommunityEventsFetching = () => {
  const language = useSelector((store) => store.language.language);
  const data = useSelector((state) => state.community.allEvents);
  const dataLoading = useSelector((state) => state.community.allEventsLoading);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const paginationFetching = (count) => {
    setPage(count);
  };

  useEffect(() => {
    dispatch(getAllEvents({ per_page: 6, page: page }));
  }, [dispatch, language, page]);

  return { data, dataLoading, paginationFetching, page };
};
