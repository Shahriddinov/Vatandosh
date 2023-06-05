import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerOne } from "../../../../../../reduxToolkit/volunteer/extraReducer";
import { getItem } from "../../../../../../helpers/persistanceStorage";

export const useCabinetVolunteerFetching = () => {
  const lan = useSelector((state) => state.language.language);

  const volunteerOneLoading = useSelector(
    (state) => state.volunteerSlice.volunteerOneLoading
  );
  const volunteerOneData = useSelector(
    (state) => state.volunteerSlice.volunteerOneData
  );

  const error = useSelector((state) => state.volunteerSlice.error);

  const user = getItem("user") ? JSON.parse(getItem("user")) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVolunteerOne(user?.user_id?.id));
  }, [lan, dispatch, user?.user_id?.id]);

  return {
    error,
    volunteerOneData,
    volunteerOneLoading,
  };
};
