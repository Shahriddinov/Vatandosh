import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssociations,
  getAssociationsCategory,
} from "../../../reduxToolkit/associationsSlice/associationsAsyncThunk";
import { getEvents } from "../../../reduxToolkit/eventsSlice/extraReducer";

export const useAssociationFetching = () => {
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
  const error = useSelector((store) => store.associationSlice.error);
  const eventsData = useSelector((state) => state.eventsSlice.eventsData);
  const eventsLoading = useSelector((state) => state.eventsSlice.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssociations());
    dispatch(getAssociationsCategory());
    dispatch(getEvents());
  }, []);

  return {
    associationData,
    associationCategoryData,
    error,
    associationLoading,
    associationCategoryLoading,
    eventsData,
    eventsLoading,
  };
};
