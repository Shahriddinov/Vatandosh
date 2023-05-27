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
      const message = JSON.parse(event.data).message;
      console.log(message);
      setMessages((prev) => [
        ...prev,
        prev[prev.length - 2]?.chat_room_id === message.chat_room_id
          ? message
          : null,
      ]);
    };
    socket.onclose = function (event) {
      console.log(event);
    };
    socket.onerror = function (error) {
      console.log(error);
    };
  }, []);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}

export default App;
