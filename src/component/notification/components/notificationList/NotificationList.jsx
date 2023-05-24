import React from "react";
import NotificationCard from "../notificationCard/NotificationCard";

import "./notificationList.scss";
const NotificationList = ({ data }) => {
  return (
    <ul className="notification-list">
      {data.map((el) => (
        <NotificationCard key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default NotificationList;
