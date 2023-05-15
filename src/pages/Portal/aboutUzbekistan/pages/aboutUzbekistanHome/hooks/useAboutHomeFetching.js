import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCity3D,
  getAllGallery,
  getAllSightseeing,
  getSingleCity,
} from "../../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";

export const useAboutHomeFetching = () => {
  const lan = useSelector((state) => state.language.language);
  const allCitySightseeingLoading = useSelector(
    (store) => store.aboutUzbekistan.allCitySightseeingLoading
  );
  const allCitySightseeing = useSelector(
    (store) => store.aboutUzbekistan.allCitySightseeing
  );

  const allCity3dLoading = useSelector(
    (store) => store.aboutUzbekistan.allCity3dLoading
  );

  const allCity3D = useSelector((store) => store.aboutUzbekistan.allCity3D);

  const allGalleryLoading = useSelector(
    (store) => store.aboutUzbekistan.allGalleryLoading
  );

  const allGallery = useSelector((store) => store.aboutUzbekistan.allGallery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSightseeing());
    dispatch(getAllGallery());
    dispatch(getAllCity3D());
  }, [lan, dispatch]);

  return {
    allCitySightseeingLoading,
    allCitySightseeing,
    allCity3dLoading,
    allCity3D,
    allGalleryLoading,
    allGallery,
  };
};
