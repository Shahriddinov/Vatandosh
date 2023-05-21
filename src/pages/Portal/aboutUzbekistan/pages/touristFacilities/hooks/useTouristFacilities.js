import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCity,
  getAllSightseeing,
} from "../../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";
import { useLocation, useOutletContext } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";

export const useTouristFacilities = () => {
  const { menu } = useOutletContext();
  const { pathname } = useLocation();
  const lan = useSelector((state) => state.language.language);

  const changeCity = createSelector(
    (store) => store.aboutUzbekistan.allCity,

    (cites) => {
      return cites.map((el) => ({ id: el.id, name: el.name }));
    }
  );

  const allCitySightseeingLoading = useSelector(
    (store) => store.aboutUzbekistan.allCitySightseeingLoading
  );
  const allCitySightseeing = useSelector(
    (store) => store.aboutUzbekistan.allCitySightseeing
  );

  const allCityLoading = useSelector(
    (store) => store.aboutUzbekistan.allCityLoading
  );

  const allCity = useSelector(changeCity);

  const error = useSelector((store) => store.aboutUzbekistan.error);
  const dispatch = useDispatch();

  const activeMenu = menu.find((el) => el.url === pathname);

  useEffect(() => {
    dispatch(getAllSightseeing({ paginate: 2, city: 1 }));
    dispatch(getAllCity());
  }, [dispatch, lan]);

  return {
    error,
    allCitySightseeingLoading,
    allCitySightseeing,
    activeMenu,
    allCityLoading,
    allCity,
    dispatch,
  };
};
