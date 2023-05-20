import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerFilter } from "../../../../../../reduxToolkit/volunteer/extraReducer";
import { getLocation } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { createSelector } from "@reduxjs/toolkit";

export const useVolunteerAbout = () => {
  const cityDataChange = createSelector(
    (store) => store.community.allCitiesGet,
    (cities) => {
      return cities.map((el) => ({
        ...el,
        label: el.name ? el.name : "Toshkent",
      }));
    }
  );

  const language = useSelector((store) => store.language.language);

  const volunteers = useSelector((store) => store.volunteerSlice.volunteerData);
  const volunteersLoading = useSelector(
    (store) => store.volunteerSlice.volunteerLoading
  );
  const locations = useSelector((store) => store.community.locationGet);
  const locationsLoading = useSelector(
    (store) => store.community.locationGetLoading
  );
  const allCitiesGetLoading = useSelector(
    (store) => store.community.allCitiesGetLoading
  );
  const allCitiesGet = useSelector(cityDataChange);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVolunteerFilter({ country: "", city: "" }));
    dispatch(getLocation());
  }, [dispatch, language]);

  return {
    allCitiesGet,
    allCitiesGetLoading,
    locationsLoading,
    locations,
    volunteersLoading,
    volunteers,
    dispatch,
  };
};
