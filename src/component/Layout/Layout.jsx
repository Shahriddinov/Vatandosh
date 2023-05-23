import React from "react";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import NetworkError from "../NetworkError/NetworkError";
import HeaderPortal from "../../pages/Portal/components/Header/Header";
import RegisterHeader from "../../pages/Registration/pages/Layout/Header/RegisterHeader";
import RegisterFooter from "../../pages/Registration/pages/Layout/Footer/RegisterFooter";
import { useProjectsData } from "./hooks/useProjectsData";
import { useSelector } from "react-redux";
import Test from "../test/Test";
import Notification from "../notification/Notification";

const Layout = ({ children }) => {
  const { error } = useProjectsData();
  const errorHashtag = useSelector((state) => state.tagSearchSlice.error);
  const { pathname } = useLocation();

  const registerHeader = pathname.split("/")[1];

  if (error || errorHashtag) {
    return (
      <b>
        {error}
        {errorHashtag}
      </b>
    );
  }
  const FooterComponent = () => {
    if (registerHeader.includes("portal")) return null;
    else if (registerHeader.includes("portal-category")) return null;
    else if (pathname.split("/")[2] === "register") return null;
    else if (registerHeader.includes("registration")) return <RegisterFooter />;
    else return <Footer />;
  };

  return (
    <>
      <NetworkError />
      <Test />
      <div
        className={
          registerHeader.includes("registration")
            ? "registerBackground"
            : registerHeader.includes("portal")
            ? "page-wrapper1"
            : ""
        }
      >
        {registerHeader === "portal" && <HeaderPortal />}
        {registerHeader.includes("registration") && <RegisterHeader />}
        <div className="page-content">{children}</div>
        <Notification />
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;
