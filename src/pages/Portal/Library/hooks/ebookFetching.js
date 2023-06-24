import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLibraryOne } from "../../../../reduxToolkit/portalSlices/librarySlice/extraReducer";

export const useEbookFetching = (id) => {
  const language = useSelector((store) => store.language.language);

  const ebookData = useSelector((store) => store.librarySlice.ebookData);
  const ebookLoading = useSelector((store) => store.librarySlice.ebookLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibraryOne(id));
  }, [language, id]);

  return {
    ebookData,
    ebookLoading,
  };
};
