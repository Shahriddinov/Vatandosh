import React from "react";
import "./tab.scss";

const Tab = () => {
  return (
    <div className="notification-tab">
      <ul className="notification-tab__list">
        <li className="notification-tab__item">
          <span>Admin</span>
          <span className="notification-tab__item_dot"></span>
        </li>

        <li className="notification-tab__item">
          <span>Yangiliklar</span>
          <span className="notification-tab__item_dot"></span>
        </li>

        <li className="notification-tab__item">
          <span>Tadbirlar</span>
          <span className="notification-tab__item_dot"></span>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
