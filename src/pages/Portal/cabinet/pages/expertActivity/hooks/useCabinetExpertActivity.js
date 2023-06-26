import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cabinetExpertActivityGet } from "../../../../../../reduxToolkit/portalSlices/CabinetSlice/cabinetExtraActions";

export const useCabinetExpertActivity = () => {
  const lan = useSelector((state) => state.language.language);

  const data = useSelector((state) => state.cabinet.expertActivityData);
  const loading = useSelector(
    (state) => state.cabinet.expertActivityDataLoading
  );
  const error = useSelector((state) => state.cabinet.expertActivityError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cabinetExpertActivityGet());
  }, [lan, dispatch]);

  return {
    error,
    loading,
    data,
  };
};
