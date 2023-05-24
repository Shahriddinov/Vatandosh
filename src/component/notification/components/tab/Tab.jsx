import React from "react";
import "./tab.scss";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const tabData = [
  { id: 1, type: "admin", label: "Admin" },
  { id: 2, type: "news", label: "Yangiliklar" },
  { id: 3, type: "events", label: "Tadbirlar" },
];
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ZhdGFuZG9zaGxhci5uYXBhYXV0b21vdGl2ZS51ei9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY4NDY4MDUwMiwiZXhwIjoxNjg1NTQ0NTAyLCJuYmYiOjE2ODQ2ODA1MDIsImp0aSI6ImRRWUhBdnFkenRpZEVKZ0QiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.YwjC3Gtmqspkf-3CS_KJmvQfcvBAG0JQKQybbnzlHi8";
const url =
  "https://vatandoshlar.napaautomotive.uz/api/notification/notification?token=" +
  token;

const url2 = "wss://vatandoshlar.napaautomotive.uz/ws/messages/?token=" + token;
const Tab = ({ value, handleClose, setValue }) => {
  const [socketUrl, setSocketUrl] = useState(url);

  const { sendMessage, lastMessage, readyState } = useWebSocket(url2);
  const [messageHistory, setMessageHistory] = useState();

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory(lastMessage.data);
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickSendMessage = useCallback(() => sendMessage("Hello"), []);
  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const handleClick = ({ event, type }) => {
    handleClose(event, type);
    setValue(type);
    if (type === "admin") {
    } else if (type === "news") {
      handleClickSendMessage();
    }
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
            disabled={readyState !== ReadyState.OPEN}
          >
            <span>{item.label}</span>
            {item.type !== value && (
              <span className="notification-tab__item_dot"></span>
            )}
          </li>
        ))}
      </ul>
      <h4>{connectionStatus}</h4>
    </div>
  );
};

export default Tab;
