import { useState } from "react";
import { createContext } from "react";

export const GrayContext = createContext();

const GrayContextProvider = ({ children }) => {
  const [isGray, setGray] = useState(
    localStorage.getItem("grayMode") ? localStorage.getItem("grayMode") : false
  );

  const grayScale = () => {
    setGray(!isGray);
    localStorage.setItem("grayMode", !isGray);
  };

  const htmlTag = document.getElementsByTagName("html");

  JSON.parse(isGray)
    ? htmlTag[0].classList.add("gray-scale")
    : htmlTag[0].classList.remove("gray-scale");

  return (
    <GrayContext.Provider value={{ isGray, grayScale }}>
      {children}
    </GrayContext.Provider>
  );
};

export default GrayContextProvider;
