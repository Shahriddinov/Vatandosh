import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommunity } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useParams } from "react-router-dom";

export const useCountryGet = () => {
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
