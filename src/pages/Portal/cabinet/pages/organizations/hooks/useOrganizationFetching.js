import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommunity } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

export const useOrganizationFetching = () => {
  const dispatch = useDispatch();

  const allCommunityGet = useSelector(
    (store) => store.community.allCommunityGet
  );
  const allCommunityGetLoading = useSelector(
    (store) => store.community.allCommunityGetLoading
  );

  const error = useSelector((store) => store.community.error);

  useEffect(() => {
    dispatch(
      getAllCommunity({
        page: 1,
        per_page: 8,
        typePage: "association",
      })
    );
  }, [dispatch]);
  return { allCommunityGet, allCommunityGetLoading, error };
};
