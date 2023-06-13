import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerActivity } from "../../../../../../reduxToolkit/volunteer/extraReducer";

export const useCabinetVolunteerFetching = () => {
  const lan = useSelector((state) => state.language.language);

  const volunteerActivityLoading = useSelector(
    (state) => state.volunteerSlice.volunteerActivityLoading
  );
  const volunteerActivity = useSelector(
    (state) => state.volunteerSlice.volunteerActivity
  );

  const error = useSelector((state) => state.volunteerSlice.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVolunteerActivity());
  }, [lan, dispatch]);

  return {
    error,
    volunteerActivity,
    volunteerActivityLoading,
  };
};
