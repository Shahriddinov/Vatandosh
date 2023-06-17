export const filterNotification = ({ data }) => {
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
  });

  return { admin, news, events };
};

export const notificationGetTime = (time) => {
  const date = new Date(time);
};
