import { useDispatch, useSelector } from "react-redux";
import {
  getExpertCount,
  getExpertPage,
} from "../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { getPortalNews } from "../../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";

export const useAboutCouncil = () => {
  const lan = useSelector((state) => state.language.language);

  const changeExpertCount = createSelector(
    (state) => state.expertSlice.expertCount,
    (expert) => {
      const expertCount = expert.filter((el) => {
        let count = 0;
        if (el.users.length > 0) {
          for (let i = 0; i < el.users.length; i++) {
            if (el.users[i].expert !== null) {
              if (el.users[i].expert.type !== null) {
                if (el.users[i].expert.type.includes("EXPERT")) {
                  count += 1;
                }
              }
            }
          }
        }
        if (count > 0) {
          return el;
        }
      });
      const data = [];
      expertCount.forEach((item) => {
        let users = [];
        for (let i = 0; i < item.users.length; i++) {
          if (item.users[i].expert !== null) {
            users.push(item.users[i]);
          }
        }
        data.push({ ...item, users });
      });

      return data;
    }
  );
  const { expertAssociationsId } = useParams();
  const expertCountLoading = useSelector(
    (state) => state.expertSlice.expertCountLoading
  );
  const expertCount = useSelector(changeExpertCount);

  const communityNews = useSelector((store) => store.portalNews.news);
  const communityNewsLoading = useSelector((store) => store.portalNews.loading);
  const error = useSelector((store) => store.portalNews.error);

  const { expertAssociationData } = useSelector((state) => state.expertSlice);
  const data = expertAssociationData?.data.find(
    (el) => el?.id === expertAssociationsId * 1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpertCount());
    dispatch(getExpertPage());
    dispatch(getPortalNews({ type: "expert", per_page: "100", page: 1 }));
  }, [lan]);

  return {
    expertCount,
    expertCountLoading,
    lan,
    data,
    communityNews,
    communityNewsLoading,
    error,
    expertAssociationsId,
  };
};
