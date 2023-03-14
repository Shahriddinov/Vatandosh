import React from "react";
import { useTranslation } from "react-i18next";

import "./ContactUs.scss";

const ContactUs = () => {
  const { t } = useTranslation();

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us">
      <div className="contact-container container">
        <h3>{t("footerContactUs")}</h3>
        <form onSubmit={handleSumbit}>
          <input type="text" placeholder={t("footerName")} />
          <input type="text" placeholder="+998" />
          <button type="submit">{t("footerSend")}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
