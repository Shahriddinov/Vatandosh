import { useDispatch, useSelector } from "react-redux";
import { getCommunityHomePage } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useEffect } from "react";

export const useCommunityHomeFetching = () => {
  const communityHomePageData = useSelector(
    (store) => store.community.communityHomePageData
  );
  const communityHomePageLoading = useSelector(
    (store) => store.community.communityHomePageLoading
  );
  const communityHomePageError = useSelector((store) => store.community.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommunityHomePage());
  }, []);

  return {
    communityHomePageData,
    communityHomePageLoading,
    communityHomePageError,
  };
};
