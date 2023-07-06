import React from "react";
import Header from "../../component/Layout/Header/Header";
import Flags from "../../assets/images/home/Flags.svg";
import "./Symbols.scss";
import { useTranslation } from "react-i18next";

function Flag() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="symbol container">
        <img className="symbol_allSym flay" src={Flags} alt="" />
        <div className="symbol_text">
          <div className="symbol_text_start">{t("BayroqTwo")}</div>
          <p
            className="symbol_title_flags"
            dangerouslySetInnerHTML={{ __html: t("BayroqThree") }}
          />
        </div>
      </div>
    </>
  );
}

export default Flag;
