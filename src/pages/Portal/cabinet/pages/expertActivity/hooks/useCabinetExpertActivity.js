import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpertActivity } from "../../../../../../reduxToolkit/ExpertSlice/ExpertActivity/extraReducer";

export const useCabinetExpertActivity = () => {
  const lan = useSelector((state) => state.language.language);

  const { data, loading, error } = useSelector(
    (state) => state.expertActivitySlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpertActivity());
  }, [lan, dispatch]);

  return {
    error,
    loading,
    data,
  };
};
