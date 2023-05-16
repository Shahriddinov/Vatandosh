import { useDispatch, useSelector } from "react-redux";
import {
  getExpertCount,
  getExpertPage,
} from "../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { getPortalNews } from "../../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import {
  getVolunteerAll,
  getVolunteerCity,
} from "../../../../../../reduxToolkit/volunteer/extraReducer";

export const useVolunteerHomeFetching = () => {
  const lan = useSelector((state) => state.language.language);
  const changeVolunteerCount = createSelector(
    (state) => state.volunteerSlice.volunteerCity,
    (expert) => {
      const volunteerCount = expert.filter((el) => {
        let count = 0;
        if (el.users.length > 0) {
          for (let i = 0; i < el.users.length; i++) {
            if (el.users[i].volunteer.length > 0) {
              if (el.users[i].volunteer[0].type !== null) {
                if (el.users[i].volunteer[0].type.includes("VOLUNTEER")) {
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
      volunteerCount.forEach((item) => {
        let users = [];
        for (let i = 0; i < item.users.length; i++) {
          if (item.users[i].volunteer.length > 0) {
            users.push(item.users[i]);
          }
        }
        data.push({ ...item, users });
      });

      return data;
    }
  );

  const VolunteerCountLoading = useSelector(
    (state) => state.volunteerSlice.volunteerCityLoading
  );
  const VolunteerCount = useSelector(changeVolunteerCount);
  const VolunteerError = useSelector((state) => state.volunteerSlice.error);

  const volunteerPageLoading = useSelector(
    (state) => state.volunteerSlice.expertPageLoading
  );
  const volunteerPage = useSelector((state) => state.expertSlice.expertPage);
  const expertError = useSelector((state) => state.expertSlice.error);

  const volunteerNews = useSelector((store) => store.portalNews.news);
  const volunteerNewsLoading = useSelector((store) => store.portalNews.loading);
  const volunteerNewsError = useSelector((store) => store.portalNews.loading);

  const volunteers = useSelector((store) => store.volunteerSlice.volunteerData);
  const volunteersLoading = useSelector(
    (store) => store.volunteerSlice.volunteerLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortalNews({ type: "volunteer", per_page: 3, page: 1 }));
    dispatch(getVolunteerAll(8));
    dispatch(getExpertPage());
    dispatch(getVolunteerCity());
  }, [dispatch, lan]);

  return {
    VolunteerCount,
    VolunteerCountLoading,
    volunteerPage,
    volunteerPageLoading,
    VolunteerError,
    lan,
    expertError,
    volunteerNews,
    volunteerNewsLoading,
    volunteerNewsError,
    volunteers,
    volunteersLoading,
  };
};
