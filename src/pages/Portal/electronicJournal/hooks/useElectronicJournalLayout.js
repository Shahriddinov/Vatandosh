import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  magazineGetAll,
  magazineGetMenu,
  magazineGetTips,
} from "../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";

export const useElectronicJournalLayout = () => {
  const lan = useSelector((state) => state.language.language);

  const menu = useSelector((state) => state.journal.menu);
  const menuLoading = useSelector((state) => state.journal.menuLoading);

  const allMagazine = useSelector((state) => state.journal.allMagazine);
  const allMagazineLoading = useSelector(
    (state) => state.journal.allMagazineLoading
  );

  const tips = useSelector((state) => state.journal.tips);
  const tipsLoading = useSelector((state) => state.journal.tipsLoading);

  const error = useSelector((state) => state.journal.error);

  const dispatch = useDispatch();

  console.log(allMagazine);
  console.log(tips);
  useEffect(() => {
    dispatch(magazineGetMenu());
    dispatch(magazineGetTips());
    dispatch(magazineGetAll());
  }, [dispatch, lan]);

  return { menu, menuLoading, lan, error };
};
