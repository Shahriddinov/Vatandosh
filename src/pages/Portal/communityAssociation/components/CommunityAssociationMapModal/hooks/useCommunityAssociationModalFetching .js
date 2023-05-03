import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCommunity } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

export const useCommunityAssociationModalFetching = () => {
  const { communityCountry } = useParams();

  const allCommunityGet = useSelector(
    (store) => store.community.allCommunityGet
  );
  const allCommunityGetLoading = useSelector(
    (store) => store.community.allCommunityGetLoading
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommunity({ page: 1, region: communityCountry }));
  }, []);
  return { allCommunityGet, allCommunityGetLoading };
};
