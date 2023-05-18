import { useDispatch, useSelector } from "react-redux";
import {
  getExpertCount,
  getExpertPage,
  getExperts,
} from "../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { getPortalNews } from "../../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";

export const useExpertHome = () => {
  const lan = useSelector((state) => state.language.language);
  const changeExpertCount = createSelector(
    (state) => state.expertSlice.expertCount,
    (expert) => {
      const expertCount = expert.filter((el) => {
        let count = 0;
        for (let i = 0; i < el.users.length; i++) {
          if (el.users[i].expert !== null) {
            if (el.users[i].expert.includes("EXPERT")) {
              count += 1;
            }
          }
        }
        if (count > 0) {
          return el;
        }
      });

      return expertCount;
    }
  );

  const expertCountLoading = useSelector(
    (state) => state.expertSlice.expertCountLoading
  );
  const expertCount = useSelector(changeExpertCount);

  const expertPageLoading = useSelector(
    (state) => state.expertSlice.expertPageLoading
  );
  const expertPage = useSelector((state) => state.expertSlice.expertPage);
  const expertError = useSelector((state) => state.expertSlice.error);

  const communityNews = useSelector((store) => store.portalNews.news);
  const communityNewsLoading = useSelector((store) => store.portalNews.loading);

  const expertData = useSelector((state) => state.expertSlice.expertData);
  const loading = useSelector((state) => state.expertSlice.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpertCount());
    dispatch(getExpertPage());
    dispatch(getPortalNews({ type: "expert", per_page: "3", page: 1 }));
    dispatch(getExperts());
  }, [lan]);

  return {
    expertCount,
    expertCountLoading,
    expertPageLoading,
    expertPage,
    lan,
    expertError,
    communityNewsLoading,
    communityNews,
    expertData,
    loading,
  };
};
