import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getAllRegions } from "../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { getExpertFilter } from "../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { getExpertSpecialization } from "../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";

export const useExportEmploy = () => {
  const language = useSelector((store) => store.language.language);
  const allRegionsChange = createSelector(
    (store) => store.community.allRegionsGet,
    (location) => {
      return location.map((el) => ({ ...el, label: el.name }));
    }
  );

  const allRegions = useSelector(allRegionsChange);
  const allRegionsGetLoading = useSelector(
    (store) => store.community.allRegionsGetLoading
  );

  const specialization = useSelector(
    (state) => state.expertRegisterSlice.specialization
  );

  const expertData = useSelector((state) => state.expertSlice.expertData);
  const loading = useSelector((state) => state.expertSlice.loading);
  const expertError = useSelector((state) => state.expertSlice.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExpertSpecialization());
    dispatch(getAllRegions());
    dispatch(
      getExpertFilter({ perPage: 12, countryId: "", specialization: "" })
    );
  }, [dispatch, language]);

  allRegions.unshift({
    id: "all",
    name: "Barcha davlatlar",
    label: "Barcha davlatlar",
    code: "Barcha davlatlar",
    flag: null,
    count: 0,
  });

  return {
    allRegions,
    allRegionsGetLoading,
    dispatch,
    expertData,
    specialization,
    loading,
    expertError,
  };
};
