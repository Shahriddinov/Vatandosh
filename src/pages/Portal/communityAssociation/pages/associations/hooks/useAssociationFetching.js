import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunity,
  getAllRegions,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useParams } from "react-router-dom";

export const useAssociationFetching = () => {
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRegions());
    dispatch(
      getAllCommunity({
        page: 1,
        per_page: 8,
        typePage: "association",
      })
    );
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
    dispatch,
    communityData,
  };
};
