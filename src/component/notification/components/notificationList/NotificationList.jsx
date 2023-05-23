import React from "react";
import NotificationCard from "../notificationCard/NotificationCard";

const NotificationList = () => {
  return (
    <ul className="notification-list">
      {[1, 2].map((el) => (
        <NotificationCard />
      ))}
    </ul>
  );
};

export default NotificationList;
