import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunity,
  getAllEvents,
  getAllRegions,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

export const useAssociationFetching = () => {
  const language = useSelector((store) => store.language.language);
  const allRegionsChange = createSelector(
    (store) => store.community.allRegionsGet,
    (location) => {
      return location.map((el) => ({ ...el, label: el.name }));
    }
  );

  const allRegions = useSelector(allRegionsChange);
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
    dispatch(getAllEvents());
    dispatch(getAllRegions());
    dispatch(getAllCommunity({ page: 1 }));
  }, [language]);

  allRegions.unshift({
    id: "all",
    name: "all",
    label: "All",
    code: "All",
    flag: null,
    count: 0,
  });

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
