import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { magazineGetMenu } from "../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";

export const useElectronicJournalLayout = () => {
  const lan = useSelector((state) => state.language.language);

  const menu = useSelector((state) => state.journal.menu);
  const menuLoading = useSelector((state) => state.journal.menuLoading);

  const error = useSelector((state) => state.journal.error);

  const dispatch = useDispatch();

  console.log(menu);
  useEffect(() => {
    dispatch(magazineGetMenu());
  }, [dispatch, lan]);

  return { menu, menuLoading, lan, error };
};
