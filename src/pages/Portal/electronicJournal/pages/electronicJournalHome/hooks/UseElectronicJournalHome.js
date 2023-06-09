import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  magazineGetTips,
  magazinePopularAll,
} from "../../../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";

export const useElectronicJournalHome = () => {
  const lan = useSelector((state) => state.language.language);

  const allMagazinePopular = useSelector(
    (state) => state.journal.allMagazinePopular
  );
  const allMagazinePopularLoading = useSelector(
    (state) => state.journal.allMagazinePopularLoading
  );

  const lastMagazine = useSelector((state) => state.journal.lastMagazine);

  const tips = useSelector((state) => state.journal.tips);
  const tipsLoading = useSelector((state) => state.journal.tipsLoading);

  const error = useSelector((state) => state.journal.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(magazinePopularAll());
    dispatch(magazineGetTips());
  }, [dispatch, lan]);

  return {
    error,
    tipsLoading,
    tips,
    lastMagazine,
    allMagazinePopularLoading,
    allMagazinePopular,
  };
};
