import React from "react";
import { useTranslation } from "react-i18next";

import napaName from "../../assets/images/icons/napa.png";

const FooterBottom = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-bottom">
      <div className="footer-company-name">
        <img src={napaName} alt="napa-name" />
      </div>
      <div className="copyright">
        <span>Copyright © 2023 {t("footerFund")}</span>
      </div>
    </div>
  );
};

export default FooterBottom;
