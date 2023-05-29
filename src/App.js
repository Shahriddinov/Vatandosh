import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const MessagesContext = createContext();

function App({ children }) {
  const [messages, setMessages] = useState([]);

  const token = useSelector((state) => state.authSlice.token);

  const socket = new WebSocket(
    `wss://vatandoshlar.napaautomotive.uz/ws/messages/?token=${token}`
  );

  useEffect(() => {
    socket.onopen = (event) => {
      console.log("Websocket connected!");
    };
    socket.onmessage = (event) => {
      console.log(JSON.parse(event.data));
      console.log(messages);
      const message = JSON.parse(event.data)?.message;

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
  }, []);

  console.log(messages);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}

export default App;
