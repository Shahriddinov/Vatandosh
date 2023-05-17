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
          <Link
            className="webinarheader-more"
            to="/portal-category/webinar/webinar-register/2"
          >
            {t("webinar.header1")}
          </Link>
          <Link
            className="webinarheader-link"
            to="/portal-category/webinar/online-webinar/2"
          >
            {t("webinar.header2")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WebinarHeader;
