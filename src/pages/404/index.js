import React from "react";
import { Link, useLocation } from "react-router-dom";
import znak from "../../assets/images/znak.png";
import znakLeft from "../../assets/images/znak-left.png";
import "./style.scss";
import Header from "../../component/Layout/Header/Header";
import Footer from "../../component/Layout/Footer/Footer";
import ExpertHeader from "../Portal/expert/components/ExpertHeader/ExpertHeader";

const NotFound = () => {
  const { pathname } = useLocation();

  const registerHeader = pathname.split("/")[1];

  const HeaderComponent = () => {
    if (registerHeader.includes("expert") && pathname.split("/").length <= 2)
      return <ExpertHeader />;
    else if (
      !registerHeader.includes("registration") &&
      !registerHeader.includes("portal") &&
      !registerHeader.includes("expert")
    )
      return <Header />;
  };

  return (
    <>
      <HeaderComponent />

      <div className="container">
        <div className="not-found">
          <div className="img-box">
            <img
              className="back-image"
              src={require("../../assets/images/404-png.png")}
              alt="earth"
            />
            <img className="znak-left" src={znakLeft} alt="znak" />
            <img className="znak" src={znak} alt="znak2" />
          </div>
          <h2 className="title">Уппс Мы не можем найти эту страницу</h2>
          <Link to="/" className="go-home-btn">
            Домой
          </Link>
        </div>
      </div>
      {registerHeader.includes("portal") && <Footer />}
    </>
  );
};

export default NotFound;
