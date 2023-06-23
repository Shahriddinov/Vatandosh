import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExpertActivityOne } from "../../../../../../reduxToolkit/ExpertSlice/ExpertActivity/extraReducer";
import { createSelector } from "@reduxjs/toolkit";
import { getExpertCount } from "../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";

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

export const useExportActivityDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();
  const lan = useSelector((state) => state.language.language);
  const oneData = useSelector((state) => state.expertActivitySlice.oneData);

  const loading = useSelector(
    (state) => state.expertActivitySlice.oneDataLoading
  );

  const expertCountLoading = useSelector(
    (state) => state.expertSlice.expertCountLoading
  );
  const expertCount = useSelector(changeExpertCount);

  useEffect(() => {
    dispatch(getExpertActivityOne({ id }));
    dispatch(getExpertCount());
  }, [dispatch, id, lan]);

  return { expertCount, expertCountLoading, loading, oneData, t };
};
