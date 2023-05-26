import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { magazineGetAbout } from "../../../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";

export const useNewNumber = () => {
  const lan = useSelector((state) => state.language.language);

  const aboutLoading = useSelector((state) => state.journal.aboutLoading);
  const about = useSelector((state) => state.journal.about);

  const error = useSelector((state) => state.journal.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(magazineGetAbout());
  }, [dispatch, lan]);

  return {
    error,
    aboutLoading,
    about,
  };
};
