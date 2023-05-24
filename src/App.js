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
    socket.onopen = (e) => {
      console.log(e);
    };
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, JSON.parse(event.data).message]);
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
