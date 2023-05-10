import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunity,
  getAllRegions,
} from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useParams } from "react-router-dom";
import { getNews } from "../../../../../../reduxToolkit/newsSlice/extraReducer";

export const useCountryGet = () => {
  const language = useSelector((store) => store.language.language);
  const { communityCountry } = useParams();

  const allRegionsGet = useSelector((store) => store.community.allRegionsGet);
  const allRegionsGetLoading = useSelector(
    (store) => store.community.allRegionsGetLoading
  );

  const allCommunityGet = useSelector(
    (store) => store.community.allCommunityGet
  );
  const allCommunityGetLoading = useSelector(
    (store) => store.community.allCommunityGetLoading
  );

  const news = useSelector((state) => state.newsSlice.newsData);
  const loadingNews = useSelector((state) => state.newsSlice.loadingNews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRegions());
    dispatch(getAllCommunity({ region: communityCountry }));

    if (!news.length) {
      dispatch(getNews());
    }
  }, [language]);

  return {
    allCommunityGet,
    allCommunityGetLoading,
    allRegionsGetLoading,
    allRegionsGet,
    communityCountry,
    loadingNews,
    news,
  };
};
