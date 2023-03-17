import React, { useState, useEffect, createContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import NetworkError from "../NetworkError/NetworkError";
import HeaderPortal from "../../pages/Portal/Header/Header";
import RegisterHeader from "../../pages/Registration/pages/Layout/Header/RegisterHeader";
import RegisterFooter from "../../pages/Registration/pages/Layout/Footer/RegisterFooter";

export const GrayContext = createContext();

const Layout = (props) => {
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

  return (
    <GrayContext.Provider value={{ isGray, grayScale }}>
      <NetworkError />
      <div
        className={
          pathname === "/"
            ? "page-wrapper1"
            : pathname === "/about"
            ? "page-about"
            : pathname === "/about/council-trustees"
            ? "page-about"
            : pathname === "/registration/register" ||
              pathname === "/registration/signup" ||
              pathname === "/registration/signin" ||
              pathname === "/registration/recovery-password" ||
              pathname === "/registration/change-password"
            ? "registerBackground"
            : "page-wrapper2"
        }
      >
        {pathname === "/portal" ? (
          <HeaderPortal />
        ) : pathname === "/registration" ? (
          <RegisterHeader />
        ) : pathname === "/registration/register" ||
          pathname === "/registration/signup" ||
          pathname === "/registration/signin" ||
          pathname === "/registration/recovery-password" ||
          pathname === "/registration/change-password" ? (
          <RegisterHeader />
        ) : (
          <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />
        )}
        <div className="page-content">{children}</div>
        {pathname === "/portal" ? (
          ""
        ) : pathname === "/registration/register" ||
          pathname === "/registration/signup" ||
          pathname === "/registration/signin" ||
          pathname === "/registration/recovery-password" ||
          pathname === "/registration/change-password" ? (
          <RegisterFooter />
        ) : (
          <Footer />
        )}
      </div>
    </GrayContext.Provider>
  );
};

export default Layout;
