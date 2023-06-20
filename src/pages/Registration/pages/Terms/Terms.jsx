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
            <h3>{t("terms.use")}</h3>
            <p>{t("terms.one")}</p>
            <p>{t("terms.two")}</p>
            <p>{t("terms.three")}</p>
            <p>{t("terms.four")}</p>
          </div>
          <div className="term">
            <h3>{t("terms.rights")}</h3>
            <p>{t("terms.five")}</p>
            <p>{t("terms.six")}</p>
          </div>
          <div className="term">
            <h3>{t("terms.uses")}</h3>
            <p>{t("terms.seven")}</p>
            <p>{t("terms.eight")}</p>
            <p>{t("terms.nine")}</p>
            <p>{t("terms.ten")}</p>
          </div>
          <div className="term">
            <h3>{t("terms.other")}</h3>
            <p>{t("terms.eleven")}</p>
            <p>{t("terms.twelve")}</p>
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
