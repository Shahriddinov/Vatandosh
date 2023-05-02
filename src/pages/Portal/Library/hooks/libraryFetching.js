import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLibraryAll } from "../../../../reduxToolkit/portalSlices/librarySlice/extraReducer";

export const useLibraryFetching = (page) => {
  const libraryData = useSelector(
    (store) => store.librarySlice.libraryData
  );
  const libraryLoading = useSelector(
    (store) => store.librarySlice.libraryLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibraryAll(page));
  }, []);

  return {
    libraryData,
    libraryLoading,
  };
};