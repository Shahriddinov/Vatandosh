import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getLibraryAll,
  getLibrarySlider,
} from "../../../../reduxToolkit/portalSlices/librarySlice/extraReducer";
import { useState } from "react";

export const useLibraryFetching = (count) => {
  const [activPage, setActivePage] = useState(1);
  const libraryData = useSelector((store) => store.librarySlice.libraryData);
  const libraryLoading = useSelector(
    (store) => store.librarySlice.libraryLoading
  );
  const librarySliderData = useSelector(
    (store) => store.librarySlice.librarySliderData
  );
  const librarySliderLoading = useSelector(
    (store) => store.librarySlice.librarySliderLoading
  );

  const dispatch = useDispatch();
  const changePagination = (value) => {
    dispatch(getLibraryAll({ count: count, page: value }));
    setActivePage(value);
  };

  useEffect(() => {
    dispatch(getLibraryAll({ count: count }));
    dispatch(getLibrarySlider());
  }, []);

  return {
    libraryData,
    libraryLoading,
    librarySliderData,
    librarySliderLoading,
    activPage,
    changePagination,
  };
};
