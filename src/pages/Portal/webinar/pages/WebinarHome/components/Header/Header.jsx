import React from "react";
import "./WebinarHeader.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function WebinarHeader({ headerData }) {
  const { t } = useTranslation();
  return (
    <div className="webinarheader">
      <div className="container">
        <h2>{headerData.title}</h2>
        <p className="webinarheader-text">{headerData.subTitle}</p>
        <div className="webinarheader-list">
          <Link className="webinarheader-more" to="/expert/register">
            {t("voluntery.headersubmit")}
          </Link>
          <Link className="webinarheader-link" to="/expert/register">
            {t("voluntery.headersubmit")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WebinarHeader;
