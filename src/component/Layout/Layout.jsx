import React, { useState, useEffect, createContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import NetworkError from "../NetworkError/NetworkError";
import HeaderPortal from "../../pages/Portal/Header/Header";
import RegisterHeader from "../../pages/Registration/pages/Layout/Header/RegisterHeader";
import RegisterFooter from "../../pages/Registration/pages/Layout/Footer/RegisterFooter";
import { useProjectsData } from "./hooks/useProjectsData";

export const GrayContext = createContext();

const Layout = (props) => {
  const { error } = useProjectsData();
  const { pathname } = useLocation();
  const { children } = props;
  const [text, setText] = useState("");
  const [speaker, setSpeaker] = useState(false);
  const [isGray, setGray] = useState(
    localStorage.getItem("grayMode") ? localStorage.getItem("grayMode") : false
  );

  const registerHeader = pathname.split("/")[1];

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

  if (error) {
    return <b>{error}</b>;
  }

  return (
    <GrayContext.Provider value={{ isGray, grayScale }}>
      <NetworkError />
      <div
        className={
          registerHeader.includes("registration")
            ? "registerBackground"
            : registerHeader.includes("portal")
            ? ""
            : "page-wrapper1"
        }
      >
        {registerHeader.includes("portal") ? (
          <HeaderPortal />
        ) : registerHeader.includes("registration") ? (
          <RegisterHeader />
        ) : null}
        <div className="page-content">{children}</div>
        {registerHeader.includes("portal") ? null : registerHeader.includes(
            "registration"
          ) ? (
          <RegisterFooter />
        ) : (
          <Footer />
        )}
      </div>
    </GrayContext.Provider>
  );
};

export default Layout;
