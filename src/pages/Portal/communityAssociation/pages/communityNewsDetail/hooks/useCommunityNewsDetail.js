import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllCommunity,
  getAllRegions,
  getEventsDetail,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { getPortalOneNews } from "../../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";

export const useCommunityNewsDetail = () => {
  const { newsId } = useParams();
  const language = useSelector((store) => store.language.language);

  const oneNewsDetail = useSelector((store) => store.portalNews.oneNews);

  const oneNewsLoading = useSelector(
    (store) => store.portalNews.oneNewsLoading
  );

  const error = useSelector((store) => store.community.error);

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
    dispatch(getPortalOneNews(newsId));
    dispatch(getAllCommunity({ page: 1 }));
    dispatch(getAllRegions());
  }, [newsId, dispatch, language]);

  return {
    oneNewsDetail,
    oneNewsLoading,
    error,
    allCommunityGet,
    allCommunityGetLoading,
    allRegions,
    allRegionsGetLoading,
  };
};
