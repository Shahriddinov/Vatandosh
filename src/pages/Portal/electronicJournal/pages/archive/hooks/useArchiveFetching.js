import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { magazineGetAll } from "../../../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";
import { useLocation, useOutletContext } from "react-router-dom";

export const useArchiveFetching = () => {
  const context = useOutletContext();
  const { pathname } = useLocation();

  const pageMenu = context.find((el) => el.url === pathname);

  const lan = useSelector((state) => state.language.language);

  const allMagazineLoading = useSelector(
    (state) => state.journal.allMagazineLoading
  );
  const allMagazine = useSelector((state) => state.journal.allMagazine);

  const error = useSelector((state) => state.journal.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(magazineGetAll({ paginate: 1, page: 1 }));
  }, [dispatch, lan]);

  return {
    lan,
    error,
    allMagazineLoading,
    allMagazine,
    pageMenu,
    dispatch,
  };
};
