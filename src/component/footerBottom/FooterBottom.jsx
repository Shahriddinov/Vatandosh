import React from "react";
import { useTranslation } from "react-i18next";

import napaName from "../../assets/images/icons/napa.png";

const FooterBottom = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-bottom">
      <a href="https://napaautomotive.uz/" target="_blank" className="footer-company-name">
        <img src={napaName} alt="napa-name" />
      </a>
      <div className="copyright">
        <span>Copyright © 2023 {t("footerFund")}</span>
      </div>
    </div>
  );
};

export default FooterBottom;
