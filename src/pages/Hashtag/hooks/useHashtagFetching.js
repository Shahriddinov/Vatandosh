import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMediaPagination } from "../../../reduxToolkit/mediatekaSlice/extraReducer";

export const useHashtagFetching = () => {
  const lan = useSelector((state) => state.language.language);
  const mediaData = useSelector((state) => state.mediatekaSlice.data);
  const dataLoading = useSelector((state) => state.mediatekaSlice.dataLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMediaPagination({ typeUrl: "images", page: 1 }));
  }, []);

  return {
    mediaData,
    dataLoading,
    lan,
  };
};
