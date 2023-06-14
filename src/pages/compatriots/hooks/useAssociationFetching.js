import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssociations,
  getAssociationsAbout,
  getAssociationsCategory,
} from "../../../reduxToolkit/associationsSlice/associationsAsyncThunk";
import { getEvents } from "../../../reduxToolkit/eventsSlice/extraReducer";
import { portalEvents } from "../../../reduxToolkit/portalSlices/news-events/extraReducer";

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
  const { aboutData, aboutLoading } = useSelector(
    (store) => store.associationSlice
  );
  const error = useSelector((store) => store.associationSlice.error);

  const { events, eventsLoading, eventsError } = useSelector(
    (state) => state.portalAllNewsSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssociations());
    dispatch(getAssociationsCategory());
    dispatch(portalEvents({ per_page: 15, page: 1 }));
    dispatch(getAssociationsAbout());
  }, [dispatch]);

  return {
    associationData,
    associationCategoryData,
    error,
    associationLoading,
    associationCategoryLoading,
    events,
    eventsLoading,
    aboutData,
    aboutLoading,
    eventsError,
  };
};
