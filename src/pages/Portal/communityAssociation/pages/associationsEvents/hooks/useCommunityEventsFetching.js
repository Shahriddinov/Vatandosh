import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

export const useCommunityEventsFetching = () => {
  const language = useSelector((store) => store.language.language);
  const data = useSelector((state) => state.community.allEvents);
  const dataLoading = useSelector((state) => state.community.allEventsLoading);

  const dispatch = useDispatch();
  const paginationFetching = (vount) => {};

  useEffect(() => {
    dispatch(getAllEvents());
  }, [language]);

  return { data, dataLoading, paginationFetching };
};
