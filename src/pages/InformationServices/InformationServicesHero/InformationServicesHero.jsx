import React from "react";
import "./InformationServicesHero.scss";
import { Link } from "react-router-dom";
import arrowRight from "../../../assets/images/informationServices/arrowRight.png";

export const InformationServicesHero = ({ pagePath }) => {
  return (
    <div className="main-header">
      <h2>{pagePath.title}</h2>
      <ul className="main-header__breadcrumb">
        {pagePath.path.slice(0, pagePath.path.length - 1).map((el) => (
          <li className="main-header__breadcrumb_item" key={el.id}>
            <Link className="site-main-header__breadcrumb_link" to={el.path}>
              {el.label}
            </Link>
            <img src={arrowRight} alt="breadcrumb line" />
          </li>
        ))}

        <li
          className="main-header__breadcrumb_item current_link"
          aria-current="page">
          {pagePath.path[pagePath.path.length - 1].label}
        </li>
      </ul>
    </div>
  );
};
