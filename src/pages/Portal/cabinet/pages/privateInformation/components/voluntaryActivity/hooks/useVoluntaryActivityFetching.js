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

  const deleteCompHandler = (id) => {
    dispatch(deleteVolunteerActivity(id));
  };

  const submitCompHandler = (payload) => {
    payload.forEach((el) => {
      if (el.from === "server") {
        const formData = new FormData();
        el.imagesBrowser.forEach((file) => {
          formData.append("images[]", file);
        });
        formData.append("title", el.title);
        formData.append("description", el.description);

        dispatch(updateVolunteerActivity2(el.id, formData));
      }
      if (el.from === "client") {
        const formData = new FormData();
        formData.append("title", el.title);
        formData.append("description", el.description);
        el.imagesBrowser.forEach((file) => {
          formData.append("images[]", file);
        });
        // formData.append("images[]", [...el.imagesBrowser]);
        const data = Object.fromEntries(formData);
        console.log("hello its client");
        console.log(data);
        dispatch(volunteerCreate(formData));
      }
    });
  };

  useEffect(() => {
    dispatch(getVolunteerActivity());
  }, [dispatch, lan, volounteerActivityData.length]);

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
