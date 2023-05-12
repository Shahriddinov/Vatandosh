import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunity,
  getAllEvents,
  getAllRegions,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useParams } from "react-router-dom";

export const useAssociationFetching = (communityCountryId) => {
  const language = useSelector((store) => store.language.language);
  const allRegionsChange = createSelector(
    (store) => store.community.allRegionsGet,
    (location) => {
      return location.map((el) => ({ ...el, label: el.name }));
    }
  );

  const communityDataChange = createSelector(
    (store) => store.community.allCommunityData,
    (community) => {
      const data = [];
      community.forEach((item) => {
        const objIndex = data.findIndex((el) => el.id === item.id);
        if (objIndex < 0) {
          data.push(item);
        }
      });
      return data;
    }
  );

  const { communityCountry } = useParams();
  const allRegions = useSelector(allRegionsChange);
  const allRegionsGetLoading = useSelector(
    (store) => store.community.allRegionsGetLoading
  );

  const allCommunityGet = useSelector(
    (store) => store.community.allCommunityGet
  );
  const communityData = useSelector(communityDataChange);
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
    if (!communityCountry) {
      dispatch(getAllCommunity({ page: 1, per_page: 8 }));
    } else {
      dispatch(getAllCommunity({ page: 1, region_id: communityCountry }));
    }
  }, [dispatch, language]);

  allRegions.unshift({
    id: "all",
    name: "Barcha davlatlar",
    label: "Barcha davlatlar",
    code: "Barcha davlatlar",
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
    communityData,
  };
};
