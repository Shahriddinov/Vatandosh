import React from "react";
import { Link, useParams } from "react-router-dom";
import "./InformationServicesComponent.scss";

const InformationServicesComponent = ({ pathPages }) => {
  const { pageName } = useParams();

  return (
    <div className="informationServicesComponent">
      <h2 className="informationServicesComponent-title">Axborot xizmati</h2>
      <ul className="informationServicesComponent-list">
        {pathPages
          .filter((link) => link.link !== pageName)
          .map((link) => (
            <li key={link.id}>
              <img src={link.icon} alt="" />
              <Link to={`/information-service/${link.link}`}>{link.path}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InformationServicesComponent;
