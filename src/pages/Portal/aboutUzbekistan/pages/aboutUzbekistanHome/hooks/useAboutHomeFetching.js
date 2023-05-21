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

  const allGalleryLoading = useSelector(
    (store) => store.aboutUzbekistan.allGalleryLoading
  );

  const allGallery = useSelector((store) => store.aboutUzbekistan.allGallery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSightseeing({ paginate: 9, city: 10 }));
    dispatch(getAllGallery({ paginate: 8 }));
  }, [lan, dispatch]);

  return {
    allCitySightseeingLoading,
    allCitySightseeing,
    allGalleryLoading,
    allGallery,
  };
};
