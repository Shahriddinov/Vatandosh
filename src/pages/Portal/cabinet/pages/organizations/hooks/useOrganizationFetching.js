import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunity,
  getAllRegions,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

export const useOrganizationFetching = () => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const user = useSelector((store) => store.authSlice.userData);

  const allCommunityGet = useSelector(
    (store) => store.community.allCommunityGet
  );
  const allCommunityGetLoading = useSelector(
    (store) => store.community.allCommunityGetLoading
  );

  const allRegionsGetLoading = useSelector(
    (store) => store.community.allRegionsGetLoading
  );
  const error = useSelector((store) => store.community.error);

  useEffect(() => {
    dispatch(
      getAllCommunity({
        region_id: 0,
        page: 1,
        per_page: 8,
        typePage: "association",
        user_id: null,
      })
    );
    dispatch(getAllRegions());
  }, [dispatch, lan]);
  return {
    allCommunityGet,
    allCommunityGetLoading,
    error,
    allRegionsGetLoading,
  };
};
