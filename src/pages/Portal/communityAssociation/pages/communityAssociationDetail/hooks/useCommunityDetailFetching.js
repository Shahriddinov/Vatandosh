import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunity,
  getAllEvents,
  getAllRegions,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useParams } from "react-router-dom";

export const useCommunityDetailFetching = () => {
  const language = useSelector((store) => store.language.language);
  const params = useParams();

  const allRegions = useSelector((store) => store.community.allRegionsGet);
  const allRegionsGetLoading = useSelector(
    (store) => store.community.allRegionsGetLoading
  );

  const allCommunityGet = useSelector(
    (store) => store.community.allCommunityGet
  );

  const allCommunityGetLoading = useSelector(
    (store) => store.community.allCommunityGetLoading
  );

  const eventsData = useSelector((state) => state.community.allEvents);
  const eventsDataLoading = useSelector(
    (state) => state.community.allEventsLoading
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvents({ per_page: 10, page: 1 }));
    dispatch(getAllRegions());
    dispatch(getAllCommunity({ region_id: params.communityCountry }));
  }, [dispatch, language, params.communityCountry]);

  return {
    allRegions,
    allRegionsGetLoading,
    allCommunityGet,
    allCommunityGetLoading,
    eventsData,
    eventsDataLoading,
    dispatch,
  };
};
