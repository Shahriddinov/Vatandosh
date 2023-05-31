import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeetingAll } from "../../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { createSelector } from "@reduxjs/toolkit";

export const useEventsFetching = () => {
  const dispatch = useDispatch();
  const сhangeMeetingsData = createSelector(
    (store) => store.meetingSlice.meetingsData,
    (meetingsData) => {
      const data = [];
      meetingsData.forEach((item) => {
        const dataFindIndex = data.findIndex((el) => el.id === item.id);
        if (dataFindIndex < 0) {
          data.push(item);
        }
      });
      return data;
    }
  );

  const lan = useSelector((state) => state.language.language);

  const meetingsData = useSelector(сhangeMeetingsData);
  const meetingsLoading = useSelector(
    (store) => store.meetingSlice.meetingsLoading
  );
  const meetingError = useSelector((store) => store.meetingSlice.error);

  useEffect(() => {
    dispatch(getMeetingAll({ eventType: "conference" }));
  }, [dispatch, lan]);

  return { meetingsLoading, meetingError, meetingsData };
};
