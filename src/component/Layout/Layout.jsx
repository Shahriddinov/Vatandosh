import React, { useState, useEffect, createContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router";
import NetworkError from "../NetworkError/NetworkError";

export const GrayContext = createContext();

const Layout = (props) => {
  const { pathname } = useLocation();
  const { children } = props;
  const [text, setText] = useState("");
  const [speaker, setSpeaker] = useState(false);
  const [isGray, setGray] = useState(
    localStorage.getItem("grayMode") ? localStorage.getItem("grayMode") : false
  );

  const changeSpeakSwitcher = (value) => {
    setSpeaker(value);
  };

  const grayScale = () => {
    setGray(!isGray);
    localStorage.setItem("grayMode", !isGray);
  };

  const htmlTag = document.getElementsByTagName("html");

  JSON.parse(isGray)
    ? htmlTag[0].classList.add("gray-scale")
    : htmlTag[0].classList.remove("gray-scale");

  useEffect(() => {
    document.onmouseup = () => {
      if (speaker && text !== window.getSelection().toString()) {
        window.responsiveVoice.speak(
          window.getSelection().toString(),
          "Russian Female"
        );
        setText(window.getSelection().toString());
      }
    };
    //eslint-disable-next-line
  }, [speaker]);

  return (
    <GrayContext.Provider value={{ isGray, grayScale }}>
      <NetworkError />
      <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
        <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />
        <div className="page-content">{children}</div>
        {pathname === "/portal" ? "" : <Footer />}
      </div>
    </GrayContext.Provider>
  );
};

export default Layout;
