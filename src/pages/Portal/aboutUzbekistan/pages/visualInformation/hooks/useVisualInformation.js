import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useOutletContext } from "react-router-dom";
import {
  getAllCityVideo,
  getAllGallery,
  getAllSightseeing,
} from "../../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";

export const useVisualInformation = () => {
  const { menu } = useOutletContext();
  const { pathname } = useLocation();

  const lan = useSelector((state) => state.language.language);

  const allCityVideoLoading = useSelector(
    (store) => store.aboutUzbekistan.allCityVideoLoading
  );
  const allCityVideo = useSelector(
    (store) => store.aboutUzbekistan.allCityVideo
  );

  const allGalleryLoading = useSelector(
    (store) => store.aboutUzbekistan.allGalleryLoading
  );
  const allGallery = useSelector((store) => store.aboutUzbekistan.allGallery);

  const error = useSelector((store) => store.aboutUzbekistan.error);
  const dispatch = useDispatch();

  const activeMenu = menu.find((el) => el.url === pathname);

  useEffect(() => {
    dispatch(getAllCityVideo({ paginate: 9 }));
    dispatch(getAllGallery({ paginate: 16 }));
  }, [dispatch, lan]);

  return {
    error,
    allCityVideoLoading,
    allCityVideo,
    activeMenu,
    lan,
    dispatch,
    allGalleryLoading,
    allGallery,
  };
};
