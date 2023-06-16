import React from "react";
import Header from "../../component/Layout/Header/Header";
import Flags from "../../assets/images/home/Flags.svg";
import "./Symbols.scss";
import { useTranslation } from "react-i18next";

function Flag(props) {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="symbol container">
        <img className="symbol_allSym flay" src={Flags} alt="" />
        <div className="symbol_text">
          <div className="symbol_text_start">{t("BayroqTwo")}</div>
          <div className="symbol_title">
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("BayroqOne")}
            </b>
            {t("BayroqThree")} <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("BayroqFour")}
            </b>{" "}
            {t("BayroqFive")} <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("BayroqSix")}
            </b>{" "}
            {t("BayroqSeven")} <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("BayroqSix")}
            </b>{" "}
            {t("BayroqEight")} <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("BayroqNine")}
            </b>{" "}
            {t("BayroqTen")} <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("BayroqEleven")}
            </b>{" "}
            {t("BayroqTwelf")} <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("Bayroq13")}
            </b>{" "}
            {t("Bayroq14")} <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              {t("BayroqFour")}
            </b>{" "}
            {t("Bayroq15")}
          </div>
        </div>
      </div>
    </>
  );
}

export default Flag;
