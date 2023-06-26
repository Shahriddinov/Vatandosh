import { getNotification } from "../reduxToolkit/notificationSlice/notificationSlice";

export const notificationAdd = ({ dispatch, message }) => {
  const { type } = message;
  if (type === "new" || type === "event" || type === "notification") {
    dispatch(getNotification({ per_page: 10, page: 1 }));
  }
};
