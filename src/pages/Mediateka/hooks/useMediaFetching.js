import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImagesMenus,
  getMediaPagination,
  getVideosMenus,
} from "../../../reduxToolkit/mediatekaSlice/extraReducer";

export const useMediaFetching = () => {
  const lan = useSelector((state) => state.language.language);
  const mediaData = useSelector((state) => state.mediatekaSlice.data);
  const videoMenusData = useSelector(
    (state) => state.mediatekaSlice.videoMenusData
  );
  const imageMenusData = useSelector(
    (state) => state.mediatekaSlice.imageMenusData
  );
  const dataLoading = useSelector((state) => state.mediatekaSlice.dataLoading);
  const videoMenuLoading = useSelector(
    (state) => state.mediatekaSlice.videoMenuLoading
  );
  const imageMenuLoading = useSelector(
    (state) => state.mediatekaSlice.imageMenuLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMediaPagination({ typeUrl: "videos", page: 1 }));
    dispatch(getVideosMenus());
    dispatch(getImagesMenus());
  }, []);

  return {
    mediaData,
    videoMenusData,
    dataLoading,
    imageMenusData,
    videoMenuLoading,
    imageMenuLoading,
    lan,
  };
};
