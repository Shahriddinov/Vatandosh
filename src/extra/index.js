import { getNotification } from "../reduxToolkit/notificationSlice/notificationSlice";

export const notificationAdd = ({ dispatch, message }) => {
  console.log(message);
  const { type } = message;
  if (type === "new" || type === "event" || type === "notification") {
    dispatch(getNotification({ per_page: 10, page: 1 }));
  }
};
