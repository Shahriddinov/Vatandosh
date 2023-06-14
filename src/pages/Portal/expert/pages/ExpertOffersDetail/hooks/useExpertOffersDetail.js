import { useEffect } from "react";
import {
  getExpert,
  getExpertCount,
} from "../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { getSuggestions } from "../../../../../../reduxToolkit/ExpertSlice/Suggestions/extraReducer";

export const useExportOfferDetail = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);

  const changeExpertCount = createSelector(
    (state) => state.expertSlice.expertCount,
    (expert) => {
      const expertCount = expert.filter((el) => {
        let count = 0;
        if (el.users.length > 0) {
          for (let i = 0; i < el.users.length; i++) {
            if (el.users[i].expert.length > 0) {
              if (el.users[i].expert[0].type !== null) {
                if (el.users[i].expert[0].type.includes("EXPERT")) {
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
          if (item.users[i].expert.length > 0) {
            users.push(item.users[i]);
          }
        }
        data.push({ ...item, users });
      });

      return data;
    }
  );

  const expertCountLoading = useSelector(
    (state) => state.expertSlice.expertCountLoading
  );
  const expertCount = useSelector(changeExpertCount);

  const expertData = useSelector((state) => state.expertSlice.expert);
  const expertLoading = useSelector((state) => state.expertSlice.expertLoading);
  const error = useSelector((state) => state.expertSlice.error);

  const expertSuggestionsData = useSelector(
    (state) => state.suggestionSlice.expertSuggestionsData
  );
  const loading = useSelector((state) => state.suggestionSlice.loading);

  useEffect(() => {
    if (pathname.includes("expert")) {
      dispatch(getExpert(id));
      dispatch(getExpertCount());
      dispatch(getSuggestions());
    }
  }, [dispatch, pathname, id, lan]);

  return {
    expertData,
    expertLoading,
    error,
    expertSuggestionsData,
    loading,
    expertCountLoading,
    expertCount,
  };
};
