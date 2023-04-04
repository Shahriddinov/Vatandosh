import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColumnMenu } from "../../../reduxToolkit/singleSlice/singleAsyncThunk";
import { useLocation } from "react-router-dom";

export const useProjectsData = () => {
  const { pathname } = useLocation();

  const error = useSelector((store) => store.singleSlice.error);
  const dispatch = useDispatch();
  const pathStatus = pathname.split("/")[1];

  useEffect(() => {
    if (
      pathStatus !== "portal" &&
      pathStatus !== "registration" &&
      pathStatus !== "expert"
    ) {
      dispatch(getColumnMenu());
    }
  }, []);

  return { error };
};
