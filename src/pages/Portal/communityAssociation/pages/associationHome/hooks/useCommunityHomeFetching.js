import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunity,
  getAllRegions,
  getCommunityHomePage,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useEffect } from "react";
import { getPortalNews } from "../../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";

export const useCommunityHomeFetching = () => {
  const language = useSelector((store) => store.language.language);
  const communityHomePageData = useSelector(
    (store) => store.community.communityHomePageData
  );
  const communityHomePageLoading = useSelector(
    (store) => store.community.communityHomePageLoading
  );
  const communityHomePageError = useSelector((store) => store.community.error);

  const communityNews = useSelector((store) => store.portalNews.news);
  const communityNewsLoading = useSelector((store) => store.portalNews.loading);

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
    dispatch(getAllCommunity({ page: 1 }));
    dispatch(getCommunityHomePage());
    dispatch(
      getPortalNews({ type: "community-association", per_page: "10", page: 1 })
    );
    dispatch(getAllRegions());
  }, [dispatch, language]);

  return {
    communityHomePageData,
    communityHomePageLoading,
    communityHomePageError,
    communityNews,
    communityNewsLoading,
    allCommunityGet,
    allCommunityGetLoading,
    allRegions,
    allRegionsGetLoading,
  };
};
