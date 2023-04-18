import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssociations,
  getAssociationsCategory,
} from "../../../../../../reduxToolkit/associationsSlice/associationsAsyncThunk";

export const useCountryGet = () => {
  const associationData = useSelector(
    (store) => store.associationSlice.associationData
  );
  const associationCategoryData = useSelector(
    (store) => store.associationSlice.associationCategoryData
  );
  const associationLoading = useSelector(
    (store) => store.associationSlice.associationLoading
  );
  const associationCategoryLoading = useSelector(
    (store) => store.associationSlice.associationCategoryLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssociations());
    dispatch(getAssociationsCategory());
  }, [dispatch]);

  return {
    associationData,
    associationCategoryData,
    associationLoading,
    associationCategoryLoading,
  };
};
