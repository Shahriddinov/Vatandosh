import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../../../../reduxToolkit/eventsSlice/extraReducer";

export const useFetchingData = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsSlice.eventsData);
  const loading = useSelector((state) => state.eventsSlice.loading);

  useEffect(() => {
    if (!events.length) {
      dispatch(getEvents());
    }
  }, [dispatch]);

  return { events, loading };
};
