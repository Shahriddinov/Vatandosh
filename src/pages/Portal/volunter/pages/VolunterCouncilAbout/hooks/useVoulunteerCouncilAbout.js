import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVolunteerCity,
  getVolunteerFilter,
} from "../../../../../../reduxToolkit/volunteer/extraReducer";
import { getExpertPage } from "../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { createSelector } from "@reduxjs/toolkit";

export const useVolunteerCouncilAbout = () => {
  const changeVolunteerCount = createSelector(
    (state) => state.volunteerSlice.volunteerCity,
    (expert) => {
      const volunteerCount = expert.filter((el) => {
        let count = 0;
        if (el.users.length > 0) {
          for (let i = 0; i < el.users.length; i++) {
            if (el.users[i].volunteer !== null) {
              if (el.users[i].volunteer.type !== null) {
                if (el.users[i].volunteer.type.includes("VOLUNTEER")) {
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
          if (item.users[i].volunteer !== null) {
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

  const language = useSelector((store) => store.language.language);
  const volunteers = useSelector((store) => store.volunteerSlice.volunteerData);
  const volunteersLoading = useSelector(
    (store) => store.volunteerSlice.volunteerLoading
  );

  const volunteerPageLoading = useSelector(
    (state) => state.expertSlice.expertPageLoading
  );
  const volunteerPage = useSelector((state) => state.expertSlice.expertPage);
  const expertError = useSelector((state) => state.expertSlice.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVolunteerFilter({ country: "", city: "" }));
    dispatch(getExpertPage());
    dispatch(getVolunteerCity());
  }, [dispatch, language]);

  return {
    volunteers,
    volunteersLoading,
    volunteerPageLoading,
    volunteerPage,
    expertError,
    language,
    VolunteerCountLoading,
    VolunteerCount,
    VolunteerError,
  };
};
