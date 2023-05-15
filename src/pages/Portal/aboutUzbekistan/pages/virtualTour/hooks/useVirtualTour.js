import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCity3D } from "../../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";
import { useDispatch, useSelector } from "react-redux";

export const useVirtualTour = () => {
  const { cityId } = useParams();
  const lan = useSelector((state) => state.language.language);

  const singleCity3dLoading = useSelector(
    (store) => store.aboutUzbekistan.singleCity3dLoading
  );

  const singleCity3D = useSelector(
    (store) => store.aboutUzbekistan.singleCity3D
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCity3D(cityId));
  }, [lan, dispatch, cityId]);

  return {
    singleCity3dLoading,
    singleCity3D,
  };
};
