import React from "react";
import "./test.scss";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();
  return (
    <div className="test">
      <marquee className="test__text">{t("test_sayt")}</marquee>
    </div>
  );
};

export default Test;
