import React from "react";
import "./terms.scss";
import { useTranslation } from "react-i18next";

const Terms = ({ toggleModal, handleCheckbox }) => {
  const { t } = useTranslation();
  const acceptTerms = () => {
    toggleModal();
    handleCheckbox();
  };

  return (
    <div className="wrapper">
      <div className="modal">
        <h2>{t("terms")}</h2>
        <div className="terms">
          <div className="term">
            <h3>{t("term.use")}</h3>
            <p>{t("term.ones")}</p>
            <p>{t("term.two")}</p>
            <p>{t("term.three")}</p>
            <p>{t("term.four")}</p>
          </div>
          <div className="term">
            <h3>{t("term.rights")}</h3>
            <p>{t("term.five")}</p>
            <p>{t("term.six")}</p>
          </div>
          <div className="term">
            <h3>{t("term.uses")}</h3>
            <p>{t("term.seven")}</p>
            <p>{t("term.eight")}</p>
            <p>{t("term.nine")}</p>
            <p>{t("term.ten")}</p>
          </div>
          <div className="term">
            <h3>{t("term.other")}</h3>
            <p>{t("term.eleven")}</p>
            <p>{t("term.twelve")}</p>
          </div>

        </div>
        <div className="fade" />
        <div className="terms__buttons">
          <button className="close__terms" onClick={toggleModal}>
            {t("registerPrev")}
          </button>
          <button className="accept__terms" onClick={acceptTerms}>
            {t("registerNext")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
