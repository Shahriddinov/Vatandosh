import { monthObj } from "../../../config/constants";
import { changeNotificationCount } from "../../../reduxToolkit/notificationSlice/notificationSlice";

export const filterNotification = ({ data, dispatch }) => {
  const admin = [];
  const news = [];
  const events = [];

  data.forEach((el) => {
    const { type, is_read } = el;
    if (!is_read) {
      switch (type) {
        case "notification":
          admin.push(el);
          break;
        case "new":
          news.push(el);
          break;
        case "event":
          events.push(el);
          break;
        default:
      }
    }
    dispatch(
      changeNotificationCount(news.length + admin.length + events.length)
    );
  });

  return { admin, news, events };
};

export const notificationGetTime = (time, lan) => {
  const createDate = new Date(time);
  const currentTime = new Date();
  const isDayTime = currentTime.getDay() - createDate.getDay();

  const day =
    isDayTime === 0
      ? "bugun"
      : isDayTime === -1
      ? "kecha"
      : createDate.getDay() + " " + monthObj[lan][createDate.getMonth() - 1];

  const hours = createDate.getHours() + ":" + createDate.getMinutes();
  return { day, hours };
};
