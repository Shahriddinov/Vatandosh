import React from "react";
import { Link, useParams } from "react-router-dom";
import "./InformationServicesComponent.scss";
import { useTranslation } from "react-i18next";

const InformationServicesComponent = ({ pathPages }) => {
  const { pageName } = useParams();

  const { t } = useTranslation();

  return (
    <div className="informationServicesComponent">
      <h2 className="informationServicesComponent-title">
        {t("footerService")}
      </h2>
      <ul className="informationServicesComponent-list">
        {pathPages
          .filter((link) => link.link.split("/")[2] !== pageName)
          .map((link) => (
            <li key={link.id}>
              <img src={link.icon} alt="" />
              <Link to={`${link.link}`}>{link.path}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InformationServicesComponent;
