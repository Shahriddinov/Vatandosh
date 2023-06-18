import React from "react";
import "./tab.scss";

const tabData = [
  { id: 1, type: "admin", label: "Admin" },
  { id: 2, type: "news", label: "Yangiliklar" },
  { id: 3, type: "events", label: "Tadbirlar" },
];

const Tab = ({ value, handleClose, setValue }) => {
  const handleClick = ({ event, type }) => {
    handleClose(event, type);
    setValue(type);
  };
  return (
    <div className="notification-tab">
      <ul className="notification-tab__list">
        {tabData.map((item) => (
          <li
            key={item.id}
            className={`notification-tab__item ${
              item.type === value ? "active" : ""
            }`}
            onClick={(evt) => handleClick({ event: evt, type: item.type })}
          >
            <span>{item.label}</span>
            {item.type !== value && (
              <span className="notification-tab__item_dot"></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
