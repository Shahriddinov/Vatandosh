import React from "react";
import Header from "../../component/Layout/Header/Header";
import Coats from "../../assets/images/home/Coat.svg";
import "./Symbols.scss";
import Flags from "../../assets/images/home/Flags.svg";
import { useTranslation } from "react-i18next";

function Coat(props) {
  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  return (
    <>
      <Header />
      <div className="symbol container">
        <img src={Coats} alt="" />
        <div className="symbol_coat">{t("symbols.coat")}</div>
        <div className="symbol_title">
          <p
            style={{ width: "50%" }}
            dangerouslySetInnerHTML={{ __html: t("symbols.coatAbout") }}
          />
        </div>
      </div>
    </>
  );
}

export default Coat;
