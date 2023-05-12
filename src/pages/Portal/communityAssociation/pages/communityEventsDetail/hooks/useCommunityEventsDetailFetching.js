import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllCommunity,
  getAllRegions,
  getEventsDetail,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

export const useCommunityEventsDetailFetching = () => {
  const { eventId } = useParams();
  const language = useSelector((store) => store.language.language);

  const oneEventsDetail = useSelector(
    (store) => store.community.oneEventsDetail
  );

  const oneEventsDetailLoading = useSelector(
    (store) => store.community.oneEventsDetailLoading
  );

  const error = useSelector((store) => store.community.error);

  const allCommunityGet = useSelector(
    (store) => store.community.allCommunityGet
  );
  const allCommunityGetLoading = useSelector(
    (store) => store.community.allCommunityGetLoading
  );

  const allRegions = useSelector((store) => store.community.allRegionsGet);
  const allRegionsGetLoading = useSelector(
    (store) => store.community.allRegionsGetLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventsDetail(eventId));
    dispatch(getAllCommunity({ page: 1 }));
    dispatch(getAllRegions());
  }, [eventId, dispatch, language]);

  return {
    oneEventsDetail,
    oneEventsDetailLoading,
    error,
    allCommunityGet,
    allCommunityGetLoading,
    allRegions,
    allRegionsGetLoading,
  };
};
