import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getVolunteerActivity,
  deleteVolunteerActivity,
  updateVolunteerActivity2,
  volunteerCreate,
} from "../../../../../../../../reduxToolkit/volunteer/extraReducer";

const useVoluntaryActivityFetching = (setData, initialState) => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const volounteerActivityData = useSelector(
    (state) => state.volunteerSlice.volunteerActivity
  );
  const deleteVolunteerStatus = useSelector(
    (state) => state.volunteerSlice.deleteVolunteerStatus
  );

  const volunteerCreateLoading = useSelector(
    (state) => state.volunteerSlice.volunteerCreateLoading
  );
  const updateVolunteerActivityLoading2 = useSelector(
    (state) => state.volunteerSlice.updateVolunteerActivityLoading2
  );

  const deleteCompHandler = (id) => {
    dispatch(deleteVolunteerActivity(id));
  };

  const submitCompHandler = (data) => {
    data.forEach((el) => {
      if (el.from === "server") {
        const formData = new FormData();
        const volunteerId = el.id;
        el.imagesBrowser.forEach((file) => {
          formData.append("images[]", file);
        });
        formData.append("title", el.title);
        formData.append("description", el.description);
        dispatch(updateVolunteerActivity2({ volunteerId, formData }));
      } else if (el.from === "client") {
        const formData = new FormData();
        formData.append("title", el.title);
        formData.append("description", el.description);
        el.imagesBrowser.forEach((file) => {
          formData.append("images[]", file);
        });
        dispatch(volunteerCreate(formData));
      }
    });
  };

  useEffect(() => {
    dispatch(getVolunteerActivity());
  }, [dispatch, lan]);

  useEffect(() => {
    if (deleteVolunteerStatus === "idle") {
      dispatch(getVolunteerActivity());
    }
  }, [deleteVolunteerStatus]);

  useEffect(() => {
    if (!volunteerCreateLoading) {
      window.location.reload();
    }
    if (!updateVolunteerActivityLoading2) {
      window.location.reload();
    }
  }, [volunteerCreateLoading, updateVolunteerActivityLoading2]);

  useEffect(() => {
    if (volounteerActivityData.length === 0) {
      setData([{ ...initialState }]);
    } else {
      const newData = volounteerActivityData.map((el) => {
        return {
          id: el.id,
          title: el.title,
          description: el.description,
          images: [...el.images],
          imagesBrowser: [],
          from: "server",
        };
      });
      setData(newData);
    }
  }, [volounteerActivityData]);
  return {
    deleteCompHandler,
    submitCompHandler,
  };
};

export default useVoluntaryActivityFetching;
