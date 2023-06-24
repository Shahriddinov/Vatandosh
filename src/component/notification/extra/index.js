import { monthObj } from "../../../config/constants";
import { changeNotificationCount } from "../../../reduxToolkit/notificationSlice/notificationSlice";

export const filterNotification = ({ data, dispatch }) => {
  const admin = [];
  const news = [];
  const events = [];

  data.forEach((el) => {
    if (el.is_read === null || el.is_read === false) {
      switch (el.type) {
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
  });
  console.log(events);
  dispatch(
    changeNotificationCount(
      news.length + admin.length + events.slice(0, 20).length
    )
  );

  return { admin, news, events: events.slice(0, 20) };
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
