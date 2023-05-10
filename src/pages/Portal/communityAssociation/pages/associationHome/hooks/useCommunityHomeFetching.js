import { useDispatch, useSelector } from "react-redux";
import { getCommunityHomePage } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useEffect } from "react";
import { getPortalNews } from "../../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";

export const useCommunityHomeFetching = () => {
  const lenguage = useSelector((store) => store.language.language);
  const communityHomePageData = useSelector(
    (store) => store.community.communityHomePageData
  );
  const communityHomePageLoading = useSelector(
    (store) => store.community.communityHomePageLoading
  );
  const communityHomePageError = useSelector((store) => store.community.error);

  const communityNews = useSelector((store) => store.portalNews.news);
  const communityNewsLoading = useSelector((store) => store.portalNews.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommunityHomePage());
    dispatch(getPortalNews("community"));
  }, [lenguage]);

  return {
    communityHomePageData,
    communityHomePageLoading,
    communityHomePageError,
    communityNews,
    communityNewsLoading,
  };
};
