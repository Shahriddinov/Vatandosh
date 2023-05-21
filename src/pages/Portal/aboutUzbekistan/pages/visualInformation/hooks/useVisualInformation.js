import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useOutletContext } from "react-router-dom";
import { getAllSightseeing } from "../../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";

export const useVisualInformation = () => {
  const { menu } = useOutletContext();
  const { pathname } = useLocation();
  const lan = useSelector((state) => state.language.language);
  const allCitySightseeingLoading = useSelector(
    (store) => store.aboutUzbekistan.allCitySightseeingLoading
  );
  const allCitySightseeing = useSelector(
    (store) => store.aboutUzbekistan.allCitySightseeing
  );

  const error = useSelector((store) => store.aboutUzbekistan.error);
  const dispatch = useDispatch();

  console.log(menu);
  const activeMenu = menu.find((el) => (el.url = pathname));

  useEffect(() => {
    dispatch(getAllSightseeing());
  }, [dispatch, lan]);

  return {
    error,
    allCitySightseeingLoading,
    allCitySightseeing,
    activeMenu,
  };
};
