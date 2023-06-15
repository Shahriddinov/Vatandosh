import React from "react";
import { Link, useLocation } from "react-router-dom";
import znak from "../../assets/images/znak.png";
import znakLeft from "../../assets/images/znak-left.png";
import Erorr from "../../assets/images/404.svg";
import "./style.scss";
import Header from "../../component/Layout/Header/Header";
import Footer from "../../component/Layout/Footer/Footer";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

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
            <img className="back-image" src={Erorr} alt="znak" />
          </div>
          <h2 className="title">{t("404")}</h2>
          <h3 className="">{t("404One")}</h3>
          <Link to="/" className="go-home-btn">
            {t("404Link")}
          </Link>
        </div>
      </div>
      {registerHeader[0] === "portal" && <Footer />}
    </>
  );
};

export default NotFound;
