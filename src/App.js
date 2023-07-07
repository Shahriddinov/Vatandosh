import { type } from "@testing-library/user-event/dist/type";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationAdd } from "./extra";
import { getNotification } from "./reduxToolkit/notificationSlice/notificationSlice";

export const MessagesContext = createContext();

function App({ children }) {
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authSlice.token);
  const notificationOneDataStatus = useSelector(
    (store) => store.notification.notificationOneDataStatus
  );

  let socket;

  if (token) {
    socket = new WebSocket(
      `wss://api.vatandoshlarfondi.uz/ws/messages/?token=${token}`
    );
  }

  window.onbeforeunload = () => {
    localStorage.clear();
  };

  useEffect(() => {
    if (token) {
      socket.onopen = (event) => {
        console.log("Websocket connected!");
      };
      socket.onmessage = (event) => {
        const message = JSON.parse(event.data)?.message;
        notificationAdd({ dispatch, message });
        setMessages((prev) => [
          ...prev,
          prev[prev.length - 1]?.chat_room_id === message.chat_room_id
            ? message
            : prev.length === 0
            ? message
            : null,
        ]);
      };
      socket.onclose = function (event) {
        console.log(event);
        setTimeout(function () {
          App();
        }, 1000);
      };
      socket.onerror = function (error) {
        console.log(error);
      };
    }
    if (token) {
      dispatch(getNotification({ per_page: 1000, page: 1 }));
    }
  }, []);

  useEffect(() => {
    if (notificationOneDataStatus) {
      dispatch(getNotification({ per_page: 1000, page: 1 }));
    }
  }, [notificationOneDataStatus, dispatch]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}

export default App;
