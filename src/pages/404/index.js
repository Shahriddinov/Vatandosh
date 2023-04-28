import React from "react";
import { Link, useLocation } from "react-router-dom";
import znak from "../../assets/images/znak.png";
import znakLeft from "../../assets/images/znak-left.png";
import Erorr from "../../assets/images/404.svg"
import "./style.scss";
import Header from "../../component/Layout/Header/Header";
import Footer from "../../component/Layout/Footer/Footer";

const NotFound = () => {
  const { pathname } = useLocation();

  const registerHeader = pathname.split("/")[1];

  const HeaderComponent = () => {
    if (
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
            {/*<img*/}
            {/*  className="back-image"*/}
            {/*  src={require("../../assets/images/404-png.png")}*/}
            {/*  alt="earth"*/}
            {/*/>*/}
            <img className="back-image" src={Erorr} alt="znak" />
            {/*<img className="znak" src={znak} alt="znak2" />*/}
          </div>
          <h2 className="title">Ync! Cтраница не найдена</h2>
          <Link to="/" className="go-home-btn">
            Домой
          </Link>
        </div>
      </div>
      {registerHeader[0] === "portal" && <Footer />}
    </>
  );
};

export default NotFound;
