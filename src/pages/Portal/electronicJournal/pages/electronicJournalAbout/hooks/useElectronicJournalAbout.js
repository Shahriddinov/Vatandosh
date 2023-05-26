import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { magazineGetOne } from "../../../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

export const useElectronicJournalAbout = () => {
  const context = useOutletContext();
  const { pathname } = useLocation();
  const { journalId } = useParams();

  const pageMenu = context.find((el) => el.url === pathname);

  const lan = useSelector((state) => state.language.language);

  const oneMagazineLoading = useSelector(
    (state) => state.journal.oneMagazineLoading
  );
  const oneMagazine = useSelector((state) => state.journal.oneMagazine);

  const error = useSelector((state) => state.journal.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(magazineGetOne({ id: journalId }));
  }, [dispatch, lan, journalId]);

  return {
    lan,
    error,
    oneMagazineLoading,
    oneMagazine,
    pageMenu,
  };
};
