import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getCompatriotsMenu } from "../../../reduxToolkit/singleSlice/singleAsyncThunk";

export const useSingleData = () => {
  const { pathname, search } = useLocation();
  const { pageUrl } = useParams();
  const projectsMenuLoading = useSelector(
    (store) => store.singleSlice.projectsLoading
  );
  const menuData = useSelector((store) => store.singleSlice.projectsData);
  const compatriotsMenu = useSelector(
    (store) => store.singleSlice.compatriotsMenu
  );
  const compatriotsMenuLoading = useSelector(
    (store) => store.singleSlice.compatriotsMenuLoading
  );
  const error = useSelector((store) => store.singleSlice.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname.split("/")[1] === "compatriots") {
      dispatch(getCompatriotsMenu(pageUrl));
    } else {
      dispatch(getCompatriotsMenu("publicevents"));
    }
  }, [pageUrl]);

  const data = menuData.length
    ? pathname.split("/")[1] === "compatriots"
      ? { ...compatriotsMenu }
      : menuData?.find((el) => el?.id === search.slice(2) * 1)
    : { id: search.slice(2) * 1 };

  return {
    projectsMenuLoading,
    data,
    error,
    compatriotsMenuLoading,
  };
};
