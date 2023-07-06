import React from "react";
import Header from "../../component/Layout/Header/Header";
import Coats from "../../assets/images/home/Coat.svg";
import "./Symbols.scss";
import { useTranslation } from "react-i18next";

function Coat() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="symbol container">
        <img src={Coats} alt="" />
        <div className="symbol_text_start">{t("symbols.coat")}</div>
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
