import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicAssociationData } from "../../../../reduxToolkit/publicAssociations/extraReducer";
import { getAllCountriesData } from "../../../../reduxToolkit/publicAssociations/extraReducer";

export const usePublicAssData = () => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const publicAssloading = useSelector(
    (state) => state.publicAssSlice.publicAssloading
  );
  const publicAssdata = useSelector(
    (state) => state.publicAssSlice.publicAssdata
  );
  const publicAsserror = useSelector(
    (state) => state.publicAssSlice.publicAsserror
  );
  const countriesLoading = useSelector(
    (state) => state.publicAssSlice.countriesLoading
  );
  const countriesData = useSelector(
    (state) => state.publicAssSlice.countriesData
  );
  const countriesError = useSelector(
    (state) => state.publicAssSlice.countriesError
  );

  useEffect(() => {
    dispatch(
      getPublicAssociationData({
        regionId: 0,
        page: 1,
        perPage: 8,
      })
    );
    dispatch(getAllCountriesData());
  }, [dispatch, lan]);

  return {
    publicAssloading,
    publicAssdata,
    publicAsserror,
    countriesLoading,
    countriesData,
    countriesError,
  };
};
