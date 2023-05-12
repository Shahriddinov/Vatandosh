import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLibraryOne } from "../../../../reduxToolkit/portalSlices/librarySlice/extraReducer";

export const useEbookFetching = (id) => {
  const ebookData = useSelector((store) => store.librarySlice.ebookData);
  const ebookLoading = useSelector((store) => store.librarySlice.ebookLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibraryOne(id));
  }, [id]);

  return {
    ebookData,
    ebookLoading,
  };
};
