import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColumnMenu } from "../../../reduxToolkit/singleSlice/singleAsyncThunk";
import { useLocation } from "react-router-dom";

export const useProjectsData = () => {
  const { pathname } = useLocation();

  const error = useSelector((store) => store.singleSlice.error);
  const dispatch = useDispatch();
  const pathStatus = pathname.split("/")[1];
  const data = useSelector((store) => store.singleSlice.projectsData);

  useEffect(() => {
    if (
      pathStatus !== "portal" &&
      pathStatus !== "registration" &&
      pathStatus !== "expert" &&
      pathStatus !== "portal-category"
    ) {
      if (!data?.length) {
        dispatch(getColumnMenu());
      }
    }
  }, []);

  return { error };
};
