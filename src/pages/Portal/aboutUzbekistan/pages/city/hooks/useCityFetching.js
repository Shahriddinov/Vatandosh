import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleSightseeing } from "../../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";

export const useCityFetching = () => {
  const { idCity } = useParams();
  const lan = useSelector((state) => state.language.language);
  const singleCitySightseeingLoading = useSelector(
    (store) => store.aboutUzbekistan.singleCitySightseeingLoading
  );
  const singleCitySightseeing = useSelector(
    (store) => store.aboutUzbekistan.singleCitySightseeing
  );

  const singleCity3dLoading = useSelector(
    (store) => store.aboutUzbekistan.singleCity3dLoading
  );
  const singleCity3d = useSelector(
    (store) => store.aboutUzbekistan.singleCity3d
  );

  const error = useSelector((store) => store.aboutUzbekistan.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleSightseeing(idCity));
  }, [dispatch, lan, idCity]);

  return {
    error,
    singleCitySightseeing,
    singleCitySightseeingLoading,
    singleCity3dLoading,
    singleCity3d,
  };
};
