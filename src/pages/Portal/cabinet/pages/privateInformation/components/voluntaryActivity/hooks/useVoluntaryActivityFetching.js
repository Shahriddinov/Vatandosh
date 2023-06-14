import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerActivity } from "../../../../../../../../reduxToolkit/volunteer/extraReducer";
import {
  deleteVolunteerActivity,
  updateVolunteerActivity,
  postVolunteerActivity,
} from "../../../../../../../../reduxToolkit/volunteer/extraReducer";

const useVoluntaryActivityFetching = (setData, initialState) => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const volounteerActivityData = useSelector(
    (state) => state.volunteerSlice.volunteerActivity
  );

  const deleteCompHandler = (id) => {
    dispatch(deleteVolunteerActivity(id));
    dispatch(getVolunteerActivity());
  };

  const updateCompHandler = (payload) => {
    payload.forEach((el) => {
      if (el.from === "server") {
        const formData = new FormData();
        formData.append("id", el.id);
        formData.append("images", el.imagesBrowser);
        formData.append("title", el.title);
        formData.append("description", el.description);

        dispatch(updateVolunteerActivity(formData));
      } else if (el.from === "client") {
        const formData = new FormData();
        formData.append("title", el.title);
        formData.append("description", el.description);
        formData.append("images", el.imagesBrowser);
        dispatch(postVolunteerActivity(formData));
      }
    });
  };

  useEffect(() => {
    dispatch(getVolunteerActivity());
  }, [dispatch, lan]);

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
    updateCompHandler,
  };
};

export default useVoluntaryActivityFetching;
